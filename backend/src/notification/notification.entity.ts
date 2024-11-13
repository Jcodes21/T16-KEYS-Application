// src/notification/notification.entity.ts
import { Entity, Column, ManyToOne, JoinColumn } from 'typeorm';
import { User } from '../user/user.entity'; // Import User entity for the relation
import { BaseEntity } from '../shared/base.entity'; // Import BaseEntity for shared fields

export enum NotificationType {
  FAULT_UPDATE = 'FAULT_UPDATE',
  BOOKING_REMINDER = 'BOOKING_REMINDER',
  SURVEY_INVITE = 'SURVEY_INVITE',
}

@Entity('notifications')
export class Notification extends BaseEntity {  // Inherit from BaseEntity
  @Column({ type: 'enum', enum: NotificationType })
  type!: NotificationType;

  @Column('text')
  message!: string;

  @Column({ default: false })
  is_read!: boolean;

  @ManyToOne(() => User, user => user
