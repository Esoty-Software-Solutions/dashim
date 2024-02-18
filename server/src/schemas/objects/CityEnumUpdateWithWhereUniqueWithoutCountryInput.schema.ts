import { z } from 'zod';
import { CityEnumWhereUniqueInputObjectSchema } from './CityEnumWhereUniqueInput.schema';
import { CityEnumUpdateWithoutCountryInputObjectSchema } from './CityEnumUpdateWithoutCountryInput.schema';
import { CityEnumUncheckedUpdateWithoutCountryInputObjectSchema } from './CityEnumUncheckedUpdateWithoutCountryInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CityEnumUpdateWithWhereUniqueWithoutCountryInput> =
  z
    .object({
      where: z.lazy(() => CityEnumWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => CityEnumUpdateWithoutCountryInputObjectSchema),
        z.lazy(() => CityEnumUncheckedUpdateWithoutCountryInputObjectSchema),
      ]),
    })
    .strict();

export const CityEnumUpdateWithWhereUniqueWithoutCountryInputObjectSchema =
  Schema;
