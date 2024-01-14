import { z } from 'zod';
import { CitiesCreateManyInputObjectSchema } from './objects/CitiesCreateManyInput.schema';

export const CitiesCreateManySchema = z.object({
  data: z.union([
    CitiesCreateManyInputObjectSchema,
    z.array(CitiesCreateManyInputObjectSchema),
  ]),
  skipDuplicates: z.boolean().optional(),
});
