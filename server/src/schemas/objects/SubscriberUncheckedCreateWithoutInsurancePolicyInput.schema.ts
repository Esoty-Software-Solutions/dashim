import { z } from 'zod';
import { BeneficiaryUncheckedCreateNestedManyWithoutSubscriberInputObjectSchema } from './BeneficiaryUncheckedCreateNestedManyWithoutSubscriberInput.schema';
import { SubscriberFutureStatusChangeUncheckedCreateNestedManyWithoutSubscriberInputObjectSchema } from './SubscriberFutureStatusChangeUncheckedCreateNestedManyWithoutSubscriberInput.schema';

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
      deactivationDate: z.coerce.date().optional().nullable(),
      statusSetById: z.string(),
      beneficiaries: z
        .lazy(
          () =>
            BeneficiaryUncheckedCreateNestedManyWithoutSubscriberInputObjectSchema,
        )
        .optional(),
      futureStatus: z
        .lazy(
          () =>
            SubscriberFutureStatusChangeUncheckedCreateNestedManyWithoutSubscriberInputObjectSchema,
        )
        .optional(),
    })
    .strict();

export const SubscriberUncheckedCreateWithoutInsurancePolicyInputObjectSchema =
  Schema;
