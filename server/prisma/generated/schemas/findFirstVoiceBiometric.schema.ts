import { z } from 'zod';
import { VoiceBiometricOrderByWithRelationInputObjectSchema } from './objects/VoiceBiometricOrderByWithRelationInput.schema';
import { VoiceBiometricWhereInputObjectSchema } from './objects/VoiceBiometricWhereInput.schema';
import { VoiceBiometricWhereUniqueInputObjectSchema } from './objects/VoiceBiometricWhereUniqueInput.schema';
import { VoiceBiometricScalarFieldEnumSchema } from './enums/VoiceBiometricScalarFieldEnum.schema';

export const VoiceBiometricFindFirstSchema = z.object({
  orderBy: z
    .union([
      VoiceBiometricOrderByWithRelationInputObjectSchema,
      VoiceBiometricOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: VoiceBiometricWhereInputObjectSchema.optional(),
  cursor: VoiceBiometricWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.array(VoiceBiometricScalarFieldEnumSchema).optional(),
});
