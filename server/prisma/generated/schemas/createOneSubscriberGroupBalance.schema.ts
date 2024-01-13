import { z } from 'zod';
import { SubscriberGroupBalanceCreateInputObjectSchema } from './objects/SubscriberGroupBalanceCreateInput.schema';
import { SubscriberGroupBalanceUncheckedCreateInputObjectSchema } from './objects/SubscriberGroupBalanceUncheckedCreateInput.schema';

export const SubscriberGroupBalanceCreateOneSchema = z.object({
  data: z.union([
    SubscriberGroupBalanceCreateInputObjectSchema,
    SubscriberGroupBalanceUncheckedCreateInputObjectSchema,
  ]),
});
