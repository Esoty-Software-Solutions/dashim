import { z } from 'zod';
import { InsurancePolicyWhereUniqueInputObjectSchema } from './InsurancePolicyWhereUniqueInput.schema';
import { InsurancePolicyCreateWithoutBenefitPackagesInputObjectSchema } from './InsurancePolicyCreateWithoutBenefitPackagesInput.schema';
import { InsurancePolicyUncheckedCreateWithoutBenefitPackagesInputObjectSchema } from './InsurancePolicyUncheckedCreateWithoutBenefitPackagesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.InsurancePolicyCreateOrConnectWithoutBenefitPackagesInput> =
  z
    .object({
      where: z.lazy(() => InsurancePolicyWhereUniqueInputObjectSchema),
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

export const InsurancePolicyCreateOrConnectWithoutBenefitPackagesInputObjectSchema =
  Schema;
