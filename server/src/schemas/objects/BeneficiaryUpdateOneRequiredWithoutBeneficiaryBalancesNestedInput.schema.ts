import { z } from 'zod';
import { BeneficiaryCreateWithoutBeneficiaryBalancesInputObjectSchema } from './BeneficiaryCreateWithoutBeneficiaryBalancesInput.schema';
import { BeneficiaryUncheckedCreateWithoutBeneficiaryBalancesInputObjectSchema } from './BeneficiaryUncheckedCreateWithoutBeneficiaryBalancesInput.schema';
import { BeneficiaryCreateOrConnectWithoutBeneficiaryBalancesInputObjectSchema } from './BeneficiaryCreateOrConnectWithoutBeneficiaryBalancesInput.schema';
import { BeneficiaryUpsertWithoutBeneficiaryBalancesInputObjectSchema } from './BeneficiaryUpsertWithoutBeneficiaryBalancesInput.schema';
import { BeneficiaryWhereUniqueInputObjectSchema } from './BeneficiaryWhereUniqueInput.schema';
import { BeneficiaryUpdateWithoutBeneficiaryBalancesInputObjectSchema } from './BeneficiaryUpdateWithoutBeneficiaryBalancesInput.schema';
import { BeneficiaryUncheckedUpdateWithoutBeneficiaryBalancesInputObjectSchema } from './BeneficiaryUncheckedUpdateWithoutBeneficiaryBalancesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BeneficiaryUpdateOneRequiredWithoutBeneficiaryBalancesNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(
            () => BeneficiaryCreateWithoutBeneficiaryBalancesInputObjectSchema,
          ),
          z.lazy(
            () =>
              BeneficiaryUncheckedCreateWithoutBeneficiaryBalancesInputObjectSchema,
          ),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(
          () =>
            BeneficiaryCreateOrConnectWithoutBeneficiaryBalancesInputObjectSchema,
        )
        .optional(),
      upsert: z
        .lazy(
          () => BeneficiaryUpsertWithoutBeneficiaryBalancesInputObjectSchema,
        )
        .optional(),
      connect: z.lazy(() => BeneficiaryWhereUniqueInputObjectSchema).optional(),
      update: z
        .union([
          z.lazy(
            () => BeneficiaryUpdateWithoutBeneficiaryBalancesInputObjectSchema,
          ),
          z.lazy(
            () =>
              BeneficiaryUncheckedUpdateWithoutBeneficiaryBalancesInputObjectSchema,
          ),
        ])
        .optional(),
    })
    .strict();

export const BeneficiaryUpdateOneRequiredWithoutBeneficiaryBalancesNestedInputObjectSchema =
  Schema;
