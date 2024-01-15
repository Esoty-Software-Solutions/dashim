import { z } from 'zod';
import { IDCardWhereUniqueInputObjectSchema } from './IDCardWhereUniqueInput.schema';
import { IDCardUpdateWithoutBeneficiaryInputObjectSchema } from './IDCardUpdateWithoutBeneficiaryInput.schema';
import { IDCardUncheckedUpdateWithoutBeneficiaryInputObjectSchema } from './IDCardUncheckedUpdateWithoutBeneficiaryInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.IDCardUpdateWithWhereUniqueWithoutBeneficiaryInput> =
  z
    .object({
      where: z.lazy(() => IDCardWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => IDCardUpdateWithoutBeneficiaryInputObjectSchema),
        z.lazy(() => IDCardUncheckedUpdateWithoutBeneficiaryInputObjectSchema),
      ]),
    })
    .strict();

export const IDCardUpdateWithWhereUniqueWithoutBeneficiaryInputObjectSchema =
  Schema;
