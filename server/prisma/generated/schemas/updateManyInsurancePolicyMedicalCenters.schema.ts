import { z } from 'zod';
import { InsurancePolicyMedicalCentersUpdateManyMutationInputObjectSchema } from './objects/InsurancePolicyMedicalCentersUpdateManyMutationInput.schema';
import { InsurancePolicyMedicalCentersWhereInputObjectSchema } from './objects/InsurancePolicyMedicalCentersWhereInput.schema';

export const InsurancePolicyMedicalCentersUpdateManySchema = z.object({
  data: InsurancePolicyMedicalCentersUpdateManyMutationInputObjectSchema,
  where: InsurancePolicyMedicalCentersWhereInputObjectSchema.optional(),
});
