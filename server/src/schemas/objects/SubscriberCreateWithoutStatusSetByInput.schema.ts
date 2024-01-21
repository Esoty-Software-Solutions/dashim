import { z } from 'zod';
import { InsurancePolicyCreateNestedOneWithoutSubscribersInputObjectSchema } from './InsurancePolicyCreateNestedOneWithoutSubscribersInput.schema';
import { BeneficiaryCreateNestedManyWithoutSubscriberInputObjectSchema } from './BeneficiaryCreateNestedManyWithoutSubscriberInput.schema';
import { SubscriberFutureStatusChangeCreateNestedManyWithoutSubscriberInputObjectSchema } from './SubscriberFutureStatusChangeCreateNestedManyWithoutSubscriberInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SubscriberCreateWithoutStatusSetByInput> = z
  .object({
    id: z.string(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
    isPublished: z.boolean().optional(),
    isSoftDeleted: z.boolean().optional(),
    isActive: z.boolean().optional(),
    deactivationReason: z.string().optional().nullable(),
    deactivationDate: z.coerce.date().optional().nullable(),
    insurancePolicy: z.lazy(
      () => InsurancePolicyCreateNestedOneWithoutSubscribersInputObjectSchema,
    ),
    beneficiaries: z
      .lazy(() => BeneficiaryCreateNestedManyWithoutSubscriberInputObjectSchema)
      .optional(),
    futureStatus: z
      .lazy(
        () =>
          SubscriberFutureStatusChangeCreateNestedManyWithoutSubscriberInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const SubscriberCreateWithoutStatusSetByInputObjectSchema = Schema;
