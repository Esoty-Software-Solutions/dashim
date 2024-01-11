import { z } from 'zod';
import { SubscriberGroupBalanceWhereUniqueInputObjectSchema } from './objects/SubscriberGroupBalanceWhereUniqueInput.schema';

export const SubscriberGroupBalanceFindUniqueSchema = z.object({
  where: SubscriberGroupBalanceWhereUniqueInputObjectSchema,
});
