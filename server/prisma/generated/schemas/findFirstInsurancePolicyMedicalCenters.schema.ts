import { z } from 'zod';
import { InsurancePolicyMedicalCentersOrderByWithRelationInputObjectSchema } from './objects/InsurancePolicyMedicalCentersOrderByWithRelationInput.schema';
import { InsurancePolicyMedicalCentersWhereInputObjectSchema } from './objects/InsurancePolicyMedicalCentersWhereInput.schema';
import { InsurancePolicyMedicalCentersWhereUniqueInputObjectSchema } from './objects/InsurancePolicyMedicalCentersWhereUniqueInput.schema';
import { InsurancePolicyMedicalCentersScalarFieldEnumSchema } from './enums/InsurancePolicyMedicalCentersScalarFieldEnum.schema';

export const InsurancePolicyMedicalCentersFindFirstSchema = z.object({
  orderBy: z
    .union([
      InsurancePolicyMedicalCentersOrderByWithRelationInputObjectSchema,
      InsurancePolicyMedicalCentersOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: InsurancePolicyMedicalCentersWhereInputObjectSchema.optional(),
  cursor: InsurancePolicyMedicalCentersWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z
    .array(InsurancePolicyMedicalCentersScalarFieldEnumSchema)
    .optional(),
});
