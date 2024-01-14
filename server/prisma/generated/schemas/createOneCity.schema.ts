import { z } from 'zod';
import { CityCreateInputObjectSchema } from './objects/CityCreateInput.schema';
import { CityUncheckedCreateInputObjectSchema } from './objects/CityUncheckedCreateInput.schema';

export const CityCreateOneSchema = z.object({
  data: z.union([
    CityCreateInputObjectSchema,
    CityUncheckedCreateInputObjectSchema,
  ]),
});
