import { z } from 'zod';
import { InstitutionWhereUniqueInputObjectSchema } from './InstitutionWhereUniqueInput.schema';
import { InstitutionCreateWithoutCityInputObjectSchema } from './InstitutionCreateWithoutCityInput.schema';
import { InstitutionUncheckedCreateWithoutCityInputObjectSchema } from './InstitutionUncheckedCreateWithoutCityInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.InstitutionCreateOrConnectWithoutCityInput> = z
  .object({
    where: z.lazy(() => InstitutionWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => InstitutionCreateWithoutCityInputObjectSchema),
      z.lazy(() => InstitutionUncheckedCreateWithoutCityInputObjectSchema),
    ]),
  })
  .strict();

export const InstitutionCreateOrConnectWithoutCityInputObjectSchema = Schema;
