import { z } from 'zod';
import { CurrencyWhereUniqueInputObjectSchema } from './objects/CurrencyWhereUniqueInput.schema';
import { CurrencyCreateInputObjectSchema } from './objects/CurrencyCreateInput.schema';
import { CurrencyUncheckedCreateInputObjectSchema } from './objects/CurrencyUncheckedCreateInput.schema';
import { CurrencyUpdateInputObjectSchema } from './objects/CurrencyUpdateInput.schema';
import { CurrencyUncheckedUpdateInputObjectSchema } from './objects/CurrencyUncheckedUpdateInput.schema';

export const CurrencyUpsertSchema = z.object({
  where: CurrencyWhereUniqueInputObjectSchema,
  create: z.union([
    CurrencyCreateInputObjectSchema,
    CurrencyUncheckedCreateInputObjectSchema,
  ]),
  update: z.union([
    CurrencyUpdateInputObjectSchema,
    CurrencyUncheckedUpdateInputObjectSchema,
  ]),
});
