import { z } from 'zod';
import { BeneficiaryWhereUniqueInputObjectSchema } from './BeneficiaryWhereUniqueInput.schema';
import { BeneficiaryUpdateWithoutStatusSetByInputObjectSchema } from './BeneficiaryUpdateWithoutStatusSetByInput.schema';
import { BeneficiaryUncheckedUpdateWithoutStatusSetByInputObjectSchema } from './BeneficiaryUncheckedUpdateWithoutStatusSetByInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BeneficiaryUpdateWithWhereUniqueWithoutStatusSetByInput> =
  z
    .object({
      where: z.lazy(() => BeneficiaryWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => BeneficiaryUpdateWithoutStatusSetByInputObjectSchema),
        z.lazy(
          () => BeneficiaryUncheckedUpdateWithoutStatusSetByInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const BeneficiaryUpdateWithWhereUniqueWithoutStatusSetByInputObjectSchema =
  Schema;
