import { z } from 'zod';
import { UserCreateNestedOneWithoutBeneficiaryFutureStatusCreationsInputObjectSchema } from './UserCreateNestedOneWithoutBeneficiaryFutureStatusCreationsInput.schema';
import { UserCreateNestedOneWithoutBeneficiaryFutureStatusUpdatesInputObjectSchema } from './UserCreateNestedOneWithoutBeneficiaryFutureStatusUpdatesInput.schema';
import { BeneficiaryCreateNestedOneWithoutFutureStatusInputObjectSchema } from './BeneficiaryCreateNestedOneWithoutFutureStatusInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BeneficiaryFutureStatusChangeCreateInput> = z
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
    UpdatedBy: z
      .lazy(
        () =>
          UserCreateNestedOneWithoutBeneficiaryFutureStatusUpdatesInputObjectSchema,
      )
      .optional(),
    beneficiary: z.lazy(
      () => BeneficiaryCreateNestedOneWithoutFutureStatusInputObjectSchema,
    ),
  })
  .strict();

export const BeneficiaryFutureStatusChangeCreateInputObjectSchema = Schema;
