import { Module } from '@nestjs/common';
import { SurgicalRequesController } from './api/surgical-request.controller';
import { SurgicalRequestService } from './services/surgical-request.service';
import { PrismaModule } from './modules/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [SurgicalRequesController],
  providers: [SurgicalRequestService],
})
export class AppModule {}
