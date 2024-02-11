import { z } from 'zod';
import { BeneficiaryEntityWhereUniqueInputObjectSchema } from './BeneficiaryEntityWhereUniqueInput.schema';
import { BeneficiaryEntityCreateWithoutInsurancePolicyInputObjectSchema } from './BeneficiaryEntityCreateWithoutInsurancePolicyInput.schema';
import { BeneficiaryEntityUncheckedCreateWithoutInsurancePolicyInputObjectSchema } from './BeneficiaryEntityUncheckedCreateWithoutInsurancePolicyInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BeneficiaryEntityCreateOrConnectWithoutInsurancePolicyInput> =
  z
    .object({
      where: z.lazy(() => BeneficiaryEntityWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(
          () => BeneficiaryEntityCreateWithoutInsurancePolicyInputObjectSchema,
        ),
        z.lazy(
          () =>
            BeneficiaryEntityUncheckedCreateWithoutInsurancePolicyInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const BeneficiaryEntityCreateOrConnectWithoutInsurancePolicyInputObjectSchema =
  Schema;
