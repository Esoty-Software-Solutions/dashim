import { z } from 'zod';
import { InsurancePolicyMedicalCentersCreateManyInputObjectSchema } from './objects/InsurancePolicyMedicalCentersCreateManyInput.schema';

export const InsurancePolicyMedicalCentersCreateManySchema = z.object({
  data: z.union([
    InsurancePolicyMedicalCentersCreateManyInputObjectSchema,
    z.array(InsurancePolicyMedicalCentersCreateManyInputObjectSchema),
  ]),
  skipDuplicates: z.boolean().optional(),
});
