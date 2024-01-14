import { z } from 'zod';
import { BeneficiaryWhereUniqueInputObjectSchema } from './BeneficiaryWhereUniqueInput.schema';
import { BeneficiaryUpdateWithoutGenderInputObjectSchema } from './BeneficiaryUpdateWithoutGenderInput.schema';
import { BeneficiaryUncheckedUpdateWithoutGenderInputObjectSchema } from './BeneficiaryUncheckedUpdateWithoutGenderInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BeneficiaryUpdateWithWhereUniqueWithoutGenderInput> =
  z
    .object({
      where: z.lazy(() => BeneficiaryWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => BeneficiaryUpdateWithoutGenderInputObjectSchema),
        z.lazy(() => BeneficiaryUncheckedUpdateWithoutGenderInputObjectSchema),
      ]),
    })
    .strict();

export const BeneficiaryUpdateWithWhereUniqueWithoutGenderInputObjectSchema =
  Schema;
