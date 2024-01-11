import { z } from 'zod';
import { SubscriberGroupBalanceWhereInputObjectSchema } from './objects/SubscriberGroupBalanceWhereInput.schema';
import { SubscriberGroupBalanceOrderByWithAggregationInputObjectSchema } from './objects/SubscriberGroupBalanceOrderByWithAggregationInput.schema';
import { SubscriberGroupBalanceScalarWhereWithAggregatesInputObjectSchema } from './objects/SubscriberGroupBalanceScalarWhereWithAggregatesInput.schema';
import { SubscriberGroupBalanceScalarFieldEnumSchema } from './enums/SubscriberGroupBalanceScalarFieldEnum.schema';

export const SubscriberGroupBalanceGroupBySchema = z.object({
  where: SubscriberGroupBalanceWhereInputObjectSchema.optional(),
  orderBy: z
    .union([
      SubscriberGroupBalanceOrderByWithAggregationInputObjectSchema,
      SubscriberGroupBalanceOrderByWithAggregationInputObjectSchema.array(),
    ])
    .optional(),
  having:
    SubscriberGroupBalanceScalarWhereWithAggregatesInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  by: z.array(SubscriberGroupBalanceScalarFieldEnumSchema),
});
