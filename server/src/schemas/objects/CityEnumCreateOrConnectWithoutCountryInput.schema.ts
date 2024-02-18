import { z } from 'zod';
import { CityEnumWhereUniqueInputObjectSchema } from './CityEnumWhereUniqueInput.schema';
import { CityEnumCreateWithoutCountryInputObjectSchema } from './CityEnumCreateWithoutCountryInput.schema';
import { CityEnumUncheckedCreateWithoutCountryInputObjectSchema } from './CityEnumUncheckedCreateWithoutCountryInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CityEnumCreateOrConnectWithoutCountryInput> = z
  .object({
    where: z.lazy(() => CityEnumWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => CityEnumCreateWithoutCountryInputObjectSchema),
      z.lazy(() => CityEnumUncheckedCreateWithoutCountryInputObjectSchema),
    ]),
  })
  .strict();

export const CityEnumCreateOrConnectWithoutCountryInputObjectSchema = Schema;
