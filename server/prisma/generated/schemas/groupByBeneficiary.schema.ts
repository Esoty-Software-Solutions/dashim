import { z } from 'zod';
import { BeneficiaryWhereInputObjectSchema } from './objects/BeneficiaryWhereInput.schema';
import { BeneficiaryOrderByWithAggregationInputObjectSchema } from './objects/BeneficiaryOrderByWithAggregationInput.schema';
import { BeneficiaryScalarWhereWithAggregatesInputObjectSchema } from './objects/BeneficiaryScalarWhereWithAggregatesInput.schema';
import { BeneficiaryScalarFieldEnumSchema } from './enums/BeneficiaryScalarFieldEnum.schema';

export const BeneficiaryGroupBySchema = z.object({
  where: BeneficiaryWhereInputObjectSchema.optional(),
  orderBy: z
    .union([
      BeneficiaryOrderByWithAggregationInputObjectSchema,
      BeneficiaryOrderByWithAggregationInputObjectSchema.array(),
    ])
    .optional(),
  having: BeneficiaryScalarWhereWithAggregatesInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  by: z.array(BeneficiaryScalarFieldEnumSchema),
});
