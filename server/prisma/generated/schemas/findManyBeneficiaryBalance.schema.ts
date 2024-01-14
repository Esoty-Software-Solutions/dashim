import { z } from 'zod';
import { BeneficiaryBalanceOrderByWithRelationInputObjectSchema } from './objects/BeneficiaryBalanceOrderByWithRelationInput.schema';
import { BeneficiaryBalanceWhereInputObjectSchema } from './objects/BeneficiaryBalanceWhereInput.schema';
import { BeneficiaryBalanceWhereUniqueInputObjectSchema } from './objects/BeneficiaryBalanceWhereUniqueInput.schema';
import { BeneficiaryBalanceScalarFieldEnumSchema } from './enums/BeneficiaryBalanceScalarFieldEnum.schema';

export const BeneficiaryBalanceFindManySchema = z.object({
  orderBy: z
    .union([
      BeneficiaryBalanceOrderByWithRelationInputObjectSchema,
      BeneficiaryBalanceOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: BeneficiaryBalanceWhereInputObjectSchema.optional(),
  cursor: BeneficiaryBalanceWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.array(BeneficiaryBalanceScalarFieldEnumSchema).optional(),
});
