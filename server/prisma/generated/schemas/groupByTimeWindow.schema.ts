import { z } from 'zod';
import { TimeWindowWhereInputObjectSchema } from './objects/TimeWindowWhereInput.schema';
import { TimeWindowOrderByWithAggregationInputObjectSchema } from './objects/TimeWindowOrderByWithAggregationInput.schema';
import { TimeWindowScalarWhereWithAggregatesInputObjectSchema } from './objects/TimeWindowScalarWhereWithAggregatesInput.schema';
import { TimeWindowScalarFieldEnumSchema } from './enums/TimeWindowScalarFieldEnum.schema';

export const TimeWindowGroupBySchema = z.object({
  where: TimeWindowWhereInputObjectSchema.optional(),
  orderBy: z
    .union([
      TimeWindowOrderByWithAggregationInputObjectSchema,
      TimeWindowOrderByWithAggregationInputObjectSchema.array(),
    ])
    .optional(),
  having: TimeWindowScalarWhereWithAggregatesInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  by: z.array(TimeWindowScalarFieldEnumSchema),
});
