import {
  Controller,
  Get,
  Post,
  Patch,
  Delete,
  Param,
  Body,
} from '@nestjs/common';
import { ActionsService } from './actions.service';
import { ActionItem, CreateActionDto, UpdateActionDto } from '@portfolio/types';

@Controller('actions')
export class ActionsController {
  constructor(private readonly actionsService: ActionsService) {}

  @Get()
  async findAll(): Promise<ActionItem[]> {
    return this.actionsService.findAll();
  }

  @Post()
  async create(@Body() dto: CreateActionDto): Promise<ActionItem> {
    return this.actionsService.create(dto);
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() dto: UpdateActionDto,
  ): Promise<ActionItem> {
    return this.actionsService.update(id, dto);
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<{ success: boolean }> {
    const success = await this.actionsService.delete(id);
    return { success };
  }
}
