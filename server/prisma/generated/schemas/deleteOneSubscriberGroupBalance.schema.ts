import { z } from 'zod';
import { SubscriberGroupBalanceWhereUniqueInputObjectSchema } from './objects/SubscriberGroupBalanceWhereUniqueInput.schema';

export const SubscriberGroupBalanceDeleteOneSchema = z.object({
  where: SubscriberGroupBalanceWhereUniqueInputObjectSchema,
});
