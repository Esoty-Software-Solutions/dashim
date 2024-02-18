import { z } from 'zod';
import { BeneficiaryEntityWhereUniqueInputObjectSchema } from './BeneficiaryEntityWhereUniqueInput.schema';
import { BeneficiaryEntityUpdateWithoutInsurancePolicyInputObjectSchema } from './BeneficiaryEntityUpdateWithoutInsurancePolicyInput.schema';
import { BeneficiaryEntityUncheckedUpdateWithoutInsurancePolicyInputObjectSchema } from './BeneficiaryEntityUncheckedUpdateWithoutInsurancePolicyInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BeneficiaryEntityUpdateWithWhereUniqueWithoutInsurancePolicyInput> =
  z
    .object({
      where: z.lazy(() => BeneficiaryEntityWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(
          () => BeneficiaryEntityUpdateWithoutInsurancePolicyInputObjectSchema,
        ),
        z.lazy(
          () =>
            BeneficiaryEntityUncheckedUpdateWithoutInsurancePolicyInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const BeneficiaryEntityUpdateWithWhereUniqueWithoutInsurancePolicyInputObjectSchema =
  Schema;
