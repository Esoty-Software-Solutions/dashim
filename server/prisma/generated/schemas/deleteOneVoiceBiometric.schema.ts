import { z } from 'zod';
import { VoiceBiometricWhereUniqueInputObjectSchema } from './objects/VoiceBiometricWhereUniqueInput.schema';

export const VoiceBiometricDeleteOneSchema = z.object({
  where: VoiceBiometricWhereUniqueInputObjectSchema,
});
