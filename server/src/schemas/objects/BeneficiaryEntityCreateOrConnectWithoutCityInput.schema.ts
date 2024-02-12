import { z } from 'zod';
import { BeneficiaryEntityWhereUniqueInputObjectSchema } from './BeneficiaryEntityWhereUniqueInput.schema';
import { BeneficiaryEntityCreateWithoutCityInputObjectSchema } from './BeneficiaryEntityCreateWithoutCityInput.schema';
import { BeneficiaryEntityUncheckedCreateWithoutCityInputObjectSchema } from './BeneficiaryEntityUncheckedCreateWithoutCityInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BeneficiaryEntityCreateOrConnectWithoutCityInput> =
  z
    .object({
      where: z.lazy(() => BeneficiaryEntityWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => BeneficiaryEntityCreateWithoutCityInputObjectSchema),
        z.lazy(
          () => BeneficiaryEntityUncheckedCreateWithoutCityInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const BeneficiaryEntityCreateOrConnectWithoutCityInputObjectSchema =
  Schema;
