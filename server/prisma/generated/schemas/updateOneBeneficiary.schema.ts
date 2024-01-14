import { z } from 'zod';
import { BeneficiaryUpdateInputObjectSchema } from './objects/BeneficiaryUpdateInput.schema';
import { BeneficiaryUncheckedUpdateInputObjectSchema } from './objects/BeneficiaryUncheckedUpdateInput.schema';
import { BeneficiaryWhereUniqueInputObjectSchema } from './objects/BeneficiaryWhereUniqueInput.schema';

export const BeneficiaryUpdateOneSchema = z.object({
  data: z.union([
    BeneficiaryUpdateInputObjectSchema,
    BeneficiaryUncheckedUpdateInputObjectSchema,
  ]),
  where: BeneficiaryWhereUniqueInputObjectSchema,
});
