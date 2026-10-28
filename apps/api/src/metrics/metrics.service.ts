import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { WorksService } from '../works/works.service';
import { ActionsService } from '../actions/actions.service';
import { LogsService } from '../logs/logs.service';
import { DashboardOverview, SystemMetric, WorkType } from '@portfolio/types';

@Injectable()
export class MetricsService {
  constructor(
    private prisma: PrismaService,
    private worksService: WorksService,
    private actionsService: ActionsService,
    private logsService: LogsService,
  ) {}

  async getSystemMetric(): Promise<SystemMetric> {
    const metric = await this.prisma.client.systemMetric.findFirst();
    if (metric) {
      return {
        ...metric,
        storageBytes: Number(metric.storageBytes),
        lastBackupAt: metric.lastBackupAt.toISOString(),
        updatedAt: metric.updatedAt.toISOString(),
      };
    }

    // Default system stats if none exist
    return {
      id: 'default-metric',
      totalFiles: 1482,
      storageBytes: 12.7 * 1024 * 1024 * 1024,
      lastBackupAt: new Date(Date.now() - 2 * 3600 * 1000).toISOString(),
      integrityOk: true,
      systemVersion: '0.1.0',
      updatedAt: new Date().toISOString(),
    };
  }

  async getDashboardOverview(): Promise<DashboardOverview> {
    const now = new Date();
    const works = await this.worksService.findAll();
    const actions = await this.actionsService.findAll();
    const latestLog = await this.logsService.findLatest();
    const systemMetric = await this.getSystemMetric();

    const todoCount = actions.filter((a) => a.status === 'TO_DO').length;
    const inProgressCount = actions.filter((a) => a.status === 'IN_PROGRESS').length;
    const waitingCount = actions.filter((a) => a.status === 'WAITING').length;
    const completedCount = actions.filter((a) => a.status === 'COMPLETED').length;

    const byType: Record<WorkType, number> = {
      PROJECT: works.filter((w) => w.type === 'PROJECT').length,
      RESEARCH: works.filter((w) => w.type === 'RESEARCH').length,
      CREATIVE: works.filter((w) => w.type === 'CREATIVE').length,
      SYSTEM: works.filter((w) => w.type === 'SYSTEM').length,
    };

    return {
      today: {
        date: now.toISOString(),
        dayOfWeek: now.toLocaleDateString('en-US', { weekday: 'long' }).toUpperCase(),
        dayNumber: now.getDate(),
        monthYear: now.toLocaleDateString('en-US', { month: 'short', year: 'numeric' }).toUpperCase(),
      },
      actionsSummary: {
        dueToday: todoCount + inProgressCount,
        todoCount,
        inProgressCount,
        waitingCount,
        completedCount,
      },
      worksSummary: {
        activeCount: works.filter((w) => w.status === 'IN_PROGRESS').length,
        byType,
      },
      entriesSummary: {
        thisWeekCount: 18,
        dailyDistribution: [2, 4, 3, 5, 2, 1, 1],
      },
      focusSummary: {
        weeklyProgress: 65,
        deltaLastWeek: 12,
      },
      recentWorks: works.slice(0, 4),
      upcomingActions: actions.slice(0, 5),
      latestDailyLog: latestLog,
      systemMetric,
    };
  }
}
