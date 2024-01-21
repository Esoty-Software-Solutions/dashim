import { z } from 'zod';
import { UserCreateNestedOneWithoutBeneficiaryFutureStatusChangesInputObjectSchema } from './UserCreateNestedOneWithoutBeneficiaryFutureStatusChangesInput.schema';
import { BeneficiaryCreateNestedOneWithoutFutureStatusInputObjectSchema } from './BeneficiaryCreateNestedOneWithoutFutureStatusInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BeneficiaryFutureStatusChangeCreateWithoutCreatedByInput> =
  z
    .object({
      id: z.string(),
      createdAt: z.coerce.date().optional(),
      updatedAt: z.coerce.date().optional(),
      isPublished: z.boolean().optional(),
      isSoftDeleted: z.boolean().optional(),
      changeDate: z.coerce.date(),
      futureStatus: z.boolean(),
      description: z.string().optional().nullable(),
      UpdatedBy: z
        .lazy(
          () =>
            UserCreateNestedOneWithoutBeneficiaryFutureStatusChangesInputObjectSchema,
        )
        .optional(),
      beneficiary: z.lazy(
        () => BeneficiaryCreateNestedOneWithoutFutureStatusInputObjectSchema,
      ),
    })
    .strict();

export const BeneficiaryFutureStatusChangeCreateWithoutCreatedByInputObjectSchema =
  Schema;
