import { z } from 'zod';
import { InstitutionCreateNestedManyWithoutCityInputObjectSchema } from './InstitutionCreateNestedManyWithoutCityInput.schema';
import { MedicalCenterCreateNestedManyWithoutCityInputObjectSchema } from './MedicalCenterCreateNestedManyWithoutCityInput.schema';
import { BeneficiaryEntityCreateNestedManyWithoutCityInputObjectSchema } from './BeneficiaryEntityCreateNestedManyWithoutCityInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CityCreateWithoutCountryInput> = z
  .object({
    id: z.string(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
    isPublished: z.boolean().optional(),
    isSoftDeleted: z.boolean().optional(),
    arabic: z.string().optional().nullable(),
    english: z.string().optional().nullable(),
    name: z.string(),
    institutions: z
      .lazy(() => InstitutionCreateNestedManyWithoutCityInputObjectSchema)
      .optional(),
    medicalcenters: z
      .lazy(() => MedicalCenterCreateNestedManyWithoutCityInputObjectSchema)
      .optional(),
    beneficiaryEntities: z
      .lazy(() => BeneficiaryEntityCreateNestedManyWithoutCityInputObjectSchema)
      .optional(),
  })
  .strict();

export const CityCreateWithoutCountryInputObjectSchema = Schema;
