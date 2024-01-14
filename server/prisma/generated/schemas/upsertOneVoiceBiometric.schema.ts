import { z } from 'zod';
import { VoiceBiometricWhereUniqueInputObjectSchema } from './objects/VoiceBiometricWhereUniqueInput.schema';
import { VoiceBiometricCreateInputObjectSchema } from './objects/VoiceBiometricCreateInput.schema';
import { VoiceBiometricUncheckedCreateInputObjectSchema } from './objects/VoiceBiometricUncheckedCreateInput.schema';
import { VoiceBiometricUpdateInputObjectSchema } from './objects/VoiceBiometricUpdateInput.schema';
import { VoiceBiometricUncheckedUpdateInputObjectSchema } from './objects/VoiceBiometricUncheckedUpdateInput.schema';

export const VoiceBiometricUpsertSchema = z.object({
  where: VoiceBiometricWhereUniqueInputObjectSchema,
  create: z.union([
    VoiceBiometricCreateInputObjectSchema,
    VoiceBiometricUncheckedCreateInputObjectSchema,
  ]),
  update: z.union([
    VoiceBiometricUpdateInputObjectSchema,
    VoiceBiometricUncheckedUpdateInputObjectSchema,
  ]),
});
