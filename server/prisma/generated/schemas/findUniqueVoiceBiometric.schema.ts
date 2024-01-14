import { z } from 'zod';
import { VoiceBiometricWhereUniqueInputObjectSchema } from './objects/VoiceBiometricWhereUniqueInput.schema';

export const VoiceBiometricFindUniqueSchema = z.object({
  where: VoiceBiometricWhereUniqueInputObjectSchema,
});
