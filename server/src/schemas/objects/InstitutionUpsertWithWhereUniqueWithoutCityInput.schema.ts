import { z } from 'zod';
import { InstitutionWhereUniqueInputObjectSchema } from './InstitutionWhereUniqueInput.schema';
import { InstitutionUpdateWithoutCityInputObjectSchema } from './InstitutionUpdateWithoutCityInput.schema';
import { InstitutionUncheckedUpdateWithoutCityInputObjectSchema } from './InstitutionUncheckedUpdateWithoutCityInput.schema';
import { InstitutionCreateWithoutCityInputObjectSchema } from './InstitutionCreateWithoutCityInput.schema';
import { InstitutionUncheckedCreateWithoutCityInputObjectSchema } from './InstitutionUncheckedCreateWithoutCityInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.InstitutionUpsertWithWhereUniqueWithoutCityInput> =
  z
    .object({
      where: z.lazy(() => InstitutionWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => InstitutionUpdateWithoutCityInputObjectSchema),
        z.lazy(() => InstitutionUncheckedUpdateWithoutCityInputObjectSchema),
      ]),
      create: z.union([
        z.lazy(() => InstitutionCreateWithoutCityInputObjectSchema),
        z.lazy(() => InstitutionUncheckedCreateWithoutCityInputObjectSchema),
      ]),
    })
    .strict();

export const InstitutionUpsertWithWhereUniqueWithoutCityInputObjectSchema =
  Schema;
