import { z } from 'zod';
import { BeneficiaryBalanceWhereUniqueInputObjectSchema } from './objects/BeneficiaryBalanceWhereUniqueInput.schema';

export const BeneficiaryBalanceDeleteOneSchema = z.object({
  where: BeneficiaryBalanceWhereUniqueInputObjectSchema,
});
