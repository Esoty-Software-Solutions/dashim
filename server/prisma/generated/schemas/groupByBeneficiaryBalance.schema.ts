import { z } from 'zod';
import { BeneficiaryBalanceWhereInputObjectSchema } from './objects/BeneficiaryBalanceWhereInput.schema';
import { BeneficiaryBalanceOrderByWithAggregationInputObjectSchema } from './objects/BeneficiaryBalanceOrderByWithAggregationInput.schema';
import { BeneficiaryBalanceScalarWhereWithAggregatesInputObjectSchema } from './objects/BeneficiaryBalanceScalarWhereWithAggregatesInput.schema';
import { BeneficiaryBalanceScalarFieldEnumSchema } from './enums/BeneficiaryBalanceScalarFieldEnum.schema';

export const BeneficiaryBalanceGroupBySchema = z.object({
  where: BeneficiaryBalanceWhereInputObjectSchema.optional(),
  orderBy: z
    .union([
      BeneficiaryBalanceOrderByWithAggregationInputObjectSchema,
      BeneficiaryBalanceOrderByWithAggregationInputObjectSchema.array(),
    ])
    .optional(),
  having:
    BeneficiaryBalanceScalarWhereWithAggregatesInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  by: z.array(BeneficiaryBalanceScalarFieldEnumSchema),
});
