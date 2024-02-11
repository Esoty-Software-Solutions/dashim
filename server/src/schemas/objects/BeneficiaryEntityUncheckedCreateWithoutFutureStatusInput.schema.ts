import { z } from 'zod';
import { BeneficiaryUncheckedCreateNestedManyWithoutBeneficiaryEntityInputObjectSchema } from './BeneficiaryUncheckedCreateNestedManyWithoutBeneficiaryEntityInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BeneficiaryEntityUncheckedCreateWithoutFutureStatusInput> =
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
      cityId: z.string(),
      address: z.string().optional().nullable(),
      insurancePolicyId: z.string(),
      beneficiaries: z
        .lazy(
          () =>
            BeneficiaryUncheckedCreateNestedManyWithoutBeneficiaryEntityInputObjectSchema,
        )
        .optional(),
    })
    .strict();

export const BeneficiaryEntityUncheckedCreateWithoutFutureStatusInputObjectSchema =
  Schema;
