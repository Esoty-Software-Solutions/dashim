import { z } from 'zod';
import { IDCardWhereUniqueInputObjectSchema } from './IDCardWhereUniqueInput.schema';
import { IDCardCreateWithoutBeneficiaryInputObjectSchema } from './IDCardCreateWithoutBeneficiaryInput.schema';
import { IDCardUncheckedCreateWithoutBeneficiaryInputObjectSchema } from './IDCardUncheckedCreateWithoutBeneficiaryInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.IDCardCreateOrConnectWithoutBeneficiaryInput> = z
  .object({
    where: z.lazy(() => IDCardWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => IDCardCreateWithoutBeneficiaryInputObjectSchema),
      z.lazy(() => IDCardUncheckedCreateWithoutBeneficiaryInputObjectSchema),
    ]),
  })
  .strict();

export const IDCardCreateOrConnectWithoutBeneficiaryInputObjectSchema = Schema;
