import { z } from 'zod';
import { CurrencyUpdateManyMutationInputObjectSchema } from './objects/CurrencyUpdateManyMutationInput.schema';
import { CurrencyWhereInputObjectSchema } from './objects/CurrencyWhereInput.schema';

export const CurrencyUpdateManySchema = z.object({
  data: CurrencyUpdateManyMutationInputObjectSchema,
  where: CurrencyWhereInputObjectSchema.optional(),
});
