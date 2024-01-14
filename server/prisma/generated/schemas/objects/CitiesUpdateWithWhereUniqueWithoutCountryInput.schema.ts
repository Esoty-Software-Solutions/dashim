import { z } from 'zod';
import { CitiesWhereUniqueInputObjectSchema } from './CitiesWhereUniqueInput.schema';
import { CitiesUpdateWithoutCountryInputObjectSchema } from './CitiesUpdateWithoutCountryInput.schema';
import { CitiesUncheckedUpdateWithoutCountryInputObjectSchema } from './CitiesUncheckedUpdateWithoutCountryInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CitiesUpdateWithWhereUniqueWithoutCountryInput> =
  z
    .object({
      where: z.lazy(() => CitiesWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => CitiesUpdateWithoutCountryInputObjectSchema),
        z.lazy(() => CitiesUncheckedUpdateWithoutCountryInputObjectSchema),
      ]),
    })
    .strict();

export const CitiesUpdateWithWhereUniqueWithoutCountryInputObjectSchema =
  Schema;
