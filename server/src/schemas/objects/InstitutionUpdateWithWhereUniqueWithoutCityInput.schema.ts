import { z } from 'zod';
import { InstitutionWhereUniqueInputObjectSchema } from './InstitutionWhereUniqueInput.schema';
import { InstitutionUpdateWithoutCityInputObjectSchema } from './InstitutionUpdateWithoutCityInput.schema';
import { InstitutionUncheckedUpdateWithoutCityInputObjectSchema } from './InstitutionUncheckedUpdateWithoutCityInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.InstitutionUpdateWithWhereUniqueWithoutCityInput> =
  z
    .object({
      where: z.lazy(() => InstitutionWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => InstitutionUpdateWithoutCityInputObjectSchema),
        z.lazy(() => InstitutionUncheckedUpdateWithoutCityInputObjectSchema),
      ]),
    })
    .strict();

export const InstitutionUpdateWithWhereUniqueWithoutCityInputObjectSchema =
  Schema;
