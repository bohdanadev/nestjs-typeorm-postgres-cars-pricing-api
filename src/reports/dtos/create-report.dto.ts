import { ApiProperty } from '@nestjs/swagger';
import {
    IsString,
    IsNumber,
    Min,
    Max,
    IsLongitude,
    IsLatitude,
  } from 'class-validator';
  
  export class CreateReportDto {

    @ApiProperty({ required: true })
    @IsString()
    make: string;
  
    @ApiProperty({ required: true })
    @IsString()
    model: string;
  
    @ApiProperty({ required: true })
    @IsNumber()
    @Min(1930)
    @Max(new Date().getFullYear() + 1)
    year: number;
  
    @ApiProperty({ required: true })
    @IsNumber()
    @Min(0)
    mileage: number;
  
    @ApiProperty({ required: true })
    @IsLongitude()
    lng: number;
  
    @ApiProperty({ required: true })
    @IsLatitude()
    lat: number;
  
    @ApiProperty({ required: true })
    @IsNumber()
    @Min(0)
    price: number;
  }
  