import { z } from 'zod';
import { BeneficiaryEntityWhereUniqueInputObjectSchema } from './BeneficiaryEntityWhereUniqueInput.schema';
import { BeneficiaryEntityCreateWithoutBeneficiariesInputObjectSchema } from './BeneficiaryEntityCreateWithoutBeneficiariesInput.schema';
import { BeneficiaryEntityUncheckedCreateWithoutBeneficiariesInputObjectSchema } from './BeneficiaryEntityUncheckedCreateWithoutBeneficiariesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BeneficiaryEntityCreateOrConnectWithoutBeneficiariesInput> =
  z
    .object({
      where: z.lazy(() => BeneficiaryEntityWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(
          () => BeneficiaryEntityCreateWithoutBeneficiariesInputObjectSchema,
        ),
        z.lazy(
          () =>
            BeneficiaryEntityUncheckedCreateWithoutBeneficiariesInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const BeneficiaryEntityCreateOrConnectWithoutBeneficiariesInputObjectSchema =
  Schema;
