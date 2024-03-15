/* eslint-disable */
import { z } from 'zod';
import { InstitutionUncheckedCreateNestedManyWithoutCityInputObjectSchema } from './InstitutionUncheckedCreateNestedManyWithoutCityInput.schema';
import { BeneficiaryEntityUncheckedCreateNestedManyWithoutCityInputObjectSchema } from './BeneficiaryEntityUncheckedCreateNestedManyWithoutCityInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.CityEnumUncheckedCreateWithoutMedicalcentersInput>;
export const CityEnumUncheckedCreateWithoutMedicalcentersInputObjectSchema: SchemaType = z
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
        institutions: z.lazy(() => InstitutionUncheckedCreateNestedManyWithoutCityInputObjectSchema).optional(),
        beneficiaryEntities: z
            .lazy(() => BeneficiaryEntityUncheckedCreateNestedManyWithoutCityInputObjectSchema)
            .optional(),
    })
    .strict() as SchemaType;
