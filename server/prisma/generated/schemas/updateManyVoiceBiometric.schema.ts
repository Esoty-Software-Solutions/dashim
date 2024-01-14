import { z } from 'zod';
import { VoiceBiometricUpdateManyMutationInputObjectSchema } from './objects/VoiceBiometricUpdateManyMutationInput.schema';
import { VoiceBiometricWhereInputObjectSchema } from './objects/VoiceBiometricWhereInput.schema';

export const VoiceBiometricUpdateManySchema = z.object({
  data: VoiceBiometricUpdateManyMutationInputObjectSchema,
  where: VoiceBiometricWhereInputObjectSchema.optional(),
});
