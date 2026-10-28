import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateWorkDto, UpdateWorkDto, Work } from '@portfolio/types';

@Injectable()
export class WorksService {
  constructor(private prisma: PrismaService) {}

  private mapWork(record: any): Work {
    return {
      ...record,
      metadata: record.metadata as Record<string, unknown> | null,
      createdAt: record.createdAt instanceof Date ? record.createdAt.toISOString() : record.createdAt,
      updatedAt: record.updatedAt instanceof Date ? record.updatedAt.toISOString() : record.updatedAt,
      milestones: record.milestones || [],
      actions: (record.actions || []).map((a: any) => ({
        ...a,
        date: a.date instanceof Date ? a.date.toISOString() : a.date,
        createdAt: a.createdAt instanceof Date ? a.createdAt.toISOString() : a.createdAt,
        updatedAt: a.updatedAt instanceof Date ? a.updatedAt.toISOString() : a.updatedAt,
      })),
    };
  }

  async findAll(): Promise<Work[]> {
    const records = await this.prisma.client.work.findMany({
      include: {
        milestones: { orderBy: { order: 'asc' } },
        actions: { orderBy: { time: 'asc' } },
      },
      orderBy: { updatedAt: 'desc' },
    });

    return records.map((r) => this.mapWork(r));
  }

  async findBySlug(slug: string): Promise<Work> {
    const record = await this.prisma.client.work.findUnique({
      where: { slug },
      include: {
        milestones: { orderBy: { order: 'asc' } },
        actions: { orderBy: { time: 'asc' } },
      },
    });

    if (!record) {
      throw new NotFoundException(`Work record '${slug}' not found`);
    }

    return this.mapWork(record);
  }

  async create(dto: CreateWorkDto): Promise<Work> {
    const record = await this.prisma.client.work.create({
      data: {
        recordId: dto.recordId,
        slug: dto.slug,
        title: dto.title,
        subtitle: dto.subtitle,
        description: dto.description,
        type: dto.type,
        status: dto.status,
        area: dto.area,
        owner: dto.owner,
        progress: dto.progress,
        thumbnailUrl: dto.thumbnailUrl,
        model3dUrl: dto.model3dUrl,
        tags: dto.tags || [],
        metadata: dto.metadata as any,
      },
      include: {
        milestones: true,
        actions: true,
      },
    });

    return this.mapWork(record);
  }

  async update(id: string, dto: UpdateWorkDto): Promise<Work> {
    const record = await this.prisma.client.work.update({
      where: { id },
      data: {
        ...dto,
        metadata: dto.metadata as any,
      },
      include: {
        milestones: true,
        actions: true,
      },
    });

    return this.mapWork(record);
  }

  async delete(id: string): Promise<boolean> {
    await this.prisma.client.work.delete({ where: { id } });
    return true;
  }
}
