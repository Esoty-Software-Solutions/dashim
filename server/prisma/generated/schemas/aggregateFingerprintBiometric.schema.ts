import { z } from 'zod';
import { FingerprintBiometricOrderByWithRelationInputObjectSchema } from './objects/FingerprintBiometricOrderByWithRelationInput.schema';
import { FingerprintBiometricWhereInputObjectSchema } from './objects/FingerprintBiometricWhereInput.schema';
import { FingerprintBiometricWhereUniqueInputObjectSchema } from './objects/FingerprintBiometricWhereUniqueInput.schema';
import { FingerprintBiometricCountAggregateInputObjectSchema } from './objects/FingerprintBiometricCountAggregateInput.schema';
import { FingerprintBiometricMinAggregateInputObjectSchema } from './objects/FingerprintBiometricMinAggregateInput.schema';
import { FingerprintBiometricMaxAggregateInputObjectSchema } from './objects/FingerprintBiometricMaxAggregateInput.schema';

export const FingerprintBiometricAggregateSchema = z.object({
  orderBy: z
    .union([
      FingerprintBiometricOrderByWithRelationInputObjectSchema,
      FingerprintBiometricOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: FingerprintBiometricWhereInputObjectSchema.optional(),
  cursor: FingerprintBiometricWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  _count: z
    .union([
      z.literal(true),
      FingerprintBiometricCountAggregateInputObjectSchema,
    ])
    .optional(),
  _min: FingerprintBiometricMinAggregateInputObjectSchema.optional(),
  _max: FingerprintBiometricMaxAggregateInputObjectSchema.optional(),
});
