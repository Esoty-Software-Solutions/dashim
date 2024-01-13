import { z } from 'zod';
import { SubscriberGroupBalanceUpdateManyMutationInputObjectSchema } from './objects/SubscriberGroupBalanceUpdateManyMutationInput.schema';
import { SubscriberGroupBalanceWhereInputObjectSchema } from './objects/SubscriberGroupBalanceWhereInput.schema';

export const SubscriberGroupBalanceUpdateManySchema = z.object({
  data: SubscriberGroupBalanceUpdateManyMutationInputObjectSchema,
  where: SubscriberGroupBalanceWhereInputObjectSchema.optional(),
});
