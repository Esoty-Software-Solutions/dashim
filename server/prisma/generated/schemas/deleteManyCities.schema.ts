import { z } from 'zod';
import { CitiesWhereInputObjectSchema } from './objects/CitiesWhereInput.schema';

export const CitiesDeleteManySchema = z.object({
  where: CitiesWhereInputObjectSchema.optional(),
});
