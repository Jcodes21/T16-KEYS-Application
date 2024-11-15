import { IsEnum } from 'class-validator';
import { BookingStatus } from '../booking.enum';

export class UpdateStatusDto {
  @IsEnum(BookingStatus)
  status: BookingStatus;
}
