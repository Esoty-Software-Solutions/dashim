import { z } from 'zod';
import { CityEnumCreateManyCountryInputObjectSchema } from './CityEnumCreateManyCountryInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CityEnumCreateManyCountryInputEnvelope> = z
  .object({
    data: z.union([
      z.lazy(() => CityEnumCreateManyCountryInputObjectSchema),
      z.lazy(() => CityEnumCreateManyCountryInputObjectSchema).array(),
    ]),
    skipDuplicates: z.boolean().optional(),
  })
  .strict();

export const CityEnumCreateManyCountryInputEnvelopeObjectSchema = Schema;
