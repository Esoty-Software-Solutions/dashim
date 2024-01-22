import { z } from 'zod';
import { BenefitPackageCreateWithoutBeneficiaryBalancesInputObjectSchema } from './BenefitPackageCreateWithoutBeneficiaryBalancesInput.schema';
import { BenefitPackageUncheckedCreateWithoutBeneficiaryBalancesInputObjectSchema } from './BenefitPackageUncheckedCreateWithoutBeneficiaryBalancesInput.schema';
import { BenefitPackageCreateOrConnectWithoutBeneficiaryBalancesInputObjectSchema } from './BenefitPackageCreateOrConnectWithoutBeneficiaryBalancesInput.schema';
import { BenefitPackageUpsertWithoutBeneficiaryBalancesInputObjectSchema } from './BenefitPackageUpsertWithoutBeneficiaryBalancesInput.schema';
import { BenefitPackageWhereUniqueInputObjectSchema } from './BenefitPackageWhereUniqueInput.schema';
import { BenefitPackageUpdateWithoutBeneficiaryBalancesInputObjectSchema } from './BenefitPackageUpdateWithoutBeneficiaryBalancesInput.schema';
import { BenefitPackageUncheckedUpdateWithoutBeneficiaryBalancesInputObjectSchema } from './BenefitPackageUncheckedUpdateWithoutBeneficiaryBalancesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BenefitPackageUpdateOneRequiredWithoutBeneficiaryBalancesNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(
            () =>
              BenefitPackageCreateWithoutBeneficiaryBalancesInputObjectSchema,
          ),
          z.lazy(
            () =>
              BenefitPackageUncheckedCreateWithoutBeneficiaryBalancesInputObjectSchema,
          ),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(
          () =>
            BenefitPackageCreateOrConnectWithoutBeneficiaryBalancesInputObjectSchema,
        )
        .optional(),
      upsert: z
        .lazy(
          () => BenefitPackageUpsertWithoutBeneficiaryBalancesInputObjectSchema,
        )
        .optional(),
      connect: z
        .lazy(() => BenefitPackageWhereUniqueInputObjectSchema)
        .optional(),
      update: z
        .union([
          z.lazy(
            () =>
              BenefitPackageUpdateWithoutBeneficiaryBalancesInputObjectSchema,
          ),
          z.lazy(
            () =>
              BenefitPackageUncheckedUpdateWithoutBeneficiaryBalancesInputObjectSchema,
          ),
        ])
        .optional(),
    })
    .strict();

export const BenefitPackageUpdateOneRequiredWithoutBeneficiaryBalancesNestedInputObjectSchema =
  Schema;
