import { z } from 'zod';
import { SubscriberGroupCreateNestedOneWithoutSpentsInputObjectSchema } from './SubscriberGroupCreateNestedOneWithoutSpentsInput.schema';
import { BenefitPackageCreateNestedOneWithoutSpentsInputObjectSchema } from './BenefitPackageCreateNestedOneWithoutSpentsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SubscriberGroupBalanceCreateInput> = z
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
    beneftiPackage: z.lazy(
      () => BenefitPackageCreateNestedOneWithoutSpentsInputObjectSchema,
    ),
  })
  .strict();

export const SubscriberGroupBalanceCreateInputObjectSchema = Schema;
