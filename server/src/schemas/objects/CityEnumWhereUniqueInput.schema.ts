import { z } from 'zod';
import { CityEnumNameCountryIdCompoundUniqueInputObjectSchema } from './CityEnumNameCountryIdCompoundUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CityEnumWhereUniqueInput> = z
  .object({
    id: z.string().optional(),
    name_countryId: z
      .lazy(() => CityEnumNameCountryIdCompoundUniqueInputObjectSchema)
      .optional(),
  })
  .strict();

export const CityEnumWhereUniqueInputObjectSchema = Schema;
