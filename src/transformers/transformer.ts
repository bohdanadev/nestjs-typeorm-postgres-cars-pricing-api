import { Transform, TransformFnParams } from 'class-transformer';


export function toNumber({ value }: TransformFnParams): number {
    return parseInt(value, 10);
  }
  
  export function toFloat({ value }: TransformFnParams): number {
    return parseFloat(value);
  }

 export function TransformWith(transformFn: (params: TransformFnParams) => any) {
   return Transform(transformFn);
 }
