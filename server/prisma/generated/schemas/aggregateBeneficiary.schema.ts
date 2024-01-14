import { z } from 'zod';
import { BeneficiaryOrderByWithRelationInputObjectSchema } from './objects/BeneficiaryOrderByWithRelationInput.schema';
import { BeneficiaryWhereInputObjectSchema } from './objects/BeneficiaryWhereInput.schema';
import { BeneficiaryWhereUniqueInputObjectSchema } from './objects/BeneficiaryWhereUniqueInput.schema';
import { BeneficiaryCountAggregateInputObjectSchema } from './objects/BeneficiaryCountAggregateInput.schema';
import { BeneficiaryMinAggregateInputObjectSchema } from './objects/BeneficiaryMinAggregateInput.schema';
import { BeneficiaryMaxAggregateInputObjectSchema } from './objects/BeneficiaryMaxAggregateInput.schema';

export const BeneficiaryAggregateSchema = z.object({
  orderBy: z
    .union([
      BeneficiaryOrderByWithRelationInputObjectSchema,
      BeneficiaryOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: BeneficiaryWhereInputObjectSchema.optional(),
  cursor: BeneficiaryWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  _count: z
    .union([z.literal(true), BeneficiaryCountAggregateInputObjectSchema])
    .optional(),
  _min: BeneficiaryMinAggregateInputObjectSchema.optional(),
  _max: BeneficiaryMaxAggregateInputObjectSchema.optional(),
});
