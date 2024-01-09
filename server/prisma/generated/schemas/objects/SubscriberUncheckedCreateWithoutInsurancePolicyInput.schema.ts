import { z } from 'zod';
import { SubscriberGroupUncheckedCreateNestedManyWithoutSubscriberInputObjectSchema } from './SubscriberGroupUncheckedCreateNestedManyWithoutSubscriberInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SubscriberUncheckedCreateWithoutInsurancePolicyInput> =
  z
    .object({
      id: z.string(),
      createdAt: z.coerce.date().optional(),
      updatedAt: z.coerce.date().optional(),
      isPublished: z.boolean().optional(),
      isSoftDeleted: z.boolean().optional(),
      isActive: z.boolean().optional(),
      deactivationReason: z.string().optional().nullable(),
      institutionId: z.string(),
      subscriberGroup: z
        .lazy(
          () =>
            SubscriberGroupUncheckedCreateNestedManyWithoutSubscriberInputObjectSchema,
        )
        .optional(),
    })
    .strict();

export const SubscriberUncheckedCreateWithoutInsurancePolicyInputObjectSchema =
  Schema;