import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CityNameCountryIdCompoundUniqueInput> = z
  .object({
    name: z.string(),
    countryId: z.string(),
  })
  .strict();

export const CityNameCountryIdCompoundUniqueInputObjectSchema = Schema;
