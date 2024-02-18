import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { BoolFieldUpdateOperationsInputObjectSchema } from './BoolFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { NullableDateTimeFieldUpdateOperationsInputObjectSchema } from './NullableDateTimeFieldUpdateOperationsInput.schema';
import { BenefitPackageUpdatecopayDistrubtionInputObjectSchema } from './BenefitPackageUpdatecopayDistrubtionInput.schema';
import { BenefitPackageUpdatethreasholdInputObjectSchema } from './BenefitPackageUpdatethreasholdInput.schema';
import { InsurancePolicyUpdateOneRequiredWithoutBenefitPackagesNestedInputObjectSchema } from './InsurancePolicyUpdateOneRequiredWithoutBenefitPackagesNestedInput.schema';
import { BeneficiaryBalanceUpdateManyWithoutBeneftiPackageNestedInputObjectSchema } from './BeneficiaryBalanceUpdateManyWithoutBeneftiPackageNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BenefitPackageUpdateWithoutMedicalServiceCategoriesInput> =
  z
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
      isActive: z
        .union([
          z.boolean(),
          z.lazy(() => BoolFieldUpdateOperationsInputObjectSchema),
        ])
        .optional(),
      deactivationReason: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema),
        ])
        .optional()
        .nullable(),
      deactivationDate: z
        .union([
          z.coerce.date(),
          z.lazy(() => NullableDateTimeFieldUpdateOperationsInputObjectSchema),
        ])
        .optional()
        .nullable(),
      name: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
        ])
        .optional(),
      copayDistrubtion: z
        .union([
          z.lazy(() => BenefitPackageUpdatecopayDistrubtionInputObjectSchema),
          z.number().array(),
        ])
        .optional(),
      threashold: z
        .union([
          z.lazy(() => BenefitPackageUpdatethreasholdInputObjectSchema),
          z.number().array(),
        ])
        .optional(),
      insurancePolicy: z
        .lazy(
          () =>
            InsurancePolicyUpdateOneRequiredWithoutBenefitPackagesNestedInputObjectSchema,
        )
        .optional(),
      beneficiaryBalances: z
        .lazy(
          () =>
            BeneficiaryBalanceUpdateManyWithoutBeneftiPackageNestedInputObjectSchema,
        )
        .optional(),
    })
    .strict();

export const BenefitPackageUpdateWithoutMedicalServiceCategoriesInputObjectSchema =
  Schema;
