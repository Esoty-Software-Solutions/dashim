import { z } from 'zod';
import { VoiceBiometricWhereInputObjectSchema } from './objects/VoiceBiometricWhereInput.schema';

export const VoiceBiometricDeleteManySchema = z.object({
  where: VoiceBiometricWhereInputObjectSchema.optional(),
});
