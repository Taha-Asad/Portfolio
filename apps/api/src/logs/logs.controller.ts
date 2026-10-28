import { Controller, Get, Post, Body } from '@nestjs/common';
import { LogsService } from './logs.service';
import { CreateDailyLogDto, DailyLog } from '@portfolio/types';

@Controller('logs')
export class LogsController {
  constructor(private readonly logsService: LogsService) {}

  @Get()
  async findAll(): Promise<DailyLog[]> {
    return this.logsService.findAll();
  }

  @Get('latest')
  async findLatest(): Promise<DailyLog | null> {
    return this.logsService.findLatest();
  }

  @Post()
  async create(@Body() dto: CreateDailyLogDto): Promise<DailyLog> {
    return this.logsService.create(dto);
  }
}
