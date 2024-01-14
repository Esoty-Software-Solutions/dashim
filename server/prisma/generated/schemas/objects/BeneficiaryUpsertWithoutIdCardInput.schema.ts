import { z } from 'zod';
import { BeneficiaryUpdateWithoutIdCardInputObjectSchema } from './BeneficiaryUpdateWithoutIdCardInput.schema';
import { BeneficiaryUncheckedUpdateWithoutIdCardInputObjectSchema } from './BeneficiaryUncheckedUpdateWithoutIdCardInput.schema';
import { BeneficiaryCreateWithoutIdCardInputObjectSchema } from './BeneficiaryCreateWithoutIdCardInput.schema';
import { BeneficiaryUncheckedCreateWithoutIdCardInputObjectSchema } from './BeneficiaryUncheckedCreateWithoutIdCardInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BeneficiaryUpsertWithoutIdCardInput> = z
  .object({
    update: z.union([
      z.lazy(() => BeneficiaryUpdateWithoutIdCardInputObjectSchema),
      z.lazy(() => BeneficiaryUncheckedUpdateWithoutIdCardInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => BeneficiaryCreateWithoutIdCardInputObjectSchema),
      z.lazy(() => BeneficiaryUncheckedCreateWithoutIdCardInputObjectSchema),
    ]),
  })
  .strict();

export const BeneficiaryUpsertWithoutIdCardInputObjectSchema = Schema;
