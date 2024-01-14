import { z } from 'zod';
import { BeneficiaryCreateManyInputObjectSchema } from './objects/BeneficiaryCreateManyInput.schema';

export const BeneficiaryCreateManySchema = z.object({
  data: z.union([
    BeneficiaryCreateManyInputObjectSchema,
    z.array(BeneficiaryCreateManyInputObjectSchema),
  ]),
  skipDuplicates: z.boolean().optional(),
});
