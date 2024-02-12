import { z } from 'zod';
import { CityUpdateWithoutInstitutionsInputObjectSchema } from './CityUpdateWithoutInstitutionsInput.schema';
import { CityUncheckedUpdateWithoutInstitutionsInputObjectSchema } from './CityUncheckedUpdateWithoutInstitutionsInput.schema';
import { CityCreateWithoutInstitutionsInputObjectSchema } from './CityCreateWithoutInstitutionsInput.schema';
import { CityUncheckedCreateWithoutInstitutionsInputObjectSchema } from './CityUncheckedCreateWithoutInstitutionsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CityUpsertWithoutInstitutionsInput> = z
  .object({
    update: z.union([
      z.lazy(() => CityUpdateWithoutInstitutionsInputObjectSchema),
      z.lazy(() => CityUncheckedUpdateWithoutInstitutionsInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => CityCreateWithoutInstitutionsInputObjectSchema),
      z.lazy(() => CityUncheckedCreateWithoutInstitutionsInputObjectSchema),
    ]),
  })
  .strict();

export const CityUpsertWithoutInstitutionsInputObjectSchema = Schema;
