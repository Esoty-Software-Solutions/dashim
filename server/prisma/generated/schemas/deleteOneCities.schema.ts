import { z } from 'zod';
import { CitiesWhereUniqueInputObjectSchema } from './objects/CitiesWhereUniqueInput.schema';

export const CitiesDeleteOneSchema = z.object({
  where: CitiesWhereUniqueInputObjectSchema,
});
