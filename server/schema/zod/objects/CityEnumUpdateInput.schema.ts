/* eslint-disable */
import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { BoolFieldUpdateOperationsInputObjectSchema } from './BoolFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { CountryEnumUpdateOneRequiredWithoutCitiesNestedInputObjectSchema } from './CountryEnumUpdateOneRequiredWithoutCitiesNestedInput.schema';
import { InstitutionUpdateManyWithoutCityNestedInputObjectSchema } from './InstitutionUpdateManyWithoutCityNestedInput.schema';
import { MedicalCenterUpdateManyWithoutCityNestedInputObjectSchema } from './MedicalCenterUpdateManyWithoutCityNestedInput.schema';
import { BeneficiaryEntityUpdateManyWithoutCityNestedInputObjectSchema } from './BeneficiaryEntityUpdateManyWithoutCityNestedInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.CityEnumUpdateInput>;
export const CityEnumUpdateInputObjectSchema: SchemaType = z
    .object({
        id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
        createdAt: z
            .union([
                z.union([z.date(), z.string().datetime().optional()]),
                z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema),
            ])
            .optional(),
        updatedAt: z
            .union([
                z.union([z.date(), z.string().datetime().optional()]),
                z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema),
            ])
            .optional(),
        isPublished: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputObjectSchema)]).optional(),
        isSoftDeleted: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputObjectSchema)]).optional(),
        arabic: z
            .union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema), z.null()])
            .optional()
            .nullable(),
        english: z
            .union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema), z.null()])
            .optional()
            .nullable(),
        name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
        country: z.lazy(() => CountryEnumUpdateOneRequiredWithoutCitiesNestedInputObjectSchema).optional(),
        institutions: z.lazy(() => InstitutionUpdateManyWithoutCityNestedInputObjectSchema).optional(),
        medicalcenters: z.lazy(() => MedicalCenterUpdateManyWithoutCityNestedInputObjectSchema).optional(),
        beneficiaryEntities: z.lazy(() => BeneficiaryEntityUpdateManyWithoutCityNestedInputObjectSchema).optional(),
    })
    .strict() as SchemaType;
