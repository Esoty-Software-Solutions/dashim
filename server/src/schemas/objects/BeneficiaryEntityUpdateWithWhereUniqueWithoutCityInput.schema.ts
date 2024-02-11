import { z } from 'zod';
import { BeneficiaryEntityWhereUniqueInputObjectSchema } from './BeneficiaryEntityWhereUniqueInput.schema';
import { BeneficiaryEntityUpdateWithoutCityInputObjectSchema } from './BeneficiaryEntityUpdateWithoutCityInput.schema';
import { BeneficiaryEntityUncheckedUpdateWithoutCityInputObjectSchema } from './BeneficiaryEntityUncheckedUpdateWithoutCityInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BeneficiaryEntityUpdateWithWhereUniqueWithoutCityInput> =
  z
    .object({
      where: z.lazy(() => BeneficiaryEntityWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => BeneficiaryEntityUpdateWithoutCityInputObjectSchema),
        z.lazy(
          () => BeneficiaryEntityUncheckedUpdateWithoutCityInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const BeneficiaryEntityUpdateWithWhereUniqueWithoutCityInputObjectSchema =
  Schema;
