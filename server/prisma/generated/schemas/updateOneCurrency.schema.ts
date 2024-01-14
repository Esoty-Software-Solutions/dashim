import { z } from 'zod';
import { CurrencyUpdateInputObjectSchema } from './objects/CurrencyUpdateInput.schema';
import { CurrencyUncheckedUpdateInputObjectSchema } from './objects/CurrencyUncheckedUpdateInput.schema';
import { CurrencyWhereUniqueInputObjectSchema } from './objects/CurrencyWhereUniqueInput.schema';

export const CurrencyUpdateOneSchema = z.object({
  data: z.union([
    CurrencyUpdateInputObjectSchema,
    CurrencyUncheckedUpdateInputObjectSchema,
  ]),
  where: CurrencyWhereUniqueInputObjectSchema,
});
