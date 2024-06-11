import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean } from 'class-validator';

export class ApproveReportDto {
  @ApiProperty({ required: true })
  @IsBoolean()
  approved: boolean;
}