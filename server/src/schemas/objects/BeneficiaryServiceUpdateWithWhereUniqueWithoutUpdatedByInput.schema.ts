import { z } from 'zod';
import { BeneficiaryServiceWhereUniqueInputObjectSchema } from './BeneficiaryServiceWhereUniqueInput.schema';
import { BeneficiaryServiceUpdateWithoutUpdatedByInputObjectSchema } from './BeneficiaryServiceUpdateWithoutUpdatedByInput.schema';
import { BeneficiaryServiceUncheckedUpdateWithoutUpdatedByInputObjectSchema } from './BeneficiaryServiceUncheckedUpdateWithoutUpdatedByInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BeneficiaryServiceUpdateWithWhereUniqueWithoutUpdatedByInput> =
  z
    .object({
      where: z.lazy(() => BeneficiaryServiceWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => BeneficiaryServiceUpdateWithoutUpdatedByInputObjectSchema),
        z.lazy(
          () =>
            BeneficiaryServiceUncheckedUpdateWithoutUpdatedByInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const BeneficiaryServiceUpdateWithWhereUniqueWithoutUpdatedByInputObjectSchema =
  Schema;
