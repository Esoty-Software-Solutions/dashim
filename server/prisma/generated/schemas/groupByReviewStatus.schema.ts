import { z } from 'zod';
import { ReviewStatusWhereInputObjectSchema } from './objects/ReviewStatusWhereInput.schema';
import { ReviewStatusOrderByWithAggregationInputObjectSchema } from './objects/ReviewStatusOrderByWithAggregationInput.schema';
import { ReviewStatusScalarWhereWithAggregatesInputObjectSchema } from './objects/ReviewStatusScalarWhereWithAggregatesInput.schema';
import { ReviewStatusScalarFieldEnumSchema } from './enums/ReviewStatusScalarFieldEnum.schema';

export const ReviewStatusGroupBySchema = z.object({
  where: ReviewStatusWhereInputObjectSchema.optional(),
  orderBy: z
    .union([
      ReviewStatusOrderByWithAggregationInputObjectSchema,
      ReviewStatusOrderByWithAggregationInputObjectSchema.array(),
    ])
    .optional(),
  having: ReviewStatusScalarWhereWithAggregatesInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  by: z.array(ReviewStatusScalarFieldEnumSchema),
});
