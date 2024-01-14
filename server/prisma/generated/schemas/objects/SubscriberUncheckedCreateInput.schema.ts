import { z } from 'zod';
import { BeneficiaryUncheckedCreateNestedManyWithoutSubscriberInputObjectSchema } from './BeneficiaryUncheckedCreateNestedManyWithoutSubscriberInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SubscriberUncheckedCreateInput> = z
  .object({
    id: z.string(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
    isPublished: z.boolean().optional(),
    isSoftDeleted: z.boolean().optional(),
    isActive: z.boolean().optional(),
    deactivationReason: z.string().optional().nullable(),
    institutionId: z.string(),
    insurancePolicyId: z.string(),
    beneficiary: z
      .lazy(
        () =>
          BeneficiaryUncheckedCreateNestedManyWithoutSubscriberInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const SubscriberUncheckedCreateInputObjectSchema = Schema;
