import { z } from 'zod';
import { InsurancePolicyMedicalCenterUpdateManyMutationInputObjectSchema } from './objects/InsurancePolicyMedicalCenterUpdateManyMutationInput.schema';
import { InsurancePolicyMedicalCenterWhereInputObjectSchema } from './objects/InsurancePolicyMedicalCenterWhereInput.schema';

export const InsurancePolicyMedicalCenterUpdateManySchema = z.object({
  data: InsurancePolicyMedicalCenterUpdateManyMutationInputObjectSchema,
  where: InsurancePolicyMedicalCenterWhereInputObjectSchema.optional(),
});
