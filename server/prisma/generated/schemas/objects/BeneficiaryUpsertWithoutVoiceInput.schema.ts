import { z } from 'zod';
import { BeneficiaryUpdateWithoutVoiceInputObjectSchema } from './BeneficiaryUpdateWithoutVoiceInput.schema';
import { BeneficiaryUncheckedUpdateWithoutVoiceInputObjectSchema } from './BeneficiaryUncheckedUpdateWithoutVoiceInput.schema';
import { BeneficiaryCreateWithoutVoiceInputObjectSchema } from './BeneficiaryCreateWithoutVoiceInput.schema';
import { BeneficiaryUncheckedCreateWithoutVoiceInputObjectSchema } from './BeneficiaryUncheckedCreateWithoutVoiceInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BeneficiaryUpsertWithoutVoiceInput> = z
  .object({
    update: z.union([
      z.lazy(() => BeneficiaryUpdateWithoutVoiceInputObjectSchema),
      z.lazy(() => BeneficiaryUncheckedUpdateWithoutVoiceInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => BeneficiaryCreateWithoutVoiceInputObjectSchema),
      z.lazy(() => BeneficiaryUncheckedCreateWithoutVoiceInputObjectSchema),
    ]),
  })
  .strict();

export const BeneficiaryUpsertWithoutVoiceInputObjectSchema = Schema;
