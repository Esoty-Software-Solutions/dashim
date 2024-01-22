import { z } from 'zod';
import { BeneficiaryWhereUniqueInputObjectSchema } from './BeneficiaryWhereUniqueInput.schema';
import { BeneficiaryCreateWithoutIdCardInputObjectSchema } from './BeneficiaryCreateWithoutIdCardInput.schema';
import { BeneficiaryUncheckedCreateWithoutIdCardInputObjectSchema } from './BeneficiaryUncheckedCreateWithoutIdCardInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BeneficiaryCreateOrConnectWithoutIdCardInput> = z
  .object({
    where: z.lazy(() => BeneficiaryWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => BeneficiaryCreateWithoutIdCardInputObjectSchema),
      z.lazy(() => BeneficiaryUncheckedCreateWithoutIdCardInputObjectSchema),
    ]),
  })
  .strict();

export const BeneficiaryCreateOrConnectWithoutIdCardInputObjectSchema = Schema;
