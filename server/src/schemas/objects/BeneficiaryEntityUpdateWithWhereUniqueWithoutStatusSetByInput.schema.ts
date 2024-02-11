import { z } from 'zod';
import { BeneficiaryEntityWhereUniqueInputObjectSchema } from './BeneficiaryEntityWhereUniqueInput.schema';
import { BeneficiaryEntityUpdateWithoutStatusSetByInputObjectSchema } from './BeneficiaryEntityUpdateWithoutStatusSetByInput.schema';
import { BeneficiaryEntityUncheckedUpdateWithoutStatusSetByInputObjectSchema } from './BeneficiaryEntityUncheckedUpdateWithoutStatusSetByInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BeneficiaryEntityUpdateWithWhereUniqueWithoutStatusSetByInput> =
  z
    .object({
      where: z.lazy(() => BeneficiaryEntityWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(
          () => BeneficiaryEntityUpdateWithoutStatusSetByInputObjectSchema,
        ),
        z.lazy(
          () =>
            BeneficiaryEntityUncheckedUpdateWithoutStatusSetByInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const BeneficiaryEntityUpdateWithWhereUniqueWithoutStatusSetByInputObjectSchema =
  Schema;
