import { z } from 'zod';
import { BeneficiaryCreateInputObjectSchema } from './objects/BeneficiaryCreateInput.schema';
import { BeneficiaryUncheckedCreateInputObjectSchema } from './objects/BeneficiaryUncheckedCreateInput.schema';

export const BeneficiaryCreateOneSchema = z.object({
  data: z.union([
    BeneficiaryCreateInputObjectSchema,
    BeneficiaryUncheckedCreateInputObjectSchema,
  ]),
});
