import { z } from 'zod';
import { BeneficiaryOrderByWithRelationInputObjectSchema } from './objects/BeneficiaryOrderByWithRelationInput.schema';
import { BeneficiaryWhereInputObjectSchema } from './objects/BeneficiaryWhereInput.schema';
import { BeneficiaryWhereUniqueInputObjectSchema } from './objects/BeneficiaryWhereUniqueInput.schema';
import { BeneficiaryScalarFieldEnumSchema } from './enums/BeneficiaryScalarFieldEnum.schema';

export const BeneficiaryFindManySchema = z.object({
  orderBy: z
    .union([
      BeneficiaryOrderByWithRelationInputObjectSchema,
      BeneficiaryOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: BeneficiaryWhereInputObjectSchema.optional(),
  cursor: BeneficiaryWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.array(BeneficiaryScalarFieldEnumSchema).optional(),
});
