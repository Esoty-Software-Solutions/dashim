import { z } from 'zod';
import { VoiceBiometricOrderByWithRelationInputObjectSchema } from './objects/VoiceBiometricOrderByWithRelationInput.schema';
import { VoiceBiometricWhereInputObjectSchema } from './objects/VoiceBiometricWhereInput.schema';
import { VoiceBiometricWhereUniqueInputObjectSchema } from './objects/VoiceBiometricWhereUniqueInput.schema';
import { VoiceBiometricCountAggregateInputObjectSchema } from './objects/VoiceBiometricCountAggregateInput.schema';
import { VoiceBiometricMinAggregateInputObjectSchema } from './objects/VoiceBiometricMinAggregateInput.schema';
import { VoiceBiometricMaxAggregateInputObjectSchema } from './objects/VoiceBiometricMaxAggregateInput.schema';

export const VoiceBiometricAggregateSchema = z.object({
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
  _count: z
    .union([z.literal(true), VoiceBiometricCountAggregateInputObjectSchema])
    .optional(),
  _min: VoiceBiometricMinAggregateInputObjectSchema.optional(),
  _max: VoiceBiometricMaxAggregateInputObjectSchema.optional(),
});
