import { z } from 'zod';
import { CitiesWhereUniqueInputObjectSchema } from './CitiesWhereUniqueInput.schema';
import { CitiesCreateWithoutCountryInputObjectSchema } from './CitiesCreateWithoutCountryInput.schema';
import { CitiesUncheckedCreateWithoutCountryInputObjectSchema } from './CitiesUncheckedCreateWithoutCountryInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CitiesCreateOrConnectWithoutCountryInput> = z
  .object({
    where: z.lazy(() => CitiesWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => CitiesCreateWithoutCountryInputObjectSchema),
      z.lazy(() => CitiesUncheckedCreateWithoutCountryInputObjectSchema),
    ]),
  })
  .strict();

export const CitiesCreateOrConnectWithoutCountryInputObjectSchema = Schema;
