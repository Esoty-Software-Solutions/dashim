import { z } from 'zod';
import { CityWhereUniqueInputObjectSchema } from './CityWhereUniqueInput.schema';
import { CityCreateWithoutInstitutionsInputObjectSchema } from './CityCreateWithoutInstitutionsInput.schema';
import { CityUncheckedCreateWithoutInstitutionsInputObjectSchema } from './CityUncheckedCreateWithoutInstitutionsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CityCreateOrConnectWithoutInstitutionsInput> = z
  .object({
    where: z.lazy(() => CityWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => CityCreateWithoutInstitutionsInputObjectSchema),
      z.lazy(() => CityUncheckedCreateWithoutInstitutionsInputObjectSchema),
    ]),
  })
  .strict();

export const CityCreateOrConnectWithoutInstitutionsInputObjectSchema = Schema;
