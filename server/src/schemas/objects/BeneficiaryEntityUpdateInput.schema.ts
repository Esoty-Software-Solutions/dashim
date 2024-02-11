import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { BoolFieldUpdateOperationsInputObjectSchema } from './BoolFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { NullableDateTimeFieldUpdateOperationsInputObjectSchema } from './NullableDateTimeFieldUpdateOperationsInput.schema';
import { UserUpdateOneRequiredWithoutBeneficiaryEntityStatusChangesNestedInputObjectSchema } from './UserUpdateOneRequiredWithoutBeneficiaryEntityStatusChangesNestedInput.schema';
import { CityUpdateOneRequiredWithoutBeneficiaryEntitiesNestedInputObjectSchema } from './CityUpdateOneRequiredWithoutBeneficiaryEntitiesNestedInput.schema';
import { InsurancePolicyUpdateOneRequiredWithoutBeneficiaryEntitiesNestedInputObjectSchema } from './InsurancePolicyUpdateOneRequiredWithoutBeneficiaryEntitiesNestedInput.schema';
import { BeneficiaryUpdateManyWithoutBeneficiaryEntityNestedInputObjectSchema } from './BeneficiaryUpdateManyWithoutBeneficiaryEntityNestedInput.schema';
import { BeneficiaryEntityFutureStatusChangeUpdateManyWithoutBeneficiaryEntityNestedInputObjectSchema } from './BeneficiaryEntityFutureStatusChangeUpdateManyWithoutBeneficiaryEntityNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BeneficiaryEntityUpdateInput> = z
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
    address: z
      .union([
        z.string(),
        z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional()
      .nullable(),
    StatusSetBy: z
      .lazy(
        () =>
          UserUpdateOneRequiredWithoutBeneficiaryEntityStatusChangesNestedInputObjectSchema,
      )
      .optional(),
    city: z
      .lazy(
        () =>
          CityUpdateOneRequiredWithoutBeneficiaryEntitiesNestedInputObjectSchema,
      )
      .optional(),
    insurancePolicy: z
      .lazy(
        () =>
          InsurancePolicyUpdateOneRequiredWithoutBeneficiaryEntitiesNestedInputObjectSchema,
      )
      .optional(),
    beneficiaries: z
      .lazy(
        () =>
          BeneficiaryUpdateManyWithoutBeneficiaryEntityNestedInputObjectSchema,
      )
      .optional(),
    futureStatus: z
      .lazy(
        () =>
          BeneficiaryEntityFutureStatusChangeUpdateManyWithoutBeneficiaryEntityNestedInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const BeneficiaryEntityUpdateInputObjectSchema = Schema;
