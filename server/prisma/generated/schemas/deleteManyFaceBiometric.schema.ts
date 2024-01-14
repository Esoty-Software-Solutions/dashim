import { z } from 'zod';
import { FaceBiometricWhereInputObjectSchema } from './objects/FaceBiometricWhereInput.schema';

export const FaceBiometricDeleteManySchema = z.object({
  where: FaceBiometricWhereInputObjectSchema.optional(),
});
