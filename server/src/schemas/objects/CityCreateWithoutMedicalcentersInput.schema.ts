import { z } from 'zod';
import { CountryCreateNestedOneWithoutCitiesInputObjectSchema } from './CountryCreateNestedOneWithoutCitiesInput.schema';
import { InstitutionCreateNestedManyWithoutCityInputObjectSchema } from './InstitutionCreateNestedManyWithoutCityInput.schema';
import { BeneficiaryEntityCreateNestedManyWithoutCityInputObjectSchema } from './BeneficiaryEntityCreateNestedManyWithoutCityInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CityCreateWithoutMedicalcentersInput> = z
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
    beneficiaryEntities: z
      .lazy(() => BeneficiaryEntityCreateNestedManyWithoutCityInputObjectSchema)
      .optional(),
  })
  .strict();

export const CityCreateWithoutMedicalcentersInputObjectSchema = Schema;