import { z } from 'zod';
import { InsurancePolicyMedicalCentersWhereUniqueInputObjectSchema } from './objects/InsurancePolicyMedicalCentersWhereUniqueInput.schema';

export const InsurancePolicyMedicalCentersFindUniqueSchema = z.object({
  where: InsurancePolicyMedicalCentersWhereUniqueInputObjectSchema,
});
