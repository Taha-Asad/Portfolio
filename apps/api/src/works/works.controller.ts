import {
  Controller,
  Get,
  Post,
  Patch,
  Delete,
  Param,
  Body,
} from '@nestjs/common';
import { WorksService } from './works.service';
import { CreateWorkDto, UpdateWorkDto, Work } from '@portfolio/types';

@Controller('works')
export class WorksController {
  constructor(private readonly worksService: WorksService) {}

  @Get()
  async findAll(): Promise<Work[]> {
    return this.worksService.findAll();
  }

  @Get(':slug')
  async findBySlug(@Param('slug') slug: string): Promise<Work> {
    return this.worksService.findBySlug(slug);
  }

  @Post()
  async create(@Body() dto: CreateWorkDto): Promise<Work> {
    return this.worksService.create(dto);
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() dto: UpdateWorkDto,
  ): Promise<Work> {
    return this.worksService.update(id, dto);
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<{ success: boolean }> {
    const success = await this.worksService.delete(id);
    return { success };
  }
}
