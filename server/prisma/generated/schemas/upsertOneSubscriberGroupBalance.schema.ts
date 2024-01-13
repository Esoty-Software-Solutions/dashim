import { z } from 'zod';
import { SubscriberGroupBalanceWhereUniqueInputObjectSchema } from './objects/SubscriberGroupBalanceWhereUniqueInput.schema';
import { SubscriberGroupBalanceCreateInputObjectSchema } from './objects/SubscriberGroupBalanceCreateInput.schema';
import { SubscriberGroupBalanceUncheckedCreateInputObjectSchema } from './objects/SubscriberGroupBalanceUncheckedCreateInput.schema';
import { SubscriberGroupBalanceUpdateInputObjectSchema } from './objects/SubscriberGroupBalanceUpdateInput.schema';
import { SubscriberGroupBalanceUncheckedUpdateInputObjectSchema } from './objects/SubscriberGroupBalanceUncheckedUpdateInput.schema';

export const SubscriberGroupBalanceUpsertSchema = z.object({
  where: SubscriberGroupBalanceWhereUniqueInputObjectSchema,
  create: z.union([
    SubscriberGroupBalanceCreateInputObjectSchema,
    SubscriberGroupBalanceUncheckedCreateInputObjectSchema,
  ]),
  update: z.union([
    SubscriberGroupBalanceUpdateInputObjectSchema,
    SubscriberGroupBalanceUncheckedUpdateInputObjectSchema,
  ]),
});
