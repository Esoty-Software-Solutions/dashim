import { z } from 'zod';
import { CitiesUpdateInputObjectSchema } from './objects/CitiesUpdateInput.schema';
import { CitiesUncheckedUpdateInputObjectSchema } from './objects/CitiesUncheckedUpdateInput.schema';
import { CitiesWhereUniqueInputObjectSchema } from './objects/CitiesWhereUniqueInput.schema';

export const CitiesUpdateOneSchema = z.object({
  data: z.union([
    CitiesUpdateInputObjectSchema,
    CitiesUncheckedUpdateInputObjectSchema,
  ]),
  where: CitiesWhereUniqueInputObjectSchema,
});
