import { z } from 'zod';
import { InsurancePolicyMedicalCenterWhereInputObjectSchema } from './objects/InsurancePolicyMedicalCenterWhereInput.schema';
import { InsurancePolicyMedicalCenterOrderByWithAggregationInputObjectSchema } from './objects/InsurancePolicyMedicalCenterOrderByWithAggregationInput.schema';
import { InsurancePolicyMedicalCenterScalarWhereWithAggregatesInputObjectSchema } from './objects/InsurancePolicyMedicalCenterScalarWhereWithAggregatesInput.schema';
import { InsurancePolicyMedicalCenterScalarFieldEnumSchema } from './enums/InsurancePolicyMedicalCenterScalarFieldEnum.schema';

export const InsurancePolicyMedicalCenterGroupBySchema = z.object({
  where: InsurancePolicyMedicalCenterWhereInputObjectSchema.optional(),
  orderBy: z
    .union([
      InsurancePolicyMedicalCenterOrderByWithAggregationInputObjectSchema,
      InsurancePolicyMedicalCenterOrderByWithAggregationInputObjectSchema.array(),
    ])
    .optional(),
  having:
    InsurancePolicyMedicalCenterScalarWhereWithAggregatesInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  by: z.array(InsurancePolicyMedicalCenterScalarFieldEnumSchema),
});
