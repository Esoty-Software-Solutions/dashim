import { z } from 'zod';
import { InsurancePolicyMedicalCenterWhereUniqueInputObjectSchema } from './objects/InsurancePolicyMedicalCenterWhereUniqueInput.schema';

export const InsurancePolicyMedicalCenterDeleteOneSchema = z.object({
  where: InsurancePolicyMedicalCenterWhereUniqueInputObjectSchema,
});
