import { z } from 'zod';
import { FingerprintBiometricUpdateManyMutationInputObjectSchema } from './objects/FingerprintBiometricUpdateManyMutationInput.schema';
import { FingerprintBiometricWhereInputObjectSchema } from './objects/FingerprintBiometricWhereInput.schema';

export const FingerprintBiometricUpdateManySchema = z.object({
  data: FingerprintBiometricUpdateManyMutationInputObjectSchema,
  where: FingerprintBiometricWhereInputObjectSchema.optional(),
});
