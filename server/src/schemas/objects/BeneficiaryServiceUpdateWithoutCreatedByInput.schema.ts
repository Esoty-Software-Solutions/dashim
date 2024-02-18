import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { BoolFieldUpdateOperationsInputObjectSchema } from './BoolFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { NullableDateTimeFieldUpdateOperationsInputObjectSchema } from './NullableDateTimeFieldUpdateOperationsInput.schema';
import { IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { JsonNullValueInputSchema } from '../enums/JsonNullValueInput.schema';
import { UserUpdateOneWithoutBeneficiaryServiceUpdatesNestedInputObjectSchema } from './UserUpdateOneWithoutBeneficiaryServiceUpdatesNestedInput.schema';
import { ReviewStatusUpdateOneRequiredWithoutBeneficiaryServiceNestedInputObjectSchema } from './ReviewStatusUpdateOneRequiredWithoutBeneficiaryServiceNestedInput.schema';
import { EntryRecordUpdateOneRequiredWithoutBeneficiaryServicesNestedInputObjectSchema } from './EntryRecordUpdateOneRequiredWithoutBeneficiaryServicesNestedInput.schema';
import { MedicalServiceUpdateOneRequiredWithoutBeneficiaryServicesNestedInputObjectSchema } from './MedicalServiceUpdateOneRequiredWithoutBeneficiaryServicesNestedInput.schema';

import type { Prisma } from '@prisma/client';

const literalSchema = z.union([z.string(), z.number(), z.boolean()]);
const jsonSchema: z.ZodType<Prisma.InputJsonValue> = z.lazy(() =>
  z.union([
    literalSchema,
    z.array(jsonSchema.nullable()),
    z.record(jsonSchema.nullable()),
  ]),
);

const Schema: z.ZodType<Prisma.BeneficiaryServiceUpdateWithoutCreatedByInput> =
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
      Note: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema),
        ])
        .optional()
        .nullable(),
      billedAmmount: z
        .union([
          z.number(),
          z.lazy(() => IntFieldUpdateOperationsInputObjectSchema),
        ])
        .optional(),
      allowedAmmount: z
        .union([
          z.number(),
          z.lazy(() => IntFieldUpdateOperationsInputObjectSchema),
        ])
        .optional(),
      copayAmmount: z
        .union([
          z.number(),
          z.lazy(() => IntFieldUpdateOperationsInputObjectSchema),
        ])
        .optional(),
      cashAmount: z
        .union([
          z.number(),
          z.lazy(() => IntFieldUpdateOperationsInputObjectSchema),
        ])
        .optional(),
      coveredAmount: z
        .union([
          z.number(),
          z.lazy(() => IntFieldUpdateOperationsInputObjectSchema),
        ])
        .optional(),
      defferedAmount: z
        .union([
          z.number(),
          z.lazy(() => IntFieldUpdateOperationsInputObjectSchema),
        ])
        .optional(),
      coinsuranceAmount: z
        .union([
          z.number(),
          z.lazy(() => IntFieldUpdateOperationsInputObjectSchema),
        ])
        .optional(),
      notes: z
        .union([z.lazy(() => JsonNullValueInputSchema), jsonSchema])
        .optional(),
      isExamination: z
        .union([
          z.boolean(),
          z.lazy(() => BoolFieldUpdateOperationsInputObjectSchema),
        ])
        .optional(),
      groupId: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
        ])
        .optional(),
      UpdatedBy: z
        .lazy(
          () =>
            UserUpdateOneWithoutBeneficiaryServiceUpdatesNestedInputObjectSchema,
        )
        .optional(),
      reviewStatus: z
        .lazy(
          () =>
            ReviewStatusUpdateOneRequiredWithoutBeneficiaryServiceNestedInputObjectSchema,
        )
        .optional(),
      entryRecord: z
        .lazy(
          () =>
            EntryRecordUpdateOneRequiredWithoutBeneficiaryServicesNestedInputObjectSchema,
        )
        .optional(),
      medicalService: z
        .lazy(
          () =>
            MedicalServiceUpdateOneRequiredWithoutBeneficiaryServicesNestedInputObjectSchema,
        )
        .optional(),
    })
    .strict();

export const BeneficiaryServiceUpdateWithoutCreatedByInputObjectSchema = Schema;
