import { z } from 'zod';
import { VoiceBiometricUpdateInputObjectSchema } from './objects/VoiceBiometricUpdateInput.schema';
import { VoiceBiometricUncheckedUpdateInputObjectSchema } from './objects/VoiceBiometricUncheckedUpdateInput.schema';
import { VoiceBiometricWhereUniqueInputObjectSchema } from './objects/VoiceBiometricWhereUniqueInput.schema';

export const VoiceBiometricUpdateOneSchema = z.object({
  data: z.union([
    VoiceBiometricUpdateInputObjectSchema,
    VoiceBiometricUncheckedUpdateInputObjectSchema,
  ]),
  where: VoiceBiometricWhereUniqueInputObjectSchema,
});
