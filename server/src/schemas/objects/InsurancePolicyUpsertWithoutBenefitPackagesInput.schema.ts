import { z } from 'zod';
import { InsurancePolicyUpdateWithoutBenefitPackagesInputObjectSchema } from './InsurancePolicyUpdateWithoutBenefitPackagesInput.schema';
import { InsurancePolicyUncheckedUpdateWithoutBenefitPackagesInputObjectSchema } from './InsurancePolicyUncheckedUpdateWithoutBenefitPackagesInput.schema';
import { InsurancePolicyCreateWithoutBenefitPackagesInputObjectSchema } from './InsurancePolicyCreateWithoutBenefitPackagesInput.schema';
import { InsurancePolicyUncheckedCreateWithoutBenefitPackagesInputObjectSchema } from './InsurancePolicyUncheckedCreateWithoutBenefitPackagesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.InsurancePolicyUpsertWithoutBenefitPackagesInput> =
  z
    .object({
      update: z.union([
        z.lazy(
          () => InsurancePolicyUpdateWithoutBenefitPackagesInputObjectSchema,
        ),
        z.lazy(
          () =>
            InsurancePolicyUncheckedUpdateWithoutBenefitPackagesInputObjectSchema,
        ),
      ]),
      create: z.union([
        z.lazy(
          () => InsurancePolicyCreateWithoutBenefitPackagesInputObjectSchema,
        ),
        z.lazy(
          () =>
            InsurancePolicyUncheckedCreateWithoutBenefitPackagesInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const InsurancePolicyUpsertWithoutBenefitPackagesInputObjectSchema =
  Schema;
