import { z } from 'zod';
import { CurrencyWhereInputObjectSchema } from './objects/CurrencyWhereInput.schema';
import { CurrencyOrderByWithAggregationInputObjectSchema } from './objects/CurrencyOrderByWithAggregationInput.schema';
import { CurrencyScalarWhereWithAggregatesInputObjectSchema } from './objects/CurrencyScalarWhereWithAggregatesInput.schema';
import { CurrencyScalarFieldEnumSchema } from './enums/CurrencyScalarFieldEnum.schema';

export const CurrencyGroupBySchema = z.object({
  where: CurrencyWhereInputObjectSchema.optional(),
  orderBy: z
    .union([
      CurrencyOrderByWithAggregationInputObjectSchema,
      CurrencyOrderByWithAggregationInputObjectSchema.array(),
    ])
    .optional(),
  having: CurrencyScalarWhereWithAggregatesInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  by: z.array(CurrencyScalarFieldEnumSchema),
});
