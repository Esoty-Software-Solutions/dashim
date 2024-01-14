import { z } from 'zod';
import { CityUpdateInputObjectSchema } from './objects/CityUpdateInput.schema';
import { CityUncheckedUpdateInputObjectSchema } from './objects/CityUncheckedUpdateInput.schema';
import { CityWhereUniqueInputObjectSchema } from './objects/CityWhereUniqueInput.schema';

export const CityUpdateOneSchema = z.object({
  data: z.union([
    CityUpdateInputObjectSchema,
    CityUncheckedUpdateInputObjectSchema,
  ]),
  where: CityWhereUniqueInputObjectSchema,
});
