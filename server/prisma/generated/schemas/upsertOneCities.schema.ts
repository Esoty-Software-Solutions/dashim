import { z } from 'zod';
import { CitiesWhereUniqueInputObjectSchema } from './objects/CitiesWhereUniqueInput.schema';
import { CitiesCreateInputObjectSchema } from './objects/CitiesCreateInput.schema';
import { CitiesUncheckedCreateInputObjectSchema } from './objects/CitiesUncheckedCreateInput.schema';
import { CitiesUpdateInputObjectSchema } from './objects/CitiesUpdateInput.schema';
import { CitiesUncheckedUpdateInputObjectSchema } from './objects/CitiesUncheckedUpdateInput.schema';

export const CitiesUpsertSchema = z.object({
  where: CitiesWhereUniqueInputObjectSchema,
  create: z.union([
    CitiesCreateInputObjectSchema,
    CitiesUncheckedCreateInputObjectSchema,
  ]),
  update: z.union([
    CitiesUpdateInputObjectSchema,
    CitiesUncheckedUpdateInputObjectSchema,
  ]),
});
