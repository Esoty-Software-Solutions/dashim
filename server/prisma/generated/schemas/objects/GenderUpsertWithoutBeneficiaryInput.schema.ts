import { z } from 'zod';
import { GenderUpdateWithoutBeneficiaryInputObjectSchema } from './GenderUpdateWithoutBeneficiaryInput.schema';
import { GenderUncheckedUpdateWithoutBeneficiaryInputObjectSchema } from './GenderUncheckedUpdateWithoutBeneficiaryInput.schema';
import { GenderCreateWithoutBeneficiaryInputObjectSchema } from './GenderCreateWithoutBeneficiaryInput.schema';
import { GenderUncheckedCreateWithoutBeneficiaryInputObjectSchema } from './GenderUncheckedCreateWithoutBeneficiaryInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.GenderUpsertWithoutBeneficiaryInput> = z
  .object({
    update: z.union([
      z.lazy(() => GenderUpdateWithoutBeneficiaryInputObjectSchema),
      z.lazy(() => GenderUncheckedUpdateWithoutBeneficiaryInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => GenderCreateWithoutBeneficiaryInputObjectSchema),
      z.lazy(() => GenderUncheckedCreateWithoutBeneficiaryInputObjectSchema),
    ]),
  })
  .strict();

export const GenderUpsertWithoutBeneficiaryInputObjectSchema = Schema;
