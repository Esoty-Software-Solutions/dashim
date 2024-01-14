import { z } from 'zod';
import { FaceBiometricWhereInputObjectSchema } from './objects/FaceBiometricWhereInput.schema';
import { FaceBiometricOrderByWithAggregationInputObjectSchema } from './objects/FaceBiometricOrderByWithAggregationInput.schema';
import { FaceBiometricScalarWhereWithAggregatesInputObjectSchema } from './objects/FaceBiometricScalarWhereWithAggregatesInput.schema';
import { FaceBiometricScalarFieldEnumSchema } from './enums/FaceBiometricScalarFieldEnum.schema';

export const FaceBiometricGroupBySchema = z.object({
  where: FaceBiometricWhereInputObjectSchema.optional(),
  orderBy: z
    .union([
      FaceBiometricOrderByWithAggregationInputObjectSchema,
      FaceBiometricOrderByWithAggregationInputObjectSchema.array(),
    ])
    .optional(),
  having: FaceBiometricScalarWhereWithAggregatesInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  by: z.array(FaceBiometricScalarFieldEnumSchema),
});
