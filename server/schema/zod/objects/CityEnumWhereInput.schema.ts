/* eslint-disable */
import { z } from 'zod';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { BoolFilterObjectSchema } from './BoolFilter.schema';
import { StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { CountryEnumRelationFilterObjectSchema } from './CountryEnumRelationFilter.schema';
import { CountryEnumWhereInputObjectSchema } from './CountryEnumWhereInput.schema';
import { InstitutionListRelationFilterObjectSchema } from './InstitutionListRelationFilter.schema';
import { MedicalCenterListRelationFilterObjectSchema } from './MedicalCenterListRelationFilter.schema';
import { BeneficiaryEntityListRelationFilterObjectSchema } from './BeneficiaryEntityListRelationFilter.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.CityEnumWhereInput>;
export const CityEnumWhereInputObjectSchema: SchemaType = z
    .object({
        AND: z
            .union([z.lazy(() => CityEnumWhereInputObjectSchema), z.lazy(() => CityEnumWhereInputObjectSchema).array()])
            .optional(),
        OR: z
            .lazy(() => CityEnumWhereInputObjectSchema)
            .array()
            .optional(),
        NOT: z
            .union([z.lazy(() => CityEnumWhereInputObjectSchema), z.lazy(() => CityEnumWhereInputObjectSchema).array()])
            .optional(),
        id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
        createdAt: z
            .union([z.lazy(() => DateTimeFilterObjectSchema), z.union([z.date(), z.string().datetime().optional()])])
            .optional(),
        updatedAt: z
            .union([z.lazy(() => DateTimeFilterObjectSchema), z.union([z.date(), z.string().datetime().optional()])])
            .optional(),
        isPublished: z.union([z.lazy(() => BoolFilterObjectSchema), z.boolean()]).optional(),
        isSoftDeleted: z.union([z.lazy(() => BoolFilterObjectSchema), z.boolean()]).optional(),
        arabic: z
            .union([z.lazy(() => StringNullableFilterObjectSchema), z.string(), z.null()])
            .optional()
            .nullable(),
        english: z
            .union([z.lazy(() => StringNullableFilterObjectSchema), z.string(), z.null()])
            .optional()
            .nullable(),
        name: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
        countryId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
        country: z
            .union([
                z.lazy(() => CountryEnumRelationFilterObjectSchema),
                z.lazy(() => CountryEnumWhereInputObjectSchema),
            ])
            .optional(),
        institutions: z.lazy(() => InstitutionListRelationFilterObjectSchema).optional(),
        medicalcenters: z.lazy(() => MedicalCenterListRelationFilterObjectSchema).optional(),
        beneficiaryEntities: z.lazy(() => BeneficiaryEntityListRelationFilterObjectSchema).optional(),
    })
    .strict() as SchemaType;
