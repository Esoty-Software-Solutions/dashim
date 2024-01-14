import { z } from 'zod';
import { BeneficiaryWhereUniqueInputObjectSchema } from './objects/BeneficiaryWhereUniqueInput.schema';

export const BeneficiaryDeleteOneSchema = z.object({
  where: BeneficiaryWhereUniqueInputObjectSchema,
});
