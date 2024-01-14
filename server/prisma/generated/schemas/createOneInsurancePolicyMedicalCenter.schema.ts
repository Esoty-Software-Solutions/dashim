import { z } from 'zod';
import { InsurancePolicyMedicalCenterCreateInputObjectSchema } from './objects/InsurancePolicyMedicalCenterCreateInput.schema';
import { InsurancePolicyMedicalCenterUncheckedCreateInputObjectSchema } from './objects/InsurancePolicyMedicalCenterUncheckedCreateInput.schema';

export const InsurancePolicyMedicalCenterCreateOneSchema = z.object({
  data: z.union([
    InsurancePolicyMedicalCenterCreateInputObjectSchema,
    InsurancePolicyMedicalCenterUncheckedCreateInputObjectSchema,
  ]),
});
