import { z } from 'zod';
import { BeneficiaryServiceWhereUniqueInputObjectSchema } from './BeneficiaryServiceWhereUniqueInput.schema';
import { BeneficiaryServiceUpdateWithoutCreatedByInputObjectSchema } from './BeneficiaryServiceUpdateWithoutCreatedByInput.schema';
import { BeneficiaryServiceUncheckedUpdateWithoutCreatedByInputObjectSchema } from './BeneficiaryServiceUncheckedUpdateWithoutCreatedByInput.schema';
import { BeneficiaryServiceCreateWithoutCreatedByInputObjectSchema } from './BeneficiaryServiceCreateWithoutCreatedByInput.schema';
import { BeneficiaryServiceUncheckedCreateWithoutCreatedByInputObjectSchema } from './BeneficiaryServiceUncheckedCreateWithoutCreatedByInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BeneficiaryServiceUpsertWithWhereUniqueWithoutCreatedByInput> =
  z
    .object({
      where: z.lazy(() => BeneficiaryServiceWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => BeneficiaryServiceUpdateWithoutCreatedByInputObjectSchema),
        z.lazy(
          () =>
            BeneficiaryServiceUncheckedUpdateWithoutCreatedByInputObjectSchema,
        ),
      ]),
      create: z.union([
        z.lazy(() => BeneficiaryServiceCreateWithoutCreatedByInputObjectSchema),
        z.lazy(
          () =>
            BeneficiaryServiceUncheckedCreateWithoutCreatedByInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const BeneficiaryServiceUpsertWithWhereUniqueWithoutCreatedByInputObjectSchema =
  Schema;
