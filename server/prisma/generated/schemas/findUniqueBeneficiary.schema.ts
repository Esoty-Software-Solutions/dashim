import { z } from 'zod';
import { BeneficiaryWhereUniqueInputObjectSchema } from './objects/BeneficiaryWhereUniqueInput.schema';

export const BeneficiaryFindUniqueSchema = z.object({
  where: BeneficiaryWhereUniqueInputObjectSchema,
});
