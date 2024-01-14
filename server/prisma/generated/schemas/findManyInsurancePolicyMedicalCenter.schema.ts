import { z } from 'zod';
import { InsurancePolicyMedicalCenterOrderByWithRelationInputObjectSchema } from './objects/InsurancePolicyMedicalCenterOrderByWithRelationInput.schema';
import { InsurancePolicyMedicalCenterWhereInputObjectSchema } from './objects/InsurancePolicyMedicalCenterWhereInput.schema';
import { InsurancePolicyMedicalCenterWhereUniqueInputObjectSchema } from './objects/InsurancePolicyMedicalCenterWhereUniqueInput.schema';
import { InsurancePolicyMedicalCenterScalarFieldEnumSchema } from './enums/InsurancePolicyMedicalCenterScalarFieldEnum.schema';

export const InsurancePolicyMedicalCenterFindManySchema = z.object({
  orderBy: z
    .union([
      InsurancePolicyMedicalCenterOrderByWithRelationInputObjectSchema,
      InsurancePolicyMedicalCenterOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: InsurancePolicyMedicalCenterWhereInputObjectSchema.optional(),
  cursor: InsurancePolicyMedicalCenterWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z
    .array(InsurancePolicyMedicalCenterScalarFieldEnumSchema)
    .optional(),
});
