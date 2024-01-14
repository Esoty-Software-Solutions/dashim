import { z } from 'zod';
import { CitiesWhereUniqueInputObjectSchema } from './objects/CitiesWhereUniqueInput.schema';

export const CitiesFindUniqueSchema = z.object({
  where: CitiesWhereUniqueInputObjectSchema,
});
