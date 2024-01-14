import { z } from 'zod';
import { FingerprintBiometricWhereUniqueInputObjectSchema } from './objects/FingerprintBiometricWhereUniqueInput.schema';

export const FingerprintBiometricDeleteOneSchema = z.object({
  where: FingerprintBiometricWhereUniqueInputObjectSchema,
});
