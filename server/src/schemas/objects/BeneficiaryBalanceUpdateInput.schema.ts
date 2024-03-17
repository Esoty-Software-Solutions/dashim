import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { BoolFieldUpdateOperationsInputObjectSchema } from './BoolFieldUpdateOperationsInput.schema';
import { IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { BeneficiaryUpdateOneRequiredWithoutBeneficiaryBalancesNestedInputObjectSchema } from './BeneficiaryUpdateOneRequiredWithoutBeneficiaryBalancesNestedInput.schema';
import { BenefitPackageUpdateOneRequiredWithoutBeneficiaryBalancesNestedInputObjectSchema } from './BenefitPackageUpdateOneRequiredWithoutBeneficiaryBalancesNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BeneficiaryBalanceUpdateInput> = z
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
    balancePending: z
      .union([
        z.number(),
        z.lazy(() => IntFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    balanceActual: z
      .union([
        z.number(),
        z.lazy(() => IntFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    beneficiary: z
      .lazy(
        () =>
          BeneficiaryUpdateOneRequiredWithoutBeneficiaryBalancesNestedInputObjectSchema,
      )
      .optional(),
    beneftiPackage: z
      .lazy(
        () =>
          BenefitPackageUpdateOneRequiredWithoutBeneficiaryBalancesNestedInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const BeneficiaryBalanceUpdateInputObjectSchema = Schema;