import { Module } from '@nestjs/common';

import { PrismaService } from '../services/prisma.service';
import { AuthModule } from 'src/api/auth/auth.module';


@Module({

  imports: [AuthModule],

  providers: [PrismaService],

  exports: [PrismaService],

})

export class PrismaModule {}