import { z } from 'zod';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { BoolFilterObjectSchema } from './BoolFilter.schema';
import { StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { CountryRelationFilterObjectSchema } from './CountryRelationFilter.schema';
import { CountryWhereInputObjectSchema } from './CountryWhereInput.schema';
import { InstitutionListRelationFilterObjectSchema } from './InstitutionListRelationFilter.schema';
import { MedicalCenterListRelationFilterObjectSchema } from './MedicalCenterListRelationFilter.schema';
import { BeneficiaryEntityListRelationFilterObjectSchema } from './BeneficiaryEntityListRelationFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CityWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => CityWhereInputObjectSchema),
        z.lazy(() => CityWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => CityWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => CityWhereInputObjectSchema),
        z.lazy(() => CityWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    createdAt: z
      .union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()])
      .optional(),
    updatedAt: z
      .union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()])
      .optional(),
    isPublished: z
      .union([z.lazy(() => BoolFilterObjectSchema), z.boolean()])
      .optional(),
    isSoftDeleted: z
      .union([z.lazy(() => BoolFilterObjectSchema), z.boolean()])
      .optional(),
    arabic: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    english: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    name: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    countryId: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    country: z
      .union([
        z.lazy(() => CountryRelationFilterObjectSchema),
        z.lazy(() => CountryWhereInputObjectSchema),
      ])
      .optional(),
    institutions: z
      .lazy(() => InstitutionListRelationFilterObjectSchema)
      .optional(),
    medicalcenters: z
      .lazy(() => MedicalCenterListRelationFilterObjectSchema)
      .optional(),
    beneficiaryEntities: z
      .lazy(() => BeneficiaryEntityListRelationFilterObjectSchema)
      .optional(),
  })
  .strict();

export const CityWhereInputObjectSchema = Schema;
