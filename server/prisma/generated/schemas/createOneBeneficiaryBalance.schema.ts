import { z } from 'zod';
import { BeneficiaryBalanceCreateInputObjectSchema } from './objects/BeneficiaryBalanceCreateInput.schema';
import { BeneficiaryBalanceUncheckedCreateInputObjectSchema } from './objects/BeneficiaryBalanceUncheckedCreateInput.schema';

export const BeneficiaryBalanceCreateOneSchema = z.object({
  data: z.union([
    BeneficiaryBalanceCreateInputObjectSchema,
    BeneficiaryBalanceUncheckedCreateInputObjectSchema,
  ]),
});
