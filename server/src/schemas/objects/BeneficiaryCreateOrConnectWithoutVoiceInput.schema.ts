import { z } from 'zod';
import { BeneficiaryWhereUniqueInputObjectSchema } from './BeneficiaryWhereUniqueInput.schema';
import { BeneficiaryCreateWithoutVoiceInputObjectSchema } from './BeneficiaryCreateWithoutVoiceInput.schema';
import { BeneficiaryUncheckedCreateWithoutVoiceInputObjectSchema } from './BeneficiaryUncheckedCreateWithoutVoiceInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BeneficiaryCreateOrConnectWithoutVoiceInput> = z
  .object({
    where: z.lazy(() => BeneficiaryWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => BeneficiaryCreateWithoutVoiceInputObjectSchema),
      z.lazy(() => BeneficiaryUncheckedCreateWithoutVoiceInputObjectSchema),
    ]),
  })
  .strict();

export const BeneficiaryCreateOrConnectWithoutVoiceInputObjectSchema = Schema;
