// src/notification/notification.controller.ts
import { Controller, Get, Post, Body, Param, Put } from '@nestjs/common';
import { NotificationService } from './notification.service';
import { Notification } from './notification.entity';
import { NotificationType } from './notification.enum';  // Import enum

@Controller('notifications')
export class NotificationController {
  constructor(private readonly notificationService: NotificationService) {}

  // Create a new notification
  @Post()
  create(@Body() createNotificationDto: { type: NotificationType; message: string; userId: string }) {
    return this.notificationService.create(
      createNotificationDto.type,
      createNotificationDto.message,
      createNotificationDto.userId
    );
  }

  // Get all notifications
  @Get()
  findAll(): Promise<Notification[]> {
    return this.notificationService.findAll();
  }

  // Get a single notification by ID
  @Get(':id')
  findOne(@Param('id') id: string): Promise<Notification | null> {
    return this.notificationService.findOne(id);
  }

  // Mark a notification as read
  @Put(':id/read')
  markAsRead(@Param('id') id: string): Promise<Notification | null> {
    return this.notificationService.markAsRead(id);
  }

  // Get unread notifications for a user
  @Get('unread/:userId')
  findUnread(@Param('userId') userId: string): Promise<Notification[]> {
    return this.notificationService.findUnreadNotifications(userId);
  }
}
 