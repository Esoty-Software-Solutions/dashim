import { z } from 'zod';
import { UserCreateNestedOneWithoutReviewStatusCreationsInputObjectSchema } from './UserCreateNestedOneWithoutReviewStatusCreationsInput.schema';
import { UserCreateNestedOneWithoutReviewStatusUpdatesInputObjectSchema } from './UserCreateNestedOneWithoutReviewStatusUpdatesInput.schema';
import { BeneficiaryServiceCreateNestedOneWithoutReviewStatusInputObjectSchema } from './BeneficiaryServiceCreateNestedOneWithoutReviewStatusInput.schema';
import { ReviewStatusEnumCreateNestedOneWithoutTransactionBeneficiaryServicesInputObjectSchema } from './ReviewStatusEnumCreateNestedOneWithoutTransactionBeneficiaryServicesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ReviewStatusCreateWithoutMedicalReviewStatusInput> =
  z
    .object({
      id: z.string(),
      createdAt: z.coerce.date().optional(),
      updatedAt: z.coerce.date().optional(),
      isPublished: z.boolean().optional(),
      isSoftDeleted: z.boolean().optional(),
      CreatedBy: z.lazy(
        () => UserCreateNestedOneWithoutReviewStatusCreationsInputObjectSchema,
      ),
      UpdatedBy: z
        .lazy(
          () => UserCreateNestedOneWithoutReviewStatusUpdatesInputObjectSchema,
        )
        .optional(),
      beneficiaryService: z
        .lazy(
          () =>
            BeneficiaryServiceCreateNestedOneWithoutReviewStatusInputObjectSchema,
        )
        .optional(),
      transactionReviewStatus: z.lazy(
        () =>
          ReviewStatusEnumCreateNestedOneWithoutTransactionBeneficiaryServicesInputObjectSchema,
      ),
    })
    .strict();

export const ReviewStatusCreateWithoutMedicalReviewStatusInputObjectSchema =
  Schema;