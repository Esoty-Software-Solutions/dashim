/* eslint-disable */
import { z } from 'zod';
import { CountryEnumCreateNestedOneWithoutCitiesInputObjectSchema } from './CountryEnumCreateNestedOneWithoutCitiesInput.schema';
import { InstitutionCreateNestedManyWithoutCityInputObjectSchema } from './InstitutionCreateNestedManyWithoutCityInput.schema';
import { BeneficiaryEntityCreateNestedManyWithoutCityInputObjectSchema } from './BeneficiaryEntityCreateNestedManyWithoutCityInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.CityEnumCreateWithoutMedicalcentersInput>;
export const CityEnumCreateWithoutMedicalcentersInputObjectSchema: SchemaType = z
    .object({
        id: z.string(),
        createdAt: z.union([z.date().optional(), z.string().datetime().optional()]),
        updatedAt: z.union([z.date().optional(), z.string().datetime().optional()]),
        isPublished: z.boolean().optional(),
        isSoftDeleted: z.boolean().optional(),
        arabic: z.union([z.string(), z.null()]).optional().nullable(),
        english: z.union([z.string(), z.null()]).optional().nullable(),
        name: z.string(),
        country: z.lazy(() => CountryEnumCreateNestedOneWithoutCitiesInputObjectSchema),
        institutions: z.lazy(() => InstitutionCreateNestedManyWithoutCityInputObjectSchema).optional(),
        beneficiaryEntities: z.lazy(() => BeneficiaryEntityCreateNestedManyWithoutCityInputObjectSchema).optional(),
    })
    .strict() as SchemaType;
