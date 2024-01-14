import { z } from 'zod';
import { InsurancePolicyMedicalCenterWhereInputObjectSchema } from './objects/InsurancePolicyMedicalCenterWhereInput.schema';

export const InsurancePolicyMedicalCenterDeleteManySchema = z.object({
  where: InsurancePolicyMedicalCenterWhereInputObjectSchema.optional(),
});
