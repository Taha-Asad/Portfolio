export type WorkStatus = 'PLANNED' | 'IN_PROGRESS' | 'MAINTENANCE' | 'COMPLETED';

export type WorkType = 'PROJECT' | 'RESEARCH' | 'CREATIVE' | 'SYSTEM';

export type ActionStatus = 'TO_DO' | 'IN_PROGRESS' | 'WAITING' | 'COMPLETED';

export interface Milestone {
  id: string;
  workId: string;
  title: string;
  completed: boolean;
  order: number;
}

export interface Work {
  id: string;
  recordId: string; // e.g. "WRK-2025-0003"
  slug: string;
  title: string;
  subtitle?: string | null;
  description: string;
  type: WorkType;
  status: WorkStatus;
  area: string;
  owner: string;
  progress: number; // 0-100%
  thumbnailUrl?: string | null;
  model3dUrl?: string | null;
  tags: string[];
  metadata?: Record<string, unknown> | null;
  milestones?: Milestone[];
  actions?: ActionItem[];
  createdAt: string;
  updatedAt: string;
}

export interface ActionItem {
  id: string;
  workId?: string | null;
  workTitle?: string | null;
  time: string; // e.g. "09:30"
  title: string;
  status: ActionStatus;
  priority: number; // 1-5 (dot rating)
  date: string;
  createdAt: string;
  updatedAt: string;
}

export interface DailyLog {
  id: string;
  date: string;
  title: string;
  content: string;
  energy: number; // 0-100%
  focusRate: number; // 0-100%
  tags: string[];
  createdAt: string;
}

export interface SystemMetric {
  id: string;
  totalFiles: number;
  storageBytes: number;
  lastBackupAt: string;
  integrityOk: boolean;
  systemVersion: string;
  updatedAt: string;
}

export interface DashboardOverview {
  today: {
    date: string;
    dayOfWeek: string;
    dayNumber: number;
    monthYear: string;
  };
  actionsSummary: {
    dueToday: number;
    todoCount: number;
    inProgressCount: number;
    waitingCount: number;
    completedCount: number;
  };
  worksSummary: {
    activeCount: number;
    byType: Record<WorkType, number>;
  };
  entriesSummary: {
    thisWeekCount: number;
    dailyDistribution: number[]; // e.g. Mon-Sun counts
  };
  focusSummary: {
    weeklyProgress: number; // e.g. 65%
    deltaLastWeek: number; // e.g. +12%
  };
  recentWorks: Work[];
  upcomingActions: ActionItem[];
  latestDailyLog?: DailyLog | null;
  systemMetric: SystemMetric;
}

// DTOs for Creation / Mutation
export interface CreateWorkDto {
  recordId: string;
  slug: string;
  title: string;
  subtitle?: string;
  description: string;
  type?: WorkType;
  status?: WorkStatus;
  area?: string;
  owner?: string;
  progress?: number;
  thumbnailUrl?: string;
  model3dUrl?: string;
  tags?: string[];
  metadata?: Record<string, unknown>;
}

export interface UpdateWorkDto extends Partial<CreateWorkDto> {}

export interface CreateActionDto {
  workId?: string;
  time: string;
  title: string;
  status?: ActionStatus;
  priority?: number;
  date?: string;
}

export interface UpdateActionDto extends Partial<CreateActionDto> {}

export interface CreateDailyLogDto {
  title: string;
  content: string;
  energy?: number;
  focusRate?: number;
  tags?: string[];
}

export interface AuthResponse {
  accessToken: string;
  user: {
    id: string;
    username: string;
  };
}
