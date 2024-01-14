import { z } from 'zod';
import { FingerprintBiometricCreateManyInputObjectSchema } from './objects/FingerprintBiometricCreateManyInput.schema';

export const FingerprintBiometricCreateManySchema = z.object({
  data: z.union([
    FingerprintBiometricCreateManyInputObjectSchema,
    z.array(FingerprintBiometricCreateManyInputObjectSchema),
  ]),
  skipDuplicates: z.boolean().optional(),
});
