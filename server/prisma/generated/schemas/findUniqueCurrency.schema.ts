import { z } from 'zod';
import { CurrencyWhereUniqueInputObjectSchema } from './objects/CurrencyWhereUniqueInput.schema';

export const CurrencyFindUniqueSchema = z.object({
  where: CurrencyWhereUniqueInputObjectSchema,
});
