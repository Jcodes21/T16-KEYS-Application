import { BookingStatus } from '../booking.enum';
import { IsEnum, IsOptional, IsString, IsDate, IsUUID } from 'class-validator';

export class CreateBookingDto {
  @IsDate()
  date: Date;

  @IsEnum(BookingStatus)
  status: BookingStatus;

  @IsUUID()
  residentId: string;

  @IsUUID()
  @IsOptional()
  tradespersonId: string | null;

  @IsUUID()
  @IsOptional()
  engineerId: string | null;
}
