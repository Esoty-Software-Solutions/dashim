import { z } from 'zod';
import { VoiceBiometricWhereInputObjectSchema } from './objects/VoiceBiometricWhereInput.schema';
import { VoiceBiometricOrderByWithAggregationInputObjectSchema } from './objects/VoiceBiometricOrderByWithAggregationInput.schema';
import { VoiceBiometricScalarWhereWithAggregatesInputObjectSchema } from './objects/VoiceBiometricScalarWhereWithAggregatesInput.schema';
import { VoiceBiometricScalarFieldEnumSchema } from './enums/VoiceBiometricScalarFieldEnum.schema';

export const VoiceBiometricGroupBySchema = z.object({
  where: VoiceBiometricWhereInputObjectSchema.optional(),
  orderBy: z
    .union([
      VoiceBiometricOrderByWithAggregationInputObjectSchema,
      VoiceBiometricOrderByWithAggregationInputObjectSchema.array(),
    ])
    .optional(),
  having: VoiceBiometricScalarWhereWithAggregatesInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  by: z.array(VoiceBiometricScalarFieldEnumSchema),
});
