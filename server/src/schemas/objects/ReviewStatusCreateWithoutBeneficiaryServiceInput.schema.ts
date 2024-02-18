import { z } from 'zod';
import { UserCreateNestedOneWithoutReviewStatusCreationsInputObjectSchema } from './UserCreateNestedOneWithoutReviewStatusCreationsInput.schema';
import { UserCreateNestedOneWithoutReviewStatusUpdatesInputObjectSchema } from './UserCreateNestedOneWithoutReviewStatusUpdatesInput.schema';
import { ReviewStatusEnumCreateNestedOneWithoutTransactionBeneficiaryServicesInputObjectSchema } from './ReviewStatusEnumCreateNestedOneWithoutTransactionBeneficiaryServicesInput.schema';
import { ReviewStatusEnumCreateNestedOneWithoutMedicalBeneficiaryServicesInputObjectSchema } from './ReviewStatusEnumCreateNestedOneWithoutMedicalBeneficiaryServicesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ReviewStatusCreateWithoutBeneficiaryServiceInput> =
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
      transactionReviewStatus: z.lazy(
        () =>
          ReviewStatusEnumCreateNestedOneWithoutTransactionBeneficiaryServicesInputObjectSchema,
      ),
      medicalReviewStatus: z.lazy(
        () =>
          ReviewStatusEnumCreateNestedOneWithoutMedicalBeneficiaryServicesInputObjectSchema,
      ),
    })
    .strict();

export const ReviewStatusCreateWithoutBeneficiaryServiceInputObjectSchema =
  Schema;
