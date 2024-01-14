import { z } from 'zod';
import { BeneficiaryBalanceWhereInputObjectSchema } from './objects/BeneficiaryBalanceWhereInput.schema';

export const BeneficiaryBalanceDeleteManySchema = z.object({
  where: BeneficiaryBalanceWhereInputObjectSchema.optional(),
});
