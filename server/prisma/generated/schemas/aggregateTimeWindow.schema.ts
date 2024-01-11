import { z } from 'zod';
import { TimeWindowOrderByWithRelationInputObjectSchema } from './objects/TimeWindowOrderByWithRelationInput.schema';
import { TimeWindowWhereInputObjectSchema } from './objects/TimeWindowWhereInput.schema';
import { TimeWindowWhereUniqueInputObjectSchema } from './objects/TimeWindowWhereUniqueInput.schema';
import { TimeWindowCountAggregateInputObjectSchema } from './objects/TimeWindowCountAggregateInput.schema';
import { TimeWindowMinAggregateInputObjectSchema } from './objects/TimeWindowMinAggregateInput.schema';
import { TimeWindowMaxAggregateInputObjectSchema } from './objects/TimeWindowMaxAggregateInput.schema';
import { TimeWindowAvgAggregateInputObjectSchema } from './objects/TimeWindowAvgAggregateInput.schema';
import { TimeWindowSumAggregateInputObjectSchema } from './objects/TimeWindowSumAggregateInput.schema';

export const TimeWindowAggregateSchema = z.object({
  orderBy: z
    .union([
      TimeWindowOrderByWithRelationInputObjectSchema,
      TimeWindowOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: TimeWindowWhereInputObjectSchema.optional(),
  cursor: TimeWindowWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  _count: z
    .union([z.literal(true), TimeWindowCountAggregateInputObjectSchema])
    .optional(),
  _min: TimeWindowMinAggregateInputObjectSchema.optional(),
  _max: TimeWindowMaxAggregateInputObjectSchema.optional(),
  _avg: TimeWindowAvgAggregateInputObjectSchema.optional(),
  _sum: TimeWindowSumAggregateInputObjectSchema.optional(),
});
