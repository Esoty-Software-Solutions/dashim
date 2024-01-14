import { z } from 'zod';
import { CitiesCreateManyCountryInputObjectSchema } from './CitiesCreateManyCountryInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CitiesCreateManyCountryInputEnvelope> = z
  .object({
    data: z.union([
      z.lazy(() => CitiesCreateManyCountryInputObjectSchema),
      z.lazy(() => CitiesCreateManyCountryInputObjectSchema).array(),
    ]),
    skipDuplicates: z.boolean().optional(),
  })
  .strict();

export const CitiesCreateManyCountryInputEnvelopeObjectSchema = Schema;
