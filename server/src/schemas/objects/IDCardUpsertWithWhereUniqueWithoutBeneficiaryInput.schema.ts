import { z } from 'zod';
import { IDCardWhereUniqueInputObjectSchema } from './IDCardWhereUniqueInput.schema';
import { IDCardUpdateWithoutBeneficiaryInputObjectSchema } from './IDCardUpdateWithoutBeneficiaryInput.schema';
import { IDCardUncheckedUpdateWithoutBeneficiaryInputObjectSchema } from './IDCardUncheckedUpdateWithoutBeneficiaryInput.schema';
import { IDCardCreateWithoutBeneficiaryInputObjectSchema } from './IDCardCreateWithoutBeneficiaryInput.schema';
import { IDCardUncheckedCreateWithoutBeneficiaryInputObjectSchema } from './IDCardUncheckedCreateWithoutBeneficiaryInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.IDCardUpsertWithWhereUniqueWithoutBeneficiaryInput> =
  z
    .object({
      where: z.lazy(() => IDCardWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => IDCardUpdateWithoutBeneficiaryInputObjectSchema),
        z.lazy(() => IDCardUncheckedUpdateWithoutBeneficiaryInputObjectSchema),
      ]),
      create: z.union([
        z.lazy(() => IDCardCreateWithoutBeneficiaryInputObjectSchema),
        z.lazy(() => IDCardUncheckedCreateWithoutBeneficiaryInputObjectSchema),
      ]),
    })
    .strict();

export const IDCardUpsertWithWhereUniqueWithoutBeneficiaryInputObjectSchema =
  Schema;
