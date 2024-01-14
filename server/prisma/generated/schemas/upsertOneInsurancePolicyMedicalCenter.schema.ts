import { z } from 'zod';
import { InsurancePolicyMedicalCenterWhereUniqueInputObjectSchema } from './objects/InsurancePolicyMedicalCenterWhereUniqueInput.schema';
import { InsurancePolicyMedicalCenterCreateInputObjectSchema } from './objects/InsurancePolicyMedicalCenterCreateInput.schema';
import { InsurancePolicyMedicalCenterUncheckedCreateInputObjectSchema } from './objects/InsurancePolicyMedicalCenterUncheckedCreateInput.schema';
import { InsurancePolicyMedicalCenterUpdateInputObjectSchema } from './objects/InsurancePolicyMedicalCenterUpdateInput.schema';
import { InsurancePolicyMedicalCenterUncheckedUpdateInputObjectSchema } from './objects/InsurancePolicyMedicalCenterUncheckedUpdateInput.schema';

export const InsurancePolicyMedicalCenterUpsertSchema = z.object({
  where: InsurancePolicyMedicalCenterWhereUniqueInputObjectSchema,
  create: z.union([
    InsurancePolicyMedicalCenterCreateInputObjectSchema,
    InsurancePolicyMedicalCenterUncheckedCreateInputObjectSchema,
  ]),
  update: z.union([
    InsurancePolicyMedicalCenterUpdateInputObjectSchema,
    InsurancePolicyMedicalCenterUncheckedUpdateInputObjectSchema,
  ]),
});
