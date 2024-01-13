import { z } from 'zod';
import { InsurancePolicyMedicalCentersCreateInputObjectSchema } from './objects/InsurancePolicyMedicalCentersCreateInput.schema';
import { InsurancePolicyMedicalCentersUncheckedCreateInputObjectSchema } from './objects/InsurancePolicyMedicalCentersUncheckedCreateInput.schema';

export const InsurancePolicyMedicalCentersCreateOneSchema = z.object({
  data: z.union([
    InsurancePolicyMedicalCentersCreateInputObjectSchema,
    InsurancePolicyMedicalCentersUncheckedCreateInputObjectSchema,
  ]),
});
