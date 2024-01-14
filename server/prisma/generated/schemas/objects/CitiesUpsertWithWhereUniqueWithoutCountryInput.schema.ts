import { z } from 'zod';
import { CitiesWhereUniqueInputObjectSchema } from './CitiesWhereUniqueInput.schema';
import { CitiesUpdateWithoutCountryInputObjectSchema } from './CitiesUpdateWithoutCountryInput.schema';
import { CitiesUncheckedUpdateWithoutCountryInputObjectSchema } from './CitiesUncheckedUpdateWithoutCountryInput.schema';
import { CitiesCreateWithoutCountryInputObjectSchema } from './CitiesCreateWithoutCountryInput.schema';
import { CitiesUncheckedCreateWithoutCountryInputObjectSchema } from './CitiesUncheckedCreateWithoutCountryInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CitiesUpsertWithWhereUniqueWithoutCountryInput> =
  z
    .object({
      where: z.lazy(() => CitiesWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => CitiesUpdateWithoutCountryInputObjectSchema),
        z.lazy(() => CitiesUncheckedUpdateWithoutCountryInputObjectSchema),
      ]),
      create: z.union([
        z.lazy(() => CitiesCreateWithoutCountryInputObjectSchema),
        z.lazy(() => CitiesUncheckedCreateWithoutCountryInputObjectSchema),
      ]),
    })
    .strict();

export const CitiesUpsertWithWhereUniqueWithoutCountryInputObjectSchema =
  Schema;
