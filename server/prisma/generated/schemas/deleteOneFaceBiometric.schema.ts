import { z } from 'zod';
import { FaceBiometricWhereUniqueInputObjectSchema } from './objects/FaceBiometricWhereUniqueInput.schema';

export const FaceBiometricDeleteOneSchema = z.object({
  where: FaceBiometricWhereUniqueInputObjectSchema,
});
