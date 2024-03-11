import { z } from 'zod';
import { BeneficiaryWhereUniqueInputObjectSchema } from './BeneficiaryWhereUniqueInput.schema';
import { BeneficiaryCreateWithoutFaceInputObjectSchema } from './BeneficiaryCreateWithoutFaceInput.schema';
import { BeneficiaryUncheckedCreateWithoutFaceInputObjectSchema } from './BeneficiaryUncheckedCreateWithoutFaceInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BeneficiaryCreateOrConnectWithoutFaceInput> = z
  .object({
    where: z.lazy(() => BeneficiaryWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => BeneficiaryCreateWithoutFaceInputObjectSchema),
      z.lazy(() => BeneficiaryUncheckedCreateWithoutFaceInputObjectSchema),
    ]),
  })
  .strict();

export const BeneficiaryCreateOrConnectWithoutFaceInputObjectSchema = Schema;
