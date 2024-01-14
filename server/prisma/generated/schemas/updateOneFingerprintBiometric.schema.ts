import { z } from 'zod';
import { FingerprintBiometricUpdateInputObjectSchema } from './objects/FingerprintBiometricUpdateInput.schema';
import { FingerprintBiometricUncheckedUpdateInputObjectSchema } from './objects/FingerprintBiometricUncheckedUpdateInput.schema';
import { FingerprintBiometricWhereUniqueInputObjectSchema } from './objects/FingerprintBiometricWhereUniqueInput.schema';

export const FingerprintBiometricUpdateOneSchema = z.object({
  data: z.union([
    FingerprintBiometricUpdateInputObjectSchema,
    FingerprintBiometricUncheckedUpdateInputObjectSchema,
  ]),
  where: FingerprintBiometricWhereUniqueInputObjectSchema,
});
