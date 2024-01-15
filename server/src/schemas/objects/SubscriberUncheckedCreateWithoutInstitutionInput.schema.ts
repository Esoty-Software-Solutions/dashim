import { z } from 'zod';
import { BeneficiaryUncheckedCreateNestedManyWithoutSubscriberInputObjectSchema } from './BeneficiaryUncheckedCreateNestedManyWithoutSubscriberInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SubscriberUncheckedCreateWithoutInstitutionInput> =
  z
    .object({
      id: z.string(),
      createdAt: z.coerce.date().optional(),
      updatedAt: z.coerce.date().optional(),
      isPublished: z.boolean().optional(),
      isSoftDeleted: z.boolean().optional(),
      isActive: z.boolean().optional(),
      deactivationReason: z.string().optional().nullable(),
      insurancePolicyId: z.string(),
      beneficiaries: z
        .lazy(
          () =>
            BeneficiaryUncheckedCreateNestedManyWithoutSubscriberInputObjectSchema,
        )
        .optional(),
    })
    .strict();

export const SubscriberUncheckedCreateWithoutInstitutionInputObjectSchema =
  Schema;
