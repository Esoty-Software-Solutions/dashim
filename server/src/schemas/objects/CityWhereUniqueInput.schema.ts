import { z } from 'zod';
import { CityNameCountryIdCompoundUniqueInputObjectSchema } from './CityNameCountryIdCompoundUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CityWhereUniqueInput> = z
  .object({
    id: z.string().optional(),
    name_countryId: z
      .lazy(() => CityNameCountryIdCompoundUniqueInputObjectSchema)
      .optional(),
  })
  .strict();

export const CityWhereUniqueInputObjectSchema = Schema;
