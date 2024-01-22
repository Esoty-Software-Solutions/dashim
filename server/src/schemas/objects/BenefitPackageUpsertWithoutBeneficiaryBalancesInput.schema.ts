import { z } from 'zod';
import { BenefitPackageUpdateWithoutBeneficiaryBalancesInputObjectSchema } from './BenefitPackageUpdateWithoutBeneficiaryBalancesInput.schema';
import { BenefitPackageUncheckedUpdateWithoutBeneficiaryBalancesInputObjectSchema } from './BenefitPackageUncheckedUpdateWithoutBeneficiaryBalancesInput.schema';
import { BenefitPackageCreateWithoutBeneficiaryBalancesInputObjectSchema } from './BenefitPackageCreateWithoutBeneficiaryBalancesInput.schema';
import { BenefitPackageUncheckedCreateWithoutBeneficiaryBalancesInputObjectSchema } from './BenefitPackageUncheckedCreateWithoutBeneficiaryBalancesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BenefitPackageUpsertWithoutBeneficiaryBalancesInput> =
  z
    .object({
      update: z.union([
        z.lazy(
          () => BenefitPackageUpdateWithoutBeneficiaryBalancesInputObjectSchema,
        ),
        z.lazy(
          () =>
            BenefitPackageUncheckedUpdateWithoutBeneficiaryBalancesInputObjectSchema,
        ),
      ]),
      create: z.union([
        z.lazy(
          () => BenefitPackageCreateWithoutBeneficiaryBalancesInputObjectSchema,
        ),
        z.lazy(
          () =>
            BenefitPackageUncheckedCreateWithoutBeneficiaryBalancesInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const BenefitPackageUpsertWithoutBeneficiaryBalancesInputObjectSchema =
  Schema;
