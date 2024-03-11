import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { BoolFieldUpdateOperationsInputObjectSchema } from './BoolFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { CountryEnumUpdateOneRequiredWithoutCitiesNestedInputObjectSchema } from './CountryEnumUpdateOneRequiredWithoutCitiesNestedInput.schema';
import { InstitutionUpdateManyWithoutCityNestedInputObjectSchema } from './InstitutionUpdateManyWithoutCityNestedInput.schema';
import { BeneficiaryEntityUpdateManyWithoutCityNestedInputObjectSchema } from './BeneficiaryEntityUpdateManyWithoutCityNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CityEnumUpdateWithoutMedicalcentersInput> = z
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
    arabic: z
      .union([
        z.string(),
        z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional()
      .nullable(),
    english: z
      .union([
        z.string(),
        z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional()
      .nullable(),
    name: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    country: z
      .lazy(
        () => CountryEnumUpdateOneRequiredWithoutCitiesNestedInputObjectSchema,
      )
      .optional(),
    institutions: z
      .lazy(() => InstitutionUpdateManyWithoutCityNestedInputObjectSchema)
      .optional(),
    beneficiaryEntities: z
      .lazy(() => BeneficiaryEntityUpdateManyWithoutCityNestedInputObjectSchema)
      .optional(),
  })
  .strict();

export const CityEnumUpdateWithoutMedicalcentersInputObjectSchema = Schema;
