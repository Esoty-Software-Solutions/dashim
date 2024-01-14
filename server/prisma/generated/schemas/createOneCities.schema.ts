import { z } from 'zod';
import { CitiesCreateInputObjectSchema } from './objects/CitiesCreateInput.schema';
import { CitiesUncheckedCreateInputObjectSchema } from './objects/CitiesUncheckedCreateInput.schema';

export const CitiesCreateOneSchema = z.object({
  data: z.union([
    CitiesCreateInputObjectSchema,
    CitiesUncheckedCreateInputObjectSchema,
  ]),
});
