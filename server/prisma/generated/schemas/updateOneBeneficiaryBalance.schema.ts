import { z } from 'zod';
import { BeneficiaryBalanceUpdateInputObjectSchema } from './objects/BeneficiaryBalanceUpdateInput.schema';
import { BeneficiaryBalanceUncheckedUpdateInputObjectSchema } from './objects/BeneficiaryBalanceUncheckedUpdateInput.schema';
import { BeneficiaryBalanceWhereUniqueInputObjectSchema } from './objects/BeneficiaryBalanceWhereUniqueInput.schema';

export const BeneficiaryBalanceUpdateOneSchema = z.object({
  data: z.union([
    BeneficiaryBalanceUpdateInputObjectSchema,
    BeneficiaryBalanceUncheckedUpdateInputObjectSchema,
  ]),
  where: BeneficiaryBalanceWhereUniqueInputObjectSchema,
});
