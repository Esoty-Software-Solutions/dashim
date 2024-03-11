import { z } from 'zod';
import { BeneficiaryEntityCreateWithoutBeneficiariesInputObjectSchema } from './BeneficiaryEntityCreateWithoutBeneficiariesInput.schema';
import { BeneficiaryEntityUncheckedCreateWithoutBeneficiariesInputObjectSchema } from './BeneficiaryEntityUncheckedCreateWithoutBeneficiariesInput.schema';
import { BeneficiaryEntityCreateOrConnectWithoutBeneficiariesInputObjectSchema } from './BeneficiaryEntityCreateOrConnectWithoutBeneficiariesInput.schema';
import { BeneficiaryEntityWhereUniqueInputObjectSchema } from './BeneficiaryEntityWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BeneficiaryEntityCreateNestedOneWithoutBeneficiariesInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(
            () => BeneficiaryEntityCreateWithoutBeneficiariesInputObjectSchema,
          ),
          z.lazy(
            () =>
              BeneficiaryEntityUncheckedCreateWithoutBeneficiariesInputObjectSchema,
          ),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(
          () =>
            BeneficiaryEntityCreateOrConnectWithoutBeneficiariesInputObjectSchema,
        )
        .optional(),
      connect: z
        .lazy(() => BeneficiaryEntityWhereUniqueInputObjectSchema)
        .optional(),
    })
    .strict();

export const BeneficiaryEntityCreateNestedOneWithoutBeneficiariesInputObjectSchema =
  Schema;
