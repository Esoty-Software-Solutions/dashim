import { z } from 'zod';
import { FingerprintBiometricWhereInputObjectSchema } from './objects/FingerprintBiometricWhereInput.schema';

export const FingerprintBiometricDeleteManySchema = z.object({
  where: FingerprintBiometricWhereInputObjectSchema.optional(),
});
