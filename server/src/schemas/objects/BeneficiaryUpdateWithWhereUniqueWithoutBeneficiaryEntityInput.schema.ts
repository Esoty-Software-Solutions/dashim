import { z } from 'zod';
import { BeneficiaryWhereUniqueInputObjectSchema } from './BeneficiaryWhereUniqueInput.schema';
import { BeneficiaryUpdateWithoutBeneficiaryEntityInputObjectSchema } from './BeneficiaryUpdateWithoutBeneficiaryEntityInput.schema';
import { BeneficiaryUncheckedUpdateWithoutBeneficiaryEntityInputObjectSchema } from './BeneficiaryUncheckedUpdateWithoutBeneficiaryEntityInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BeneficiaryUpdateWithWhereUniqueWithoutBeneficiaryEntityInput> =
  z
    .object({
      where: z.lazy(() => BeneficiaryWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(
          () => BeneficiaryUpdateWithoutBeneficiaryEntityInputObjectSchema,
        ),
        z.lazy(
          () =>
            BeneficiaryUncheckedUpdateWithoutBeneficiaryEntityInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const BeneficiaryUpdateWithWhereUniqueWithoutBeneficiaryEntityInputObjectSchema =
  Schema;
