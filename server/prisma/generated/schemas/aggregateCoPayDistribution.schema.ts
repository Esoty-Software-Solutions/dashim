import { z } from 'zod';
import { CoPayDistributionOrderByWithRelationInputObjectSchema } from './objects/CoPayDistributionOrderByWithRelationInput.schema';
import { CoPayDistributionWhereInputObjectSchema } from './objects/CoPayDistributionWhereInput.schema';
import { CoPayDistributionWhereUniqueInputObjectSchema } from './objects/CoPayDistributionWhereUniqueInput.schema';
import { CoPayDistributionCountAggregateInputObjectSchema } from './objects/CoPayDistributionCountAggregateInput.schema';
import { CoPayDistributionMinAggregateInputObjectSchema } from './objects/CoPayDistributionMinAggregateInput.schema';
import { CoPayDistributionMaxAggregateInputObjectSchema } from './objects/CoPayDistributionMaxAggregateInput.schema';
import { CoPayDistributionAvgAggregateInputObjectSchema } from './objects/CoPayDistributionAvgAggregateInput.schema';
import { CoPayDistributionSumAggregateInputObjectSchema } from './objects/CoPayDistributionSumAggregateInput.schema';

export const CoPayDistributionAggregateSchema = z.object({
  orderBy: z
    .union([
      CoPayDistributionOrderByWithRelationInputObjectSchema,
      CoPayDistributionOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: CoPayDistributionWhereInputObjectSchema.optional(),
  cursor: CoPayDistributionWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  _count: z
    .union([z.literal(true), CoPayDistributionCountAggregateInputObjectSchema])
    .optional(),
  _min: CoPayDistributionMinAggregateInputObjectSchema.optional(),
  _max: CoPayDistributionMaxAggregateInputObjectSchema.optional(),
  _avg: CoPayDistributionAvgAggregateInputObjectSchema.optional(),
  _sum: CoPayDistributionSumAggregateInputObjectSchema.optional(),
});
