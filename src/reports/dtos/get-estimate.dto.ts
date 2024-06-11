import {
    IsString,
    IsNumber,
    Min,
    Max,
    IsLongitude,
    IsLatitude,
  } from 'class-validator';
import { toFloat, toNumber, TransformWith } from '../../transformers/transformer';
import { ApiProperty } from '@nestjs/swagger';
  
  export class GetEstimateDto {
    @ApiProperty({ required: true })
    @IsString()
    make: string;
  
    @ApiProperty({ required: true })
    @IsString()
    model: string;
  
    @ApiProperty({ required: true })
    @TransformWith(toNumber)
    @IsNumber()
    @Min(1930)
    @Max(new Date().getFullYear() + 1)
    year: number;
  
    @ApiProperty({ required: true })
    @TransformWith(toNumber)
    @IsNumber()
    @Min(0)
    mileage: number;
  
    @ApiProperty({ required: true })
    @TransformWith(toFloat)
    @IsLongitude()
    lng: number;
  
    @ApiProperty({ required: true })
    @TransformWith(toFloat)
    @IsLatitude()
    lat: number;
  }
  