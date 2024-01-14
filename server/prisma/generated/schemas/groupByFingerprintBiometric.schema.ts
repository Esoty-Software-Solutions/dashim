import { z } from 'zod';
import { FingerprintBiometricWhereInputObjectSchema } from './objects/FingerprintBiometricWhereInput.schema';
import { FingerprintBiometricOrderByWithAggregationInputObjectSchema } from './objects/FingerprintBiometricOrderByWithAggregationInput.schema';
import { FingerprintBiometricScalarWhereWithAggregatesInputObjectSchema } from './objects/FingerprintBiometricScalarWhereWithAggregatesInput.schema';
import { FingerprintBiometricScalarFieldEnumSchema } from './enums/FingerprintBiometricScalarFieldEnum.schema';

export const FingerprintBiometricGroupBySchema = z.object({
  where: FingerprintBiometricWhereInputObjectSchema.optional(),
  orderBy: z
    .union([
      FingerprintBiometricOrderByWithAggregationInputObjectSchema,
      FingerprintBiometricOrderByWithAggregationInputObjectSchema.array(),
    ])
    .optional(),
  having:
    FingerprintBiometricScalarWhereWithAggregatesInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  by: z.array(FingerprintBiometricScalarFieldEnumSchema),
});
