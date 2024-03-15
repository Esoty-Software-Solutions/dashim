/* eslint-disable */
import { z } from 'zod';
import { MedicalCenterUncheckedCreateNestedManyWithoutCityInputObjectSchema } from './MedicalCenterUncheckedCreateNestedManyWithoutCityInput.schema';
import { BeneficiaryEntityUncheckedCreateNestedManyWithoutCityInputObjectSchema } from './BeneficiaryEntityUncheckedCreateNestedManyWithoutCityInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.CityEnumUncheckedCreateWithoutInstitutionsInput>;
export const CityEnumUncheckedCreateWithoutInstitutionsInputObjectSchema: SchemaType = z
    .object({
        id: z.string(),
        createdAt: z.union([z.date().optional(), z.string().datetime().optional()]),
        updatedAt: z.union([z.date().optional(), z.string().datetime().optional()]),
        isPublished: z.boolean().optional(),
        isSoftDeleted: z.boolean().optional(),
        arabic: z.union([z.string(), z.null()]).optional().nullable(),
        english: z.union([z.string(), z.null()]).optional().nullable(),
        name: z.string(),
        countryId: z.string(),
        medicalcenters: z.lazy(() => MedicalCenterUncheckedCreateNestedManyWithoutCityInputObjectSchema).optional(),
        beneficiaryEntities: z
            .lazy(() => BeneficiaryEntityUncheckedCreateNestedManyWithoutCityInputObjectSchema)
            .optional(),
    })
    .strict() as SchemaType;
