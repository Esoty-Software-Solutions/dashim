import { z } from 'zod';
import { SubscriberGroupBalanceCreateManyInputObjectSchema } from './objects/SubscriberGroupBalanceCreateManyInput.schema';

export const SubscriberGroupBalanceCreateManySchema = z.object({
  data: z.union([
    SubscriberGroupBalanceCreateManyInputObjectSchema,
    z.array(SubscriberGroupBalanceCreateManyInputObjectSchema),
  ]),
  skipDuplicates: z.boolean().optional(),
});
