import { z } from 'zod';
import { BeneficiaryUpdateManyMutationInputObjectSchema } from './objects/BeneficiaryUpdateManyMutationInput.schema';
import { BeneficiaryWhereInputObjectSchema } from './objects/BeneficiaryWhereInput.schema';

export const BeneficiaryUpdateManySchema = z.object({
  data: BeneficiaryUpdateManyMutationInputObjectSchema,
  where: BeneficiaryWhereInputObjectSchema.optional(),
});
