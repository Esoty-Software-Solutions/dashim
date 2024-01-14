import { z } from 'zod';
import { BeneficiaryUpdateWithoutSpentsInputObjectSchema } from './BeneficiaryUpdateWithoutSpentsInput.schema';
import { BeneficiaryUncheckedUpdateWithoutSpentsInputObjectSchema } from './BeneficiaryUncheckedUpdateWithoutSpentsInput.schema';
import { BeneficiaryCreateWithoutSpentsInputObjectSchema } from './BeneficiaryCreateWithoutSpentsInput.schema';
import { BeneficiaryUncheckedCreateWithoutSpentsInputObjectSchema } from './BeneficiaryUncheckedCreateWithoutSpentsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BeneficiaryUpsertWithoutSpentsInput> = z
  .object({
    update: z.union([
      z.lazy(() => BeneficiaryUpdateWithoutSpentsInputObjectSchema),
      z.lazy(() => BeneficiaryUncheckedUpdateWithoutSpentsInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => BeneficiaryCreateWithoutSpentsInputObjectSchema),
      z.lazy(() => BeneficiaryUncheckedCreateWithoutSpentsInputObjectSchema),
    ]),
  })
  .strict();

export const BeneficiaryUpsertWithoutSpentsInputObjectSchema = Schema;
