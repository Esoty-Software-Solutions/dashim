import { z } from 'zod';
import { BeneficiaryWhereUniqueInputObjectSchema } from './BeneficiaryWhereUniqueInput.schema';
import { BeneficiaryCreateWithoutBeneficiaryEntityInputObjectSchema } from './BeneficiaryCreateWithoutBeneficiaryEntityInput.schema';
import { BeneficiaryUncheckedCreateWithoutBeneficiaryEntityInputObjectSchema } from './BeneficiaryUncheckedCreateWithoutBeneficiaryEntityInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BeneficiaryCreateOrConnectWithoutBeneficiaryEntityInput> =
  z
    .object({
      where: z.lazy(() => BeneficiaryWhereUniqueInputObjectSchema),
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

export const BeneficiaryCreateOrConnectWithoutBeneficiaryEntityInputObjectSchema =
  Schema;
