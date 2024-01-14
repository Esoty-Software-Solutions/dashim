import { z } from 'zod';
import { CurrencyCreateManyInputObjectSchema } from './objects/CurrencyCreateManyInput.schema';

export const CurrencyCreateManySchema = z.object({
  data: z.union([
    CurrencyCreateManyInputObjectSchema,
    z.array(CurrencyCreateManyInputObjectSchema),
  ]),
  skipDuplicates: z.boolean().optional(),
});
