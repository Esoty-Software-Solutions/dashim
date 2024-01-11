import { z } from 'zod';
import { SubscriberGroupBalanceWhereInputObjectSchema } from './objects/SubscriberGroupBalanceWhereInput.schema';

export const SubscriberGroupBalanceDeleteManySchema = z.object({
  where: SubscriberGroupBalanceWhereInputObjectSchema.optional(),
});
