import { z } from 'zod';
import { SubscriberGroupBalanceUpdateInputObjectSchema } from './objects/SubscriberGroupBalanceUpdateInput.schema';
import { SubscriberGroupBalanceUncheckedUpdateInputObjectSchema } from './objects/SubscriberGroupBalanceUncheckedUpdateInput.schema';
import { SubscriberGroupBalanceWhereUniqueInputObjectSchema } from './objects/SubscriberGroupBalanceWhereUniqueInput.schema';

export const SubscriberGroupBalanceUpdateOneSchema = z.object({
  data: z.union([
    SubscriberGroupBalanceUpdateInputObjectSchema,
    SubscriberGroupBalanceUncheckedUpdateInputObjectSchema,
  ]),
  where: SubscriberGroupBalanceWhereUniqueInputObjectSchema,
});
