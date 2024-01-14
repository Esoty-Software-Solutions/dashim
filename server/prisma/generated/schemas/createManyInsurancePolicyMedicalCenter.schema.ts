import { z } from 'zod';
import { InsurancePolicyMedicalCenterCreateManyInputObjectSchema } from './objects/InsurancePolicyMedicalCenterCreateManyInput.schema';

export const InsurancePolicyMedicalCenterCreateManySchema = z.object({
  data: z.union([
    InsurancePolicyMedicalCenterCreateManyInputObjectSchema,
    z.array(InsurancePolicyMedicalCenterCreateManyInputObjectSchema),
  ]),
  skipDuplicates: z.boolean().optional(),
});
