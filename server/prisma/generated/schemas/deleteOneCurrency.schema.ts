import { z } from 'zod';
import { CurrencyWhereUniqueInputObjectSchema } from './objects/CurrencyWhereUniqueInput.schema';

export const CurrencyDeleteOneSchema = z.object({
  where: CurrencyWhereUniqueInputObjectSchema,
});
