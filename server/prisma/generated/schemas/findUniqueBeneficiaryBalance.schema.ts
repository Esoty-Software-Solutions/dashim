import { z } from 'zod';
import { BeneficiaryBalanceWhereUniqueInputObjectSchema } from './objects/BeneficiaryBalanceWhereUniqueInput.schema';

export const BeneficiaryBalanceFindUniqueSchema = z.object({
  where: BeneficiaryBalanceWhereUniqueInputObjectSchema,
});
