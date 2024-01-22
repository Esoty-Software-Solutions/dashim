import { z } from 'zod';
import { BeneficiaryWhereUniqueInputObjectSchema } from './BeneficiaryWhereUniqueInput.schema';
import { BeneficiaryUpdateWithoutGenderInputObjectSchema } from './BeneficiaryUpdateWithoutGenderInput.schema';
import { BeneficiaryUncheckedUpdateWithoutGenderInputObjectSchema } from './BeneficiaryUncheckedUpdateWithoutGenderInput.schema';
import { BeneficiaryCreateWithoutGenderInputObjectSchema } from './BeneficiaryCreateWithoutGenderInput.schema';
import { BeneficiaryUncheckedCreateWithoutGenderInputObjectSchema } from './BeneficiaryUncheckedCreateWithoutGenderInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BeneficiaryUpsertWithWhereUniqueWithoutGenderInput> =
  z
    .object({
      where: z.lazy(() => BeneficiaryWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => BeneficiaryUpdateWithoutGenderInputObjectSchema),
        z.lazy(() => BeneficiaryUncheckedUpdateWithoutGenderInputObjectSchema),
      ]),
      create: z.union([
        z.lazy(() => BeneficiaryCreateWithoutGenderInputObjectSchema),
        z.lazy(() => BeneficiaryUncheckedCreateWithoutGenderInputObjectSchema),
      ]),
    })
    .strict();

export const BeneficiaryUpsertWithWhereUniqueWithoutGenderInputObjectSchema =
  Schema;
