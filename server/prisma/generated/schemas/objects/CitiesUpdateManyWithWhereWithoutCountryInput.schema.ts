import { z } from 'zod';
import { CitiesScalarWhereInputObjectSchema } from './CitiesScalarWhereInput.schema';
import { CitiesUpdateManyMutationInputObjectSchema } from './CitiesUpdateManyMutationInput.schema';
import { CitiesUncheckedUpdateManyWithoutCitiesInputObjectSchema } from './CitiesUncheckedUpdateManyWithoutCitiesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CitiesUpdateManyWithWhereWithoutCountryInput> = z
  .object({
    where: z.lazy(() => CitiesScalarWhereInputObjectSchema),
    data: z.union([
      z.lazy(() => CitiesUpdateManyMutationInputObjectSchema),
      z.lazy(() => CitiesUncheckedUpdateManyWithoutCitiesInputObjectSchema),
    ]),
  })
  .strict();

export const CitiesUpdateManyWithWhereWithoutCountryInputObjectSchema = Schema;
