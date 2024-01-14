import { z } from 'zod';
import { BeneficiaryWhereInputObjectSchema } from './objects/BeneficiaryWhereInput.schema';

export const BeneficiaryDeleteManySchema = z.object({
  where: BeneficiaryWhereInputObjectSchema.optional(),
});
