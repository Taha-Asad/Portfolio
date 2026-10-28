import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { WorksModule } from './works/works.module';
import { ActionsModule } from './actions/actions.module';
import { LogsModule } from './logs/logs.module';
import { MetricsModule } from './metrics/metrics.module';
import { PrismaModule } from './prisma/prisma.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    PrismaModule,
    WorksModule,
    ActionsModule,
    LogsModule,
    MetricsModule,
    AuthModule,
  ],
})
export class AppModule {}
