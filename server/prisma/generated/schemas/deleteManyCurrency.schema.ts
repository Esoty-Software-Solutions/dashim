import { z } from 'zod';
import { CurrencyWhereInputObjectSchema } from './objects/CurrencyWhereInput.schema';

export const CurrencyDeleteManySchema = z.object({
  where: CurrencyWhereInputObjectSchema.optional(),
});
