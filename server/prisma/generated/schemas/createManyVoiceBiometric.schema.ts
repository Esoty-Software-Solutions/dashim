import { z } from 'zod';
import { VoiceBiometricCreateManyInputObjectSchema } from './objects/VoiceBiometricCreateManyInput.schema';

export const VoiceBiometricCreateManySchema = z.object({
  data: z.union([
    VoiceBiometricCreateManyInputObjectSchema,
    z.array(VoiceBiometricCreateManyInputObjectSchema),
  ]),
  skipDuplicates: z.boolean().optional(),
});
