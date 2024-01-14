import { z } from 'zod';
import { FaceBiometricOrderByWithRelationInputObjectSchema } from './objects/FaceBiometricOrderByWithRelationInput.schema';
import { FaceBiometricWhereInputObjectSchema } from './objects/FaceBiometricWhereInput.schema';
import { FaceBiometricWhereUniqueInputObjectSchema } from './objects/FaceBiometricWhereUniqueInput.schema';
import { FaceBiometricScalarFieldEnumSchema } from './enums/FaceBiometricScalarFieldEnum.schema';

export const FaceBiometricFindManySchema = z.object({
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
  distinct: z.array(FaceBiometricScalarFieldEnumSchema).optional(),
});
