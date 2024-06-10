import {
    IsString,
    IsNumber,
    Min,
    Max,
    IsLongitude,
    IsLatitude,
  } from 'class-validator';
  import { Transform } from 'class-transformer';
import { toFloat, toNumber, TransformWith } from '../../transformers/transformer';
  
  export class GetEstimateDto {
    @IsString()
    make: string;
  
    @IsString()
    model: string;
  
    @TransformWith(toNumber)    @IsNumber()
    @Min(1930)
    @Max(2050)
    year: number;
  
    @TransformWith(toNumber)    @IsNumber()
    @Min(0)
    @Max(1000000)
    mileage: number;
  
    @TransformWith(toFloat)
    @IsLongitude()
    lng: number;
  
    @TransformWith(toFloat)
    @IsLatitude()
    lat: number;
  }
  