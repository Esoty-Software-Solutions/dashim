import { z } from 'zod';
import { UserCreateNestedOneWithoutBeneficiaryEntityFutureStatusCreationsInputObjectSchema } from './UserCreateNestedOneWithoutBeneficiaryEntityFutureStatusCreationsInput.schema';
import { UserCreateNestedOneWithoutBeneficiaryEntityFutureStatusUpdatesInputObjectSchema } from './UserCreateNestedOneWithoutBeneficiaryEntityFutureStatusUpdatesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BeneficiaryEntityFutureStatusChangeCreateWithoutBeneficiaryEntityInput> =
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
      UpdatedBy: z
        .lazy(
          () =>
            UserCreateNestedOneWithoutBeneficiaryEntityFutureStatusUpdatesInputObjectSchema,
        )
        .optional(),
    })
    .strict();

export const BeneficiaryEntityFutureStatusChangeCreateWithoutBeneficiaryEntityInputObjectSchema =
  Schema;
