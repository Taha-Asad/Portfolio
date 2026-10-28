import { Module } from '@nestjs/common';
import { MetricsService } from './metrics.service';
import { MetricsController } from './metrics.controller';
import { WorksModule } from '../works/works.module';
import { ActionsModule } from '../actions/actions.module';
import { LogsModule } from '../logs/logs.module';

@Module({
  imports: [WorksModule, ActionsModule, LogsModule],
  controllers: [MetricsController],
  providers: [MetricsService],
  exports: [MetricsService],
})
export class MetricsModule {}
