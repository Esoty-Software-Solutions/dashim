import { z } from 'zod';
import { FingerprintBiometricWhereUniqueInputObjectSchema } from './objects/FingerprintBiometricWhereUniqueInput.schema';
import { FingerprintBiometricCreateInputObjectSchema } from './objects/FingerprintBiometricCreateInput.schema';
import { FingerprintBiometricUncheckedCreateInputObjectSchema } from './objects/FingerprintBiometricUncheckedCreateInput.schema';
import { FingerprintBiometricUpdateInputObjectSchema } from './objects/FingerprintBiometricUpdateInput.schema';
import { FingerprintBiometricUncheckedUpdateInputObjectSchema } from './objects/FingerprintBiometricUncheckedUpdateInput.schema';

export const FingerprintBiometricUpsertSchema = z.object({
  where: FingerprintBiometricWhereUniqueInputObjectSchema,
  create: z.union([
    FingerprintBiometricCreateInputObjectSchema,
    FingerprintBiometricUncheckedCreateInputObjectSchema,
  ]),
  update: z.union([
    FingerprintBiometricUpdateInputObjectSchema,
    FingerprintBiometricUncheckedUpdateInputObjectSchema,
  ]),
});
