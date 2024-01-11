import { z } from 'zod';
import { SubscriberGroupCreateNestedOneWithoutSpentsInputObjectSchema } from './SubscriberGroupCreateNestedOneWithoutSpentsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SubscriberGroupBalanceCreateWithoutBeneftiPackageInput> =
  z
    .object({
      id: z.string(),
      createdAt: z.coerce.date().optional(),
      updatedAt: z.coerce.date().optional(),
      isPublished: z.boolean().optional(),
      isSoftDeleted: z.boolean().optional(),
      balance: z.number(),
      subscriberGroup: z.lazy(
        () => SubscriberGroupCreateNestedOneWithoutSpentsInputObjectSchema,
      ),
    })
    .strict();

export const SubscriberGroupBalanceCreateWithoutBeneftiPackageInputObjectSchema =
  Schema;
