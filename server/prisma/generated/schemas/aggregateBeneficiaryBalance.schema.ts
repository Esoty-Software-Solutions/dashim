import { z } from 'zod';
import { BeneficiaryBalanceOrderByWithRelationInputObjectSchema } from './objects/BeneficiaryBalanceOrderByWithRelationInput.schema';
import { BeneficiaryBalanceWhereInputObjectSchema } from './objects/BeneficiaryBalanceWhereInput.schema';
import { BeneficiaryBalanceWhereUniqueInputObjectSchema } from './objects/BeneficiaryBalanceWhereUniqueInput.schema';
import { BeneficiaryBalanceCountAggregateInputObjectSchema } from './objects/BeneficiaryBalanceCountAggregateInput.schema';
import { BeneficiaryBalanceMinAggregateInputObjectSchema } from './objects/BeneficiaryBalanceMinAggregateInput.schema';
import { BeneficiaryBalanceMaxAggregateInputObjectSchema } from './objects/BeneficiaryBalanceMaxAggregateInput.schema';
import { BeneficiaryBalanceAvgAggregateInputObjectSchema } from './objects/BeneficiaryBalanceAvgAggregateInput.schema';
import { BeneficiaryBalanceSumAggregateInputObjectSchema } from './objects/BeneficiaryBalanceSumAggregateInput.schema';

export const BeneficiaryBalanceAggregateSchema = z.object({
  orderBy: z
    .union([
      BeneficiaryBalanceOrderByWithRelationInputObjectSchema,
      BeneficiaryBalanceOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: BeneficiaryBalanceWhereInputObjectSchema.optional(),
  cursor: BeneficiaryBalanceWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  _count: z
    .union([z.literal(true), BeneficiaryBalanceCountAggregateInputObjectSchema])
    .optional(),
  _min: BeneficiaryBalanceMinAggregateInputObjectSchema.optional(),
  _max: BeneficiaryBalanceMaxAggregateInputObjectSchema.optional(),
  _avg: BeneficiaryBalanceAvgAggregateInputObjectSchema.optional(),
  _sum: BeneficiaryBalanceSumAggregateInputObjectSchema.optional(),
});
