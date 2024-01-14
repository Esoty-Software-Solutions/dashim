import { z } from 'zod';
import { InsurancePolicyMedicalCenterWhereUniqueInputObjectSchema } from './objects/InsurancePolicyMedicalCenterWhereUniqueInput.schema';

export const InsurancePolicyMedicalCenterFindUniqueSchema = z.object({
  where: InsurancePolicyMedicalCenterWhereUniqueInputObjectSchema,
});
