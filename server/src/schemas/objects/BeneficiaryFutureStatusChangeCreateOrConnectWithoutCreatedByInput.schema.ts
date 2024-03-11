import { z } from 'zod';
import { BeneficiaryFutureStatusChangeWhereUniqueInputObjectSchema } from './BeneficiaryFutureStatusChangeWhereUniqueInput.schema';
import { BeneficiaryFutureStatusChangeCreateWithoutCreatedByInputObjectSchema } from './BeneficiaryFutureStatusChangeCreateWithoutCreatedByInput.schema';
import { BeneficiaryFutureStatusChangeUncheckedCreateWithoutCreatedByInputObjectSchema } from './BeneficiaryFutureStatusChangeUncheckedCreateWithoutCreatedByInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BeneficiaryFutureStatusChangeCreateOrConnectWithoutCreatedByInput> =
  z
    .object({
      where: z.lazy(
        () => BeneficiaryFutureStatusChangeWhereUniqueInputObjectSchema,
      ),
      create: z.union([
        z.lazy(
          () =>
            BeneficiaryFutureStatusChangeCreateWithoutCreatedByInputObjectSchema,
        ),
        z.lazy(
          () =>
            BeneficiaryFutureStatusChangeUncheckedCreateWithoutCreatedByInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const BeneficiaryFutureStatusChangeCreateOrConnectWithoutCreatedByInputObjectSchema =
  Schema;
