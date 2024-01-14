import { z } from 'zod';
import { CurrencyOrderByWithRelationInputObjectSchema } from './objects/CurrencyOrderByWithRelationInput.schema';
import { CurrencyWhereInputObjectSchema } from './objects/CurrencyWhereInput.schema';
import { CurrencyWhereUniqueInputObjectSchema } from './objects/CurrencyWhereUniqueInput.schema';
import { CurrencyCountAggregateInputObjectSchema } from './objects/CurrencyCountAggregateInput.schema';
import { CurrencyMinAggregateInputObjectSchema } from './objects/CurrencyMinAggregateInput.schema';
import { CurrencyMaxAggregateInputObjectSchema } from './objects/CurrencyMaxAggregateInput.schema';
import { CurrencyAvgAggregateInputObjectSchema } from './objects/CurrencyAvgAggregateInput.schema';
import { CurrencySumAggregateInputObjectSchema } from './objects/CurrencySumAggregateInput.schema';

export const CurrencyAggregateSchema = z.object({
  orderBy: z
    .union([
      CurrencyOrderByWithRelationInputObjectSchema,
      CurrencyOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: CurrencyWhereInputObjectSchema.optional(),
  cursor: CurrencyWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  _count: z
    .union([z.literal(true), CurrencyCountAggregateInputObjectSchema])
    .optional(),
  _min: CurrencyMinAggregateInputObjectSchema.optional(),
  _max: CurrencyMaxAggregateInputObjectSchema.optional(),
  _avg: CurrencyAvgAggregateInputObjectSchema.optional(),
  _sum: CurrencySumAggregateInputObjectSchema.optional(),
});
