import { z } from 'zod';
import { CountryCreateNestedOneWithoutCitiesInputObjectSchema } from './CountryCreateNestedOneWithoutCitiesInput.schema';
import { InstitutionCreateNestedManyWithoutCityInputObjectSchema } from './InstitutionCreateNestedManyWithoutCityInput.schema';
import { MedicalCenterCreateNestedManyWithoutCityInputObjectSchema } from './MedicalCenterCreateNestedManyWithoutCityInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CityCreateWithoutBeneficiaryEntitiesInput> = z
  .object({
    id: z.string(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
    isPublished: z.boolean().optional(),
    isSoftDeleted: z.boolean().optional(),
    arabic: z.string().optional().nullable(),
    english: z.string().optional().nullable(),
    name: z.string(),
    country: z.lazy(() => CountryCreateNestedOneWithoutCitiesInputObjectSchema),
    institutions: z
      .lazy(() => InstitutionCreateNestedManyWithoutCityInputObjectSchema)
      .optional(),
    medicalcenters: z
      .lazy(() => MedicalCenterCreateNestedManyWithoutCityInputObjectSchema)
      .optional(),
  })
  .strict();

export const CityCreateWithoutBeneficiaryEntitiesInputObjectSchema = Schema;
