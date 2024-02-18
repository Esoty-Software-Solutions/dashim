import { z } from 'zod';
import { CityEnumUpdateWithoutInstitutionsInputObjectSchema } from './CityEnumUpdateWithoutInstitutionsInput.schema';
import { CityEnumUncheckedUpdateWithoutInstitutionsInputObjectSchema } from './CityEnumUncheckedUpdateWithoutInstitutionsInput.schema';
import { CityEnumCreateWithoutInstitutionsInputObjectSchema } from './CityEnumCreateWithoutInstitutionsInput.schema';
import { CityEnumUncheckedCreateWithoutInstitutionsInputObjectSchema } from './CityEnumUncheckedCreateWithoutInstitutionsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CityEnumUpsertWithoutInstitutionsInput> = z
  .object({
    update: z.union([
      z.lazy(() => CityEnumUpdateWithoutInstitutionsInputObjectSchema),
      z.lazy(() => CityEnumUncheckedUpdateWithoutInstitutionsInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => CityEnumCreateWithoutInstitutionsInputObjectSchema),
      z.lazy(() => CityEnumUncheckedCreateWithoutInstitutionsInputObjectSchema),
    ]),
  })
  .strict();

export const CityEnumUpsertWithoutInstitutionsInputObjectSchema = Schema;
