import { z } from 'zod';
import { UserCreateNestedOneWithoutSubscriberStatusChangesInputObjectSchema } from './UserCreateNestedOneWithoutSubscriberStatusChangesInput.schema';
import { InsurancePolicyCreateNestedOneWithoutSubscribersInputObjectSchema } from './InsurancePolicyCreateNestedOneWithoutSubscribersInput.schema';
import { SubscriberFutureStatusChangeCreateNestedManyWithoutSubscriberInputObjectSchema } from './SubscriberFutureStatusChangeCreateNestedManyWithoutSubscriberInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SubscriberCreateWithoutBeneficiariesInput> = z
  .object({
    id: z.string(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
    isPublished: z.boolean().optional(),
    isSoftDeleted: z.boolean().optional(),
    isActive: z.boolean().optional(),
    deactivationReason: z.string().optional().nullable(),
    deactivationDate: z.coerce.date().optional().nullable(),
    StatusSetBy: z.lazy(
      () => UserCreateNestedOneWithoutSubscriberStatusChangesInputObjectSchema,
    ),
    insurancePolicy: z.lazy(
      () => InsurancePolicyCreateNestedOneWithoutSubscribersInputObjectSchema,
    ),
    futureStatus: z
      .lazy(
        () =>
          SubscriberFutureStatusChangeCreateNestedManyWithoutSubscriberInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const SubscriberCreateWithoutBeneficiariesInputObjectSchema = Schema;
