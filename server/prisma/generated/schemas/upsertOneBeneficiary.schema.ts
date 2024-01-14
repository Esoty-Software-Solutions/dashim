import { z } from 'zod';
import { BeneficiaryWhereUniqueInputObjectSchema } from './objects/BeneficiaryWhereUniqueInput.schema';
import { BeneficiaryCreateInputObjectSchema } from './objects/BeneficiaryCreateInput.schema';
import { BeneficiaryUncheckedCreateInputObjectSchema } from './objects/BeneficiaryUncheckedCreateInput.schema';
import { BeneficiaryUpdateInputObjectSchema } from './objects/BeneficiaryUpdateInput.schema';
import { BeneficiaryUncheckedUpdateInputObjectSchema } from './objects/BeneficiaryUncheckedUpdateInput.schema';

export const BeneficiaryUpsertSchema = z.object({
  where: BeneficiaryWhereUniqueInputObjectSchema,
  create: z.union([
    BeneficiaryCreateInputObjectSchema,
    BeneficiaryUncheckedCreateInputObjectSchema,
  ]),
  update: z.union([
    BeneficiaryUpdateInputObjectSchema,
    BeneficiaryUncheckedUpdateInputObjectSchema,
  ]),
});
