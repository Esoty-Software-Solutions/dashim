import { z } from 'zod';
import { BeneficiaryWhereUniqueInputObjectSchema } from './BeneficiaryWhereUniqueInput.schema';
import { BeneficiaryUpdateWithoutStatusSetByInputObjectSchema } from './BeneficiaryUpdateWithoutStatusSetByInput.schema';
import { BeneficiaryUncheckedUpdateWithoutStatusSetByInputObjectSchema } from './BeneficiaryUncheckedUpdateWithoutStatusSetByInput.schema';
import { BeneficiaryCreateWithoutStatusSetByInputObjectSchema } from './BeneficiaryCreateWithoutStatusSetByInput.schema';
import { BeneficiaryUncheckedCreateWithoutStatusSetByInputObjectSchema } from './BeneficiaryUncheckedCreateWithoutStatusSetByInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BeneficiaryUpsertWithWhereUniqueWithoutStatusSetByInput> =
  z
    .object({
      where: z.lazy(() => BeneficiaryWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => BeneficiaryUpdateWithoutStatusSetByInputObjectSchema),
        z.lazy(
          () => BeneficiaryUncheckedUpdateWithoutStatusSetByInputObjectSchema,
        ),
      ]),
      create: z.union([
        z.lazy(() => BeneficiaryCreateWithoutStatusSetByInputObjectSchema),
        z.lazy(
          () => BeneficiaryUncheckedCreateWithoutStatusSetByInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const BeneficiaryUpsertWithWhereUniqueWithoutStatusSetByInputObjectSchema =
  Schema;
