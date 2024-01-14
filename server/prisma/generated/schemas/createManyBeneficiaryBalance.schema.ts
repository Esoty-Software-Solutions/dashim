import { z } from 'zod';
import { BeneficiaryBalanceCreateManyInputObjectSchema } from './objects/BeneficiaryBalanceCreateManyInput.schema';

export const BeneficiaryBalanceCreateManySchema = z.object({
  data: z.union([
    BeneficiaryBalanceCreateManyInputObjectSchema,
    z.array(BeneficiaryBalanceCreateManyInputObjectSchema),
  ]),
  skipDuplicates: z.boolean().optional(),
});
