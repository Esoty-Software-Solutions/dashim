import { z } from 'zod';
import { BeneficiaryFutureStatusChangeWhereUniqueInputObjectSchema } from './BeneficiaryFutureStatusChangeWhereUniqueInput.schema';
import { BeneficiaryFutureStatusChangeCreateWithoutUpdatedByInputObjectSchema } from './BeneficiaryFutureStatusChangeCreateWithoutUpdatedByInput.schema';
import { BeneficiaryFutureStatusChangeUncheckedCreateWithoutUpdatedByInputObjectSchema } from './BeneficiaryFutureStatusChangeUncheckedCreateWithoutUpdatedByInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BeneficiaryFutureStatusChangeCreateOrConnectWithoutUpdatedByInput> =
  z
    .object({
      where: z.lazy(
        () => BeneficiaryFutureStatusChangeWhereUniqueInputObjectSchema,
      ),
      create: z.union([
        z.lazy(
          () =>
            BeneficiaryFutureStatusChangeCreateWithoutUpdatedByInputObjectSchema,
        ),
        z.lazy(
          () =>
            BeneficiaryFutureStatusChangeUncheckedCreateWithoutUpdatedByInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const BeneficiaryFutureStatusChangeCreateOrConnectWithoutUpdatedByInputObjectSchema =
  Schema;
