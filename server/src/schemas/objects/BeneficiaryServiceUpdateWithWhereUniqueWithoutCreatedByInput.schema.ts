import { z } from 'zod';
import { BeneficiaryServiceWhereUniqueInputObjectSchema } from './BeneficiaryServiceWhereUniqueInput.schema';
import { BeneficiaryServiceUpdateWithoutCreatedByInputObjectSchema } from './BeneficiaryServiceUpdateWithoutCreatedByInput.schema';
import { BeneficiaryServiceUncheckedUpdateWithoutCreatedByInputObjectSchema } from './BeneficiaryServiceUncheckedUpdateWithoutCreatedByInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BeneficiaryServiceUpdateWithWhereUniqueWithoutCreatedByInput> =
  z
    .object({
      where: z.lazy(() => BeneficiaryServiceWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => BeneficiaryServiceUpdateWithoutCreatedByInputObjectSchema),
        z.lazy(
          () =>
            BeneficiaryServiceUncheckedUpdateWithoutCreatedByInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const BeneficiaryServiceUpdateWithWhereUniqueWithoutCreatedByInputObjectSchema =
  Schema;
