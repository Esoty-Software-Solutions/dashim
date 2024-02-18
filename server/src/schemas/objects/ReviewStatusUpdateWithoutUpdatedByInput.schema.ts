import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { BoolFieldUpdateOperationsInputObjectSchema } from './BoolFieldUpdateOperationsInput.schema';
import { UserUpdateOneRequiredWithoutReviewStatusCreationsNestedInputObjectSchema } from './UserUpdateOneRequiredWithoutReviewStatusCreationsNestedInput.schema';
import { BeneficiaryServiceUpdateOneWithoutReviewStatusNestedInputObjectSchema } from './BeneficiaryServiceUpdateOneWithoutReviewStatusNestedInput.schema';
import { ReviewStatusEnumUpdateOneRequiredWithoutTransactionBeneficiaryServicesNestedInputObjectSchema } from './ReviewStatusEnumUpdateOneRequiredWithoutTransactionBeneficiaryServicesNestedInput.schema';
import { ReviewStatusEnumUpdateOneRequiredWithoutMedicalBeneficiaryServicesNestedInputObjectSchema } from './ReviewStatusEnumUpdateOneRequiredWithoutMedicalBeneficiaryServicesNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ReviewStatusUpdateWithoutUpdatedByInput> = z
  .object({
    id: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    createdAt: z
      .union([
        z.coerce.date(),
        z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    updatedAt: z
      .union([
        z.coerce.date(),
        z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    isPublished: z
      .union([
        z.boolean(),
        z.lazy(() => BoolFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    isSoftDeleted: z
      .union([
        z.boolean(),
        z.lazy(() => BoolFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    CreatedBy: z
      .lazy(
        () =>
          UserUpdateOneRequiredWithoutReviewStatusCreationsNestedInputObjectSchema,
      )
      .optional(),
    beneficiaryService: z
      .lazy(
        () =>
          BeneficiaryServiceUpdateOneWithoutReviewStatusNestedInputObjectSchema,
      )
      .optional(),
    transactionReviewStatus: z
      .lazy(
        () =>
          ReviewStatusEnumUpdateOneRequiredWithoutTransactionBeneficiaryServicesNestedInputObjectSchema,
      )
      .optional(),
    medicalReviewStatus: z
      .lazy(
        () =>
          ReviewStatusEnumUpdateOneRequiredWithoutMedicalBeneficiaryServicesNestedInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const ReviewStatusUpdateWithoutUpdatedByInputObjectSchema = Schema;
