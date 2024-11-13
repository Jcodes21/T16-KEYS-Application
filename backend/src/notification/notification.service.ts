// src/notification/notification.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Notification } from './notification.entity';
import { User } from '../user/user.entity';
import { NotificationType } from './notification.enum';  // Import enum

@Injectable()
export class NotificationService {
  constructor(
    @InjectRepository(Notification)
    private readonly notificationRepository: Repository<Notification>,
  ) {}

  // Create a new notification
  async create(
    type: NotificationType,
    message: string,
    userId: string
  ): Promise<Notification> {
    const notification = this.notificationRepository.create({
      type,
      message,
      user: { id: userId } as User,
    });

    return this.notificationRepository.save(notification);
  }

  // Get all notifications
  async findAll(): Promise<Notification[]> {
    return this.notificationRepository.find();
  }

  // Get a single notification by ID
  async findOne(id: string): Promise<Notification | null> {
    return this.notificationRepository.findOne(id);
  }

  // Mark a notification as read
  async markAsRead(id: string): Promise<Notification | null> {
    await this.notificationRepository.update(id, { is_read: true });
    return this.findOne(id);
  }

  // Get unread notifications for a user
  async findUnreadNotifications(userId: string): Promise<Notification[]> {
    return this.notificationRepository.find({ where: { user: { id: userId }, is_read: false } });
  }
}
