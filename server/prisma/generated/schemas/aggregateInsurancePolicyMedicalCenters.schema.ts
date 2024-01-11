import { z } from 'zod';
import { InsurancePolicyMedicalCentersOrderByWithRelationInputObjectSchema } from './objects/InsurancePolicyMedicalCentersOrderByWithRelationInput.schema';
import { InsurancePolicyMedicalCentersWhereInputObjectSchema } from './objects/InsurancePolicyMedicalCentersWhereInput.schema';
import { InsurancePolicyMedicalCentersWhereUniqueInputObjectSchema } from './objects/InsurancePolicyMedicalCentersWhereUniqueInput.schema';
import { InsurancePolicyMedicalCentersCountAggregateInputObjectSchema } from './objects/InsurancePolicyMedicalCentersCountAggregateInput.schema';
import { InsurancePolicyMedicalCentersMinAggregateInputObjectSchema } from './objects/InsurancePolicyMedicalCentersMinAggregateInput.schema';
import { InsurancePolicyMedicalCentersMaxAggregateInputObjectSchema } from './objects/InsurancePolicyMedicalCentersMaxAggregateInput.schema';

export const InsurancePolicyMedicalCentersAggregateSchema = z.object({
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
  _count: z
    .union([
      z.literal(true),
      InsurancePolicyMedicalCentersCountAggregateInputObjectSchema,
    ])
    .optional(),
  _min: InsurancePolicyMedicalCentersMinAggregateInputObjectSchema.optional(),
  _max: InsurancePolicyMedicalCentersMaxAggregateInputObjectSchema.optional(),
});
