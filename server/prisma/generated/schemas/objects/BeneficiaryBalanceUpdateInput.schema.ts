import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { BoolFieldUpdateOperationsInputObjectSchema } from './BoolFieldUpdateOperationsInput.schema';
import { FloatFieldUpdateOperationsInputObjectSchema } from './FloatFieldUpdateOperationsInput.schema';
import { BeneficiaryUpdateOneRequiredWithoutSpentsNestedInputObjectSchema } from './BeneficiaryUpdateOneRequiredWithoutSpentsNestedInput.schema';
import { BenefitPackageUpdateOneRequiredWithoutSpentsNestedInputObjectSchema } from './BenefitPackageUpdateOneRequiredWithoutSpentsNestedInput.schema';

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
    balance: z
      .union([
        z.number(),
        z.lazy(() => FloatFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    beneficiary: z
      .lazy(
        () => BeneficiaryUpdateOneRequiredWithoutSpentsNestedInputObjectSchema,
      )
      .optional(),
    beneftiPackage: z
      .lazy(
        () =>
          BenefitPackageUpdateOneRequiredWithoutSpentsNestedInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const BeneficiaryBalanceUpdateInputObjectSchema = Schema;
