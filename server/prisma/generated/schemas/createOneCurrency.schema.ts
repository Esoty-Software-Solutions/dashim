import { z } from 'zod';
import { CurrencyCreateInputObjectSchema } from './objects/CurrencyCreateInput.schema';
import { CurrencyUncheckedCreateInputObjectSchema } from './objects/CurrencyUncheckedCreateInput.schema';

export const CurrencyCreateOneSchema = z.object({
  data: z.union([
    CurrencyCreateInputObjectSchema,
    CurrencyUncheckedCreateInputObjectSchema,
  ]),
});
