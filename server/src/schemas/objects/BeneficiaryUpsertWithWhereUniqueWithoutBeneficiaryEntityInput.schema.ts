import { z } from 'zod';
import { BeneficiaryWhereUniqueInputObjectSchema } from './BeneficiaryWhereUniqueInput.schema';
import { BeneficiaryUpdateWithoutBeneficiaryEntityInputObjectSchema } from './BeneficiaryUpdateWithoutBeneficiaryEntityInput.schema';
import { BeneficiaryUncheckedUpdateWithoutBeneficiaryEntityInputObjectSchema } from './BeneficiaryUncheckedUpdateWithoutBeneficiaryEntityInput.schema';
import { BeneficiaryCreateWithoutBeneficiaryEntityInputObjectSchema } from './BeneficiaryCreateWithoutBeneficiaryEntityInput.schema';
import { BeneficiaryUncheckedCreateWithoutBeneficiaryEntityInputObjectSchema } from './BeneficiaryUncheckedCreateWithoutBeneficiaryEntityInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BeneficiaryUpsertWithWhereUniqueWithoutBeneficiaryEntityInput> =
  z
    .object({
      where: z.lazy(() => BeneficiaryWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(
          () => BeneficiaryUpdateWithoutBeneficiaryEntityInputObjectSchema,
        ),
        z.lazy(
          () =>
            BeneficiaryUncheckedUpdateWithoutBeneficiaryEntityInputObjectSchema,
        ),
      ]),
      create: z.union([
        z.lazy(
          () => BeneficiaryCreateWithoutBeneficiaryEntityInputObjectSchema,
        ),
        z.lazy(
          () =>
            BeneficiaryUncheckedCreateWithoutBeneficiaryEntityInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const BeneficiaryUpsertWithWhereUniqueWithoutBeneficiaryEntityInputObjectSchema =
  Schema;
