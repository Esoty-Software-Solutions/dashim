import { z } from 'zod';
import { InstitutionUncheckedCreateNestedManyWithoutCityInputObjectSchema } from './InstitutionUncheckedCreateNestedManyWithoutCityInput.schema';
import { BeneficiaryEntityUncheckedCreateNestedManyWithoutCityInputObjectSchema } from './BeneficiaryEntityUncheckedCreateNestedManyWithoutCityInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CityEnumUncheckedCreateWithoutMedicalcentersInput> =
  z
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
          () =>
            InstitutionUncheckedCreateNestedManyWithoutCityInputObjectSchema,
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

export const CityEnumUncheckedCreateWithoutMedicalcentersInputObjectSchema =
  Schema;
