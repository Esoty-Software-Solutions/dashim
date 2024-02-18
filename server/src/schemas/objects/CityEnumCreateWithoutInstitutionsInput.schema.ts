import { z } from 'zod';
import { CountryEnumCreateNestedOneWithoutCitiesInputObjectSchema } from './CountryEnumCreateNestedOneWithoutCitiesInput.schema';
import { MedicalCenterCreateNestedManyWithoutCityInputObjectSchema } from './MedicalCenterCreateNestedManyWithoutCityInput.schema';
import { BeneficiaryEntityCreateNestedManyWithoutCityInputObjectSchema } from './BeneficiaryEntityCreateNestedManyWithoutCityInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CityEnumCreateWithoutInstitutionsInput> = z
  .object({
    id: z.string(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
    isPublished: z.boolean().optional(),
    isSoftDeleted: z.boolean().optional(),
    arabic: z.string().optional().nullable(),
    english: z.string().optional().nullable(),
    name: z.string(),
    country: z.lazy(
      () => CountryEnumCreateNestedOneWithoutCitiesInputObjectSchema,
    ),
    medicalcenters: z
      .lazy(() => MedicalCenterCreateNestedManyWithoutCityInputObjectSchema)
      .optional(),
    beneficiaryEntities: z
      .lazy(() => BeneficiaryEntityCreateNestedManyWithoutCityInputObjectSchema)
      .optional(),
  })
  .strict();

export const CityEnumCreateWithoutInstitutionsInputObjectSchema = Schema;
