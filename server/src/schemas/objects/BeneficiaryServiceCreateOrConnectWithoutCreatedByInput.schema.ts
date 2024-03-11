import { z } from 'zod';
import { BeneficiaryServiceWhereUniqueInputObjectSchema } from './BeneficiaryServiceWhereUniqueInput.schema';
import { BeneficiaryServiceCreateWithoutCreatedByInputObjectSchema } from './BeneficiaryServiceCreateWithoutCreatedByInput.schema';
import { BeneficiaryServiceUncheckedCreateWithoutCreatedByInputObjectSchema } from './BeneficiaryServiceUncheckedCreateWithoutCreatedByInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BeneficiaryServiceCreateOrConnectWithoutCreatedByInput> =
  z
    .object({
      where: z.lazy(() => BeneficiaryServiceWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => BeneficiaryServiceCreateWithoutCreatedByInputObjectSchema),
        z.lazy(
          () =>
            BeneficiaryServiceUncheckedCreateWithoutCreatedByInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const BeneficiaryServiceCreateOrConnectWithoutCreatedByInputObjectSchema =
  Schema;
