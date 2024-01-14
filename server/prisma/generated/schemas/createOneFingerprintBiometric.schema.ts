import { z } from 'zod';
import { FingerprintBiometricCreateInputObjectSchema } from './objects/FingerprintBiometricCreateInput.schema';
import { FingerprintBiometricUncheckedCreateInputObjectSchema } from './objects/FingerprintBiometricUncheckedCreateInput.schema';

export const FingerprintBiometricCreateOneSchema = z.object({
  data: z.union([
    FingerprintBiometricCreateInputObjectSchema,
    FingerprintBiometricUncheckedCreateInputObjectSchema,
  ]),
});
