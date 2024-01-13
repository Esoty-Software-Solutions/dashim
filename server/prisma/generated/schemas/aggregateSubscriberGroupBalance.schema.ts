import { z } from 'zod';
import { SubscriberGroupBalanceOrderByWithRelationInputObjectSchema } from './objects/SubscriberGroupBalanceOrderByWithRelationInput.schema';
import { SubscriberGroupBalanceWhereInputObjectSchema } from './objects/SubscriberGroupBalanceWhereInput.schema';
import { SubscriberGroupBalanceWhereUniqueInputObjectSchema } from './objects/SubscriberGroupBalanceWhereUniqueInput.schema';
import { SubscriberGroupBalanceCountAggregateInputObjectSchema } from './objects/SubscriberGroupBalanceCountAggregateInput.schema';
import { SubscriberGroupBalanceMinAggregateInputObjectSchema } from './objects/SubscriberGroupBalanceMinAggregateInput.schema';
import { SubscriberGroupBalanceMaxAggregateInputObjectSchema } from './objects/SubscriberGroupBalanceMaxAggregateInput.schema';
import { SubscriberGroupBalanceAvgAggregateInputObjectSchema } from './objects/SubscriberGroupBalanceAvgAggregateInput.schema';
import { SubscriberGroupBalanceSumAggregateInputObjectSchema } from './objects/SubscriberGroupBalanceSumAggregateInput.schema';

export const SubscriberGroupBalanceAggregateSchema = z.object({
  orderBy: z
    .union([
      SubscriberGroupBalanceOrderByWithRelationInputObjectSchema,
      SubscriberGroupBalanceOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: SubscriberGroupBalanceWhereInputObjectSchema.optional(),
  cursor: SubscriberGroupBalanceWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  _count: z
    .union([
      z.literal(true),
      SubscriberGroupBalanceCountAggregateInputObjectSchema,
    ])
    .optional(),
  _min: SubscriberGroupBalanceMinAggregateInputObjectSchema.optional(),
  _max: SubscriberGroupBalanceMaxAggregateInputObjectSchema.optional(),
  _avg: SubscriberGroupBalanceAvgAggregateInputObjectSchema.optional(),
  _sum: SubscriberGroupBalanceSumAggregateInputObjectSchema.optional(),
});
