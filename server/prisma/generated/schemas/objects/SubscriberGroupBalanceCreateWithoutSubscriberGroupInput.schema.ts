import { z } from 'zod';
import { BenefitPackageCreateNestedOneWithoutSpentsInputObjectSchema } from './BenefitPackageCreateNestedOneWithoutSpentsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SubscriberGroupBalanceCreateWithoutSubscriberGroupInput> =
  z
    .object({
      id: z.string(),
      createdAt: z.coerce.date().optional(),
      updatedAt: z.coerce.date().optional(),
      isPublished: z.boolean().optional(),
      isSoftDeleted: z.boolean().optional(),
      balance: z.number(),
      beneftiPackage: z.lazy(
        () => BenefitPackageCreateNestedOneWithoutSpentsInputObjectSchema,
      ),
    })
    .strict();

export const SubscriberGroupBalanceCreateWithoutSubscriberGroupInputObjectSchema =
  Schema;
