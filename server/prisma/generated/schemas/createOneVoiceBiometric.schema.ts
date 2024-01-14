import { z } from 'zod';
import { VoiceBiometricCreateInputObjectSchema } from './objects/VoiceBiometricCreateInput.schema';
import { VoiceBiometricUncheckedCreateInputObjectSchema } from './objects/VoiceBiometricUncheckedCreateInput.schema';

export const VoiceBiometricCreateOneSchema = z.object({
  data: z.union([
    VoiceBiometricCreateInputObjectSchema,
    VoiceBiometricUncheckedCreateInputObjectSchema,
  ]),
});
