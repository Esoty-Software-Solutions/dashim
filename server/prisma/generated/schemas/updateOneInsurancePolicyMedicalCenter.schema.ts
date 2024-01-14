import { z } from 'zod';
import { InsurancePolicyMedicalCenterUpdateInputObjectSchema } from './objects/InsurancePolicyMedicalCenterUpdateInput.schema';
import { InsurancePolicyMedicalCenterUncheckedUpdateInputObjectSchema } from './objects/InsurancePolicyMedicalCenterUncheckedUpdateInput.schema';
import { InsurancePolicyMedicalCenterWhereUniqueInputObjectSchema } from './objects/InsurancePolicyMedicalCenterWhereUniqueInput.schema';

export const InsurancePolicyMedicalCenterUpdateOneSchema = z.object({
  data: z.union([
    InsurancePolicyMedicalCenterUpdateInputObjectSchema,
    InsurancePolicyMedicalCenterUncheckedUpdateInputObjectSchema,
  ]),
  where: InsurancePolicyMedicalCenterWhereUniqueInputObjectSchema,
});
