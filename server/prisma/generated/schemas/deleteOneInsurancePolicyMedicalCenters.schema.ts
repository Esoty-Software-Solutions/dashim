import { z } from 'zod';
import { InsurancePolicyMedicalCentersWhereUniqueInputObjectSchema } from './objects/InsurancePolicyMedicalCentersWhereUniqueInput.schema';

export const InsurancePolicyMedicalCentersDeleteOneSchema = z.object({
  where: InsurancePolicyMedicalCentersWhereUniqueInputObjectSchema,
});
