import { z } from 'zod';
import { CityWhereUniqueInputObjectSchema } from './objects/CityWhereUniqueInput.schema';
import { CityCreateInputObjectSchema } from './objects/CityCreateInput.schema';
import { CityUncheckedCreateInputObjectSchema } from './objects/CityUncheckedCreateInput.schema';
import { CityUpdateInputObjectSchema } from './objects/CityUpdateInput.schema';
import { CityUncheckedUpdateInputObjectSchema } from './objects/CityUncheckedUpdateInput.schema';

export const CityUpsertSchema = z.object({
  where: CityWhereUniqueInputObjectSchema,
  create: z.union([
    CityCreateInputObjectSchema,
    CityUncheckedCreateInputObjectSchema,
  ]),
  update: z.union([
    CityUpdateInputObjectSchema,
    CityUncheckedUpdateInputObjectSchema,
  ]),
});
