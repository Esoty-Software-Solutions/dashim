import { z } from 'zod';
import { UserCreateNestedOneWithoutBeneficiaryFutureStatusCreationsInputObjectSchema } from './UserCreateNestedOneWithoutBeneficiaryFutureStatusCreationsInput.schema';
import { BeneficiaryCreateNestedOneWithoutFutureStatusInputObjectSchema } from './BeneficiaryCreateNestedOneWithoutFutureStatusInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BeneficiaryFutureStatusChangeCreateWithoutUpdatedByInput> =
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
      CreatedBy: z.lazy(
        () =>
          UserCreateNestedOneWithoutBeneficiaryFutureStatusCreationsInputObjectSchema,
      ),
      beneficiary: z.lazy(
        () => BeneficiaryCreateNestedOneWithoutFutureStatusInputObjectSchema,
      ),
    })
    .strict();

export const BeneficiaryFutureStatusChangeCreateWithoutUpdatedByInputObjectSchema =
  Schema;
