import { z } from 'zod';
import { UserCreateNestedOneWithoutBeneficiaryEntityFutureStatusCreationsInputObjectSchema } from './UserCreateNestedOneWithoutBeneficiaryEntityFutureStatusCreationsInput.schema';
import { BeneficiaryEntityCreateNestedOneWithoutFutureStatusInputObjectSchema } from './BeneficiaryEntityCreateNestedOneWithoutFutureStatusInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BeneficiaryEntityFutureStatusChangeCreateWithoutUpdatedByInput> =
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
          UserCreateNestedOneWithoutBeneficiaryEntityFutureStatusCreationsInputObjectSchema,
      ),
      beneficiaryEntity: z.lazy(
        () =>
          BeneficiaryEntityCreateNestedOneWithoutFutureStatusInputObjectSchema,
      ),
    })
    .strict();

export const BeneficiaryEntityFutureStatusChangeCreateWithoutUpdatedByInputObjectSchema =
  Schema;
