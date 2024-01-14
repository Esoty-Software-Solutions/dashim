import { z } from 'zod';
import { BeneficiaryWhereUniqueInputObjectSchema } from './BeneficiaryWhereUniqueInput.schema';
import { BeneficiaryCreateWithoutSpentsInputObjectSchema } from './BeneficiaryCreateWithoutSpentsInput.schema';
import { BeneficiaryUncheckedCreateWithoutSpentsInputObjectSchema } from './BeneficiaryUncheckedCreateWithoutSpentsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BeneficiaryCreateOrConnectWithoutSpentsInput> = z
  .object({
    where: z.lazy(() => BeneficiaryWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => BeneficiaryCreateWithoutSpentsInputObjectSchema),
      z.lazy(() => BeneficiaryUncheckedCreateWithoutSpentsInputObjectSchema),
    ]),
  })
  .strict();

export const BeneficiaryCreateOrConnectWithoutSpentsInputObjectSchema = Schema;
