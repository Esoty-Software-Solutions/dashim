import { z } from 'zod';
import { FingerprintBiometricWhereUniqueInputObjectSchema } from './objects/FingerprintBiometricWhereUniqueInput.schema';

export const FingerprintBiometricFindUniqueSchema = z.object({
  where: FingerprintBiometricWhereUniqueInputObjectSchema,
});
