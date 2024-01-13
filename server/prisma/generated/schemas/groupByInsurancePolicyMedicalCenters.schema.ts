import { z } from 'zod';
import { InsurancePolicyMedicalCentersWhereInputObjectSchema } from './objects/InsurancePolicyMedicalCentersWhereInput.schema';
import { InsurancePolicyMedicalCentersOrderByWithAggregationInputObjectSchema } from './objects/InsurancePolicyMedicalCentersOrderByWithAggregationInput.schema';
import { InsurancePolicyMedicalCentersScalarWhereWithAggregatesInputObjectSchema } from './objects/InsurancePolicyMedicalCentersScalarWhereWithAggregatesInput.schema';
import { InsurancePolicyMedicalCentersScalarFieldEnumSchema } from './enums/InsurancePolicyMedicalCentersScalarFieldEnum.schema';

export const InsurancePolicyMedicalCentersGroupBySchema = z.object({
  where: InsurancePolicyMedicalCentersWhereInputObjectSchema.optional(),
  orderBy: z
    .union([
      InsurancePolicyMedicalCentersOrderByWithAggregationInputObjectSchema,
      InsurancePolicyMedicalCentersOrderByWithAggregationInputObjectSchema.array(),
    ])
    .optional(),
  having:
    InsurancePolicyMedicalCentersScalarWhereWithAggregatesInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  by: z.array(InsurancePolicyMedicalCentersScalarFieldEnumSchema),
});
