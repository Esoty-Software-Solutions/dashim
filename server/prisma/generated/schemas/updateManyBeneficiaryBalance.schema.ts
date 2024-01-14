import { z } from 'zod';
import { BeneficiaryBalanceUpdateManyMutationInputObjectSchema } from './objects/BeneficiaryBalanceUpdateManyMutationInput.schema';
import { BeneficiaryBalanceWhereInputObjectSchema } from './objects/BeneficiaryBalanceWhereInput.schema';

export const BeneficiaryBalanceUpdateManySchema = z.object({
  data: BeneficiaryBalanceUpdateManyMutationInputObjectSchema,
  where: BeneficiaryBalanceWhereInputObjectSchema.optional(),
});
