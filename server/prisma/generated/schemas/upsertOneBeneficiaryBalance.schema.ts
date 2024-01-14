import { z } from 'zod';
import { BeneficiaryBalanceWhereUniqueInputObjectSchema } from './objects/BeneficiaryBalanceWhereUniqueInput.schema';
import { BeneficiaryBalanceCreateInputObjectSchema } from './objects/BeneficiaryBalanceCreateInput.schema';
import { BeneficiaryBalanceUncheckedCreateInputObjectSchema } from './objects/BeneficiaryBalanceUncheckedCreateInput.schema';
import { BeneficiaryBalanceUpdateInputObjectSchema } from './objects/BeneficiaryBalanceUpdateInput.schema';
import { BeneficiaryBalanceUncheckedUpdateInputObjectSchema } from './objects/BeneficiaryBalanceUncheckedUpdateInput.schema';

export const BeneficiaryBalanceUpsertSchema = z.object({
  where: BeneficiaryBalanceWhereUniqueInputObjectSchema,
  create: z.union([
    BeneficiaryBalanceCreateInputObjectSchema,
    BeneficiaryBalanceUncheckedCreateInputObjectSchema,
  ]),
  update: z.union([
    BeneficiaryBalanceUpdateInputObjectSchema,
    BeneficiaryBalanceUncheckedUpdateInputObjectSchema,
  ]),
});
