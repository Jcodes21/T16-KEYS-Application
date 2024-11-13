import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Notification } from './notification.entity';
import { NotificationService } from './notification.service';
import { NotificationController } from './notification.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Notification])],  // Import Notification Entity for TypeORM
  providers: [NotificationService],
  controllers: [NotificationController],
})
export class NotificationModule {}