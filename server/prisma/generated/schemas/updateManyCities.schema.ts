import { z } from 'zod';
import { CitiesUpdateManyMutationInputObjectSchema } from './objects/CitiesUpdateManyMutationInput.schema';
import { CitiesWhereInputObjectSchema } from './objects/CitiesWhereInput.schema';

export const CitiesUpdateManySchema = z.object({
  data: CitiesUpdateManyMutationInputObjectSchema,
  where: CitiesWhereInputObjectSchema.optional(),
});
