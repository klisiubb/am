import { Module } from '@nestjs/common';
import { RoutesController } from './routes/routes.controller';
import { RoutesService } from './routes/routes.service';
import { PrismaService } from './prisma.service';

@Module({
  imports: [],
  controllers: [RoutesController],
  providers: [RoutesService, PrismaService],
})
export class AppModule {}
