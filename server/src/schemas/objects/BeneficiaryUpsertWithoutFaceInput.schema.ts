import { z } from 'zod';
import { BeneficiaryUpdateWithoutFaceInputObjectSchema } from './BeneficiaryUpdateWithoutFaceInput.schema';
import { BeneficiaryUncheckedUpdateWithoutFaceInputObjectSchema } from './BeneficiaryUncheckedUpdateWithoutFaceInput.schema';
import { BeneficiaryCreateWithoutFaceInputObjectSchema } from './BeneficiaryCreateWithoutFaceInput.schema';
import { BeneficiaryUncheckedCreateWithoutFaceInputObjectSchema } from './BeneficiaryUncheckedCreateWithoutFaceInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BeneficiaryUpsertWithoutFaceInput> = z
  .object({
    update: z.union([
      z.lazy(() => BeneficiaryUpdateWithoutFaceInputObjectSchema),
      z.lazy(() => BeneficiaryUncheckedUpdateWithoutFaceInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => BeneficiaryCreateWithoutFaceInputObjectSchema),
      z.lazy(() => BeneficiaryUncheckedCreateWithoutFaceInputObjectSchema),
    ]),
  })
  .strict();

export const BeneficiaryUpsertWithoutFaceInputObjectSchema = Schema;
