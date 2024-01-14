import { z } from 'zod';
import { InsurancePolicyMedicalCenterOrderByWithRelationInputObjectSchema } from './objects/InsurancePolicyMedicalCenterOrderByWithRelationInput.schema';
import { InsurancePolicyMedicalCenterWhereInputObjectSchema } from './objects/InsurancePolicyMedicalCenterWhereInput.schema';
import { InsurancePolicyMedicalCenterWhereUniqueInputObjectSchema } from './objects/InsurancePolicyMedicalCenterWhereUniqueInput.schema';
import { InsurancePolicyMedicalCenterCountAggregateInputObjectSchema } from './objects/InsurancePolicyMedicalCenterCountAggregateInput.schema';
import { InsurancePolicyMedicalCenterMinAggregateInputObjectSchema } from './objects/InsurancePolicyMedicalCenterMinAggregateInput.schema';
import { InsurancePolicyMedicalCenterMaxAggregateInputObjectSchema } from './objects/InsurancePolicyMedicalCenterMaxAggregateInput.schema';

export const InsurancePolicyMedicalCenterAggregateSchema = z.object({
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
  _count: z
    .union([
      z.literal(true),
      InsurancePolicyMedicalCenterCountAggregateInputObjectSchema,
    ])
    .optional(),
  _min: InsurancePolicyMedicalCenterMinAggregateInputObjectSchema.optional(),
  _max: InsurancePolicyMedicalCenterMaxAggregateInputObjectSchema.optional(),
});
