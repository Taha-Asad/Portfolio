import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateDailyLogDto, DailyLog } from '@portfolio/types';

@Injectable()
export class LogsService {
  constructor(private prisma: PrismaService) {}

  async findAll(): Promise<DailyLog[]> {
    const logs = await this.prisma.client.dailyLog.findMany({
      orderBy: { date: 'desc' },
      take: 30,
    });

    return logs.map((l) => ({
      ...l,
      date: l.date.toISOString(),
      createdAt: l.createdAt.toISOString(),
    }));
  }

  async findLatest(): Promise<DailyLog | null> {
    const log = await this.prisma.client.dailyLog.findFirst({
      orderBy: { date: 'desc' },
    });

    if (!log) return null;

    return {
      ...log,
      date: log.date.toISOString(),
      createdAt: log.createdAt.toISOString(),
    };
  }

  async create(dto: CreateDailyLogDto): Promise<DailyLog> {
    const log = await this.prisma.client.dailyLog.create({
      data: {
        title: dto.title,
        content: dto.content,
        energy: dto.energy ?? 80,
        focusRate: dto.focusRate ?? 75,
        tags: dto.tags || [],
      },
    });

    return {
      ...log,
      date: log.date.toISOString(),
      createdAt: log.createdAt.toISOString(),
    };
  }
}
