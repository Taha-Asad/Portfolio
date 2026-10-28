import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { ActionItem, CreateActionDto, UpdateActionDto } from '@portfolio/types';

@Injectable()
export class ActionsService {
  constructor(private prisma: PrismaService) {}

  async findAll(): Promise<ActionItem[]> {
    const items = await this.prisma.client.actionItem.findMany({
      include: { work: { select: { title: true } } },
      orderBy: [{ date: 'desc' }, { time: 'asc' }],
    });

    return items.map((item) => ({
      ...item,
      workTitle: item.work?.title || null,
      date: item.date.toISOString(),
      createdAt: item.createdAt.toISOString(),
      updatedAt: item.updatedAt.toISOString(),
    }));
  }

  async create(dto: CreateActionDto): Promise<ActionItem> {
    const item = await this.prisma.client.actionItem.create({
      data: {
        workId: dto.workId || null,
        time: dto.time,
        title: dto.title,
        status: dto.status || 'TO_DO',
        priority: dto.priority || 3,
        date: dto.date ? new Date(dto.date) : new Date(),
      },
      include: { work: { select: { title: true } } },
    });

    return {
      ...item,
      workTitle: item.work?.title || null,
      date: item.date.toISOString(),
      createdAt: item.createdAt.toISOString(),
      updatedAt: item.updatedAt.toISOString(),
    };
  }

  async update(id: string, dto: UpdateActionDto): Promise<ActionItem> {
    const item = await this.prisma.client.actionItem.update({
      where: { id },
      data: {
        ...dto,
        date: dto.date ? new Date(dto.date) : undefined,
      },
      include: { work: { select: { title: true } } },
    });

    return {
      ...item,
      workTitle: item.work?.title || null,
      date: item.date.toISOString(),
      createdAt: item.createdAt.toISOString(),
      updatedAt: item.updatedAt.toISOString(),
    };
  }

  async delete(id: string): Promise<boolean> {
    await this.prisma.client.actionItem.delete({ where: { id } });
    return true;
  }
}
