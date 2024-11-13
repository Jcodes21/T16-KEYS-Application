// src/booking/booking.entity.ts
import { Entity, Column, ManyToOne } from 'typeorm';
import { User } from '../user/user.entity';  // Import the User entity (Resident/Tradesperson/Engineer)
import { BaseEntity } from '../shared/base.entity';  // Import BaseEntity for id field
import { BookingStatus } from './booking.enum';  // Import the BookingStatus enum

@Entity('bookings')
export class Booking extends BaseEntity {
  @Column({ type: 'timestamp' })
  date!: Date;  // Booking date

  @Column({
    type: 'enum',
    enum: BookingStatus,
    default: BookingStatus.SCHEDULED,
  })
  status!: BookingStatus;  // Status of the booking

  @ManyToOne(() => User, { nullable: true })
  resident!: User;  // The resident who made the booking

  @ManyToOne(() => User, { nullable: true })
  tradesperson!: User;  // The tradesperson assigned to the booking

  @ManyToOne(() => User, { nullable: true })
  engineer!: User;  // The engineer assigned to the booking (if applicable)
}
