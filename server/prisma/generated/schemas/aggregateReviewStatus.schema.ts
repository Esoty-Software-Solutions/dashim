import { z } from 'zod';
import { ReviewStatusOrderByWithRelationInputObjectSchema } from './objects/ReviewStatusOrderByWithRelationInput.schema';
import { ReviewStatusWhereInputObjectSchema } from './objects/ReviewStatusWhereInput.schema';
import { ReviewStatusWhereUniqueInputObjectSchema } from './objects/ReviewStatusWhereUniqueInput.schema';
import { ReviewStatusCountAggregateInputObjectSchema } from './objects/ReviewStatusCountAggregateInput.schema';
import { ReviewStatusMinAggregateInputObjectSchema } from './objects/ReviewStatusMinAggregateInput.schema';
import { ReviewStatusMaxAggregateInputObjectSchema } from './objects/ReviewStatusMaxAggregateInput.schema';

export const ReviewStatusAggregateSchema = z.object({
  orderBy: z
    .union([
      ReviewStatusOrderByWithRelationInputObjectSchema,
      ReviewStatusOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: ReviewStatusWhereInputObjectSchema.optional(),
  cursor: ReviewStatusWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  _count: z
    .union([z.literal(true), ReviewStatusCountAggregateInputObjectSchema])
    .optional(),
  _min: ReviewStatusMinAggregateInputObjectSchema.optional(),
  _max: ReviewStatusMaxAggregateInputObjectSchema.optional(),
});
