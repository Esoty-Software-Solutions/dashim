import { z } from 'zod';
import { CurrencyOrderByWithRelationInputObjectSchema } from './objects/CurrencyOrderByWithRelationInput.schema';
import { CurrencyWhereInputObjectSchema } from './objects/CurrencyWhereInput.schema';
import { CurrencyWhereUniqueInputObjectSchema } from './objects/CurrencyWhereUniqueInput.schema';
import { CurrencyScalarFieldEnumSchema } from './enums/CurrencyScalarFieldEnum.schema';

export const CurrencyFindFirstSchema = z.object({
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
  distinct: z.array(CurrencyScalarFieldEnumSchema).optional(),
});
