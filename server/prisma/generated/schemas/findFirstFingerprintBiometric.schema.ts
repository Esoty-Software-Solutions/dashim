import { z } from 'zod';
import { FingerprintBiometricOrderByWithRelationInputObjectSchema } from './objects/FingerprintBiometricOrderByWithRelationInput.schema';
import { FingerprintBiometricWhereInputObjectSchema } from './objects/FingerprintBiometricWhereInput.schema';
import { FingerprintBiometricWhereUniqueInputObjectSchema } from './objects/FingerprintBiometricWhereUniqueInput.schema';
import { FingerprintBiometricScalarFieldEnumSchema } from './enums/FingerprintBiometricScalarFieldEnum.schema';

export const FingerprintBiometricFindFirstSchema = z.object({
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
  distinct: z.array(FingerprintBiometricScalarFieldEnumSchema).optional(),
});
