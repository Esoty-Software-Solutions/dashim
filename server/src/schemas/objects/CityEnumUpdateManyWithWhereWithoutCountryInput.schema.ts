import { z } from 'zod';
import { CityEnumScalarWhereInputObjectSchema } from './CityEnumScalarWhereInput.schema';
import { CityEnumUpdateManyMutationInputObjectSchema } from './CityEnumUpdateManyMutationInput.schema';
import { CityEnumUncheckedUpdateManyWithoutCitiesInputObjectSchema } from './CityEnumUncheckedUpdateManyWithoutCitiesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CityEnumUpdateManyWithWhereWithoutCountryInput> =
  z
    .object({
      where: z.lazy(() => CityEnumScalarWhereInputObjectSchema),
      data: z.union([
        z.lazy(() => CityEnumUpdateManyMutationInputObjectSchema),
        z.lazy(() => CityEnumUncheckedUpdateManyWithoutCitiesInputObjectSchema),
      ]),
    })
    .strict();

export const CityEnumUpdateManyWithWhereWithoutCountryInputObjectSchema =
  Schema;
