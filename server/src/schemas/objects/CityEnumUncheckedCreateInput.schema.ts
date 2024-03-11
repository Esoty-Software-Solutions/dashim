import { z } from 'zod';
import { InstitutionUncheckedCreateNestedManyWithoutCityInputObjectSchema } from './InstitutionUncheckedCreateNestedManyWithoutCityInput.schema';
import { MedicalCenterUncheckedCreateNestedManyWithoutCityInputObjectSchema } from './MedicalCenterUncheckedCreateNestedManyWithoutCityInput.schema';
import { BeneficiaryEntityUncheckedCreateNestedManyWithoutCityInputObjectSchema } from './BeneficiaryEntityUncheckedCreateNestedManyWithoutCityInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CityEnumUncheckedCreateInput> = z
  .object({
    id: z.string(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
    isPublished: z.boolean().optional(),
    isSoftDeleted: z.boolean().optional(),
    arabic: z.string().optional().nullable(),
    english: z.string().optional().nullable(),
    name: z.string(),
    countryId: z.string(),
    institutions: z
      .lazy(
        () => InstitutionUncheckedCreateNestedManyWithoutCityInputObjectSchema,
      )
      .optional(),
    medicalcenters: z
      .lazy(
        () =>
          MedicalCenterUncheckedCreateNestedManyWithoutCityInputObjectSchema,
      )
      .optional(),
    beneficiaryEntities: z
      .lazy(
        () =>
          BeneficiaryEntityUncheckedCreateNestedManyWithoutCityInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const CityEnumUncheckedCreateInputObjectSchema = Schema;
