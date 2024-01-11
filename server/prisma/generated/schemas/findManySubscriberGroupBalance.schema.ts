import { z } from 'zod';
import { SubscriberGroupBalanceOrderByWithRelationInputObjectSchema } from './objects/SubscriberGroupBalanceOrderByWithRelationInput.schema';
import { SubscriberGroupBalanceWhereInputObjectSchema } from './objects/SubscriberGroupBalanceWhereInput.schema';
import { SubscriberGroupBalanceWhereUniqueInputObjectSchema } from './objects/SubscriberGroupBalanceWhereUniqueInput.schema';
import { SubscriberGroupBalanceScalarFieldEnumSchema } from './enums/SubscriberGroupBalanceScalarFieldEnum.schema';

export const SubscriberGroupBalanceFindManySchema = z.object({
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
  distinct: z.array(SubscriberGroupBalanceScalarFieldEnumSchema).optional(),
});
