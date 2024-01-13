import { z } from 'zod';
import { InsurancePolicyMedicalCentersWhereInputObjectSchema } from './objects/InsurancePolicyMedicalCentersWhereInput.schema';

export const InsurancePolicyMedicalCentersDeleteManySchema = z.object({
  where: InsurancePolicyMedicalCentersWhereInputObjectSchema.optional(),
});
