import { z } from 'zod';
import { FaceBiometricOrderByWithRelationInputObjectSchema } from './objects/FaceBiometricOrderByWithRelationInput.schema';
import { FaceBiometricWhereInputObjectSchema } from './objects/FaceBiometricWhereInput.schema';
import { FaceBiometricWhereUniqueInputObjectSchema } from './objects/FaceBiometricWhereUniqueInput.schema';
import { FaceBiometricCountAggregateInputObjectSchema } from './objects/FaceBiometricCountAggregateInput.schema';
import { FaceBiometricMinAggregateInputObjectSchema } from './objects/FaceBiometricMinAggregateInput.schema';
import { FaceBiometricMaxAggregateInputObjectSchema } from './objects/FaceBiometricMaxAggregateInput.schema';

export const FaceBiometricAggregateSchema = z.object({
  orderBy: z
    .union([
      FaceBiometricOrderByWithRelationInputObjectSchema,
      FaceBiometricOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: FaceBiometricWhereInputObjectSchema.optional(),
  cursor: FaceBiometricWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  _count: z
    .union([z.literal(true), FaceBiometricCountAggregateInputObjectSchema])
    .optional(),
  _min: FaceBiometricMinAggregateInputObjectSchema.optional(),
  _max: FaceBiometricMaxAggregateInputObjectSchema.optional(),
});
