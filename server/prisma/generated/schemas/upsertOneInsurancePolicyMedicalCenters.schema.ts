import { z } from 'zod';
import { InsurancePolicyMedicalCentersWhereUniqueInputObjectSchema } from './objects/InsurancePolicyMedicalCentersWhereUniqueInput.schema';
import { InsurancePolicyMedicalCentersCreateInputObjectSchema } from './objects/InsurancePolicyMedicalCentersCreateInput.schema';
import { InsurancePolicyMedicalCentersUncheckedCreateInputObjectSchema } from './objects/InsurancePolicyMedicalCentersUncheckedCreateInput.schema';
import { InsurancePolicyMedicalCentersUpdateInputObjectSchema } from './objects/InsurancePolicyMedicalCentersUpdateInput.schema';
import { InsurancePolicyMedicalCentersUncheckedUpdateInputObjectSchema } from './objects/InsurancePolicyMedicalCentersUncheckedUpdateInput.schema';

export const InsurancePolicyMedicalCentersUpsertSchema = z.object({
  where: InsurancePolicyMedicalCentersWhereUniqueInputObjectSchema,
  create: z.union([
    InsurancePolicyMedicalCentersCreateInputObjectSchema,
    InsurancePolicyMedicalCentersUncheckedCreateInputObjectSchema,
  ]),
  update: z.union([
    InsurancePolicyMedicalCentersUpdateInputObjectSchema,
    InsurancePolicyMedicalCentersUncheckedUpdateInputObjectSchema,
  ]),
});
