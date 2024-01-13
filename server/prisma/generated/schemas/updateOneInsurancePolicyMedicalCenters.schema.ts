import { z } from 'zod';
import { InsurancePolicyMedicalCentersUpdateInputObjectSchema } from './objects/InsurancePolicyMedicalCentersUpdateInput.schema';
import { InsurancePolicyMedicalCentersUncheckedUpdateInputObjectSchema } from './objects/InsurancePolicyMedicalCentersUncheckedUpdateInput.schema';
import { InsurancePolicyMedicalCentersWhereUniqueInputObjectSchema } from './objects/InsurancePolicyMedicalCentersWhereUniqueInput.schema';

export const InsurancePolicyMedicalCentersUpdateOneSchema = z.object({
  data: z.union([
    InsurancePolicyMedicalCentersUpdateInputObjectSchema,
    InsurancePolicyMedicalCentersUncheckedUpdateInputObjectSchema,
  ]),
  where: InsurancePolicyMedicalCentersWhereUniqueInputObjectSchema,
});
