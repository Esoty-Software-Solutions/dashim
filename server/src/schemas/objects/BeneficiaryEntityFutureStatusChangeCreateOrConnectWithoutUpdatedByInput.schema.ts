import { z } from 'zod';
import { BeneficiaryEntityFutureStatusChangeWhereUniqueInputObjectSchema } from './BeneficiaryEntityFutureStatusChangeWhereUniqueInput.schema';
import { BeneficiaryEntityFutureStatusChangeCreateWithoutUpdatedByInputObjectSchema } from './BeneficiaryEntityFutureStatusChangeCreateWithoutUpdatedByInput.schema';
import { BeneficiaryEntityFutureStatusChangeUncheckedCreateWithoutUpdatedByInputObjectSchema } from './BeneficiaryEntityFutureStatusChangeUncheckedCreateWithoutUpdatedByInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BeneficiaryEntityFutureStatusChangeCreateOrConnectWithoutUpdatedByInput> =
  z
    .object({
      where: z.lazy(
        () => BeneficiaryEntityFutureStatusChangeWhereUniqueInputObjectSchema,
      ),
      create: z.union([
        z.lazy(
          () =>
            BeneficiaryEntityFutureStatusChangeCreateWithoutUpdatedByInputObjectSchema,
        ),
        z.lazy(
          () =>
            BeneficiaryEntityFutureStatusChangeUncheckedCreateWithoutUpdatedByInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const BeneficiaryEntityFutureStatusChangeCreateOrConnectWithoutUpdatedByInputObjectSchema =
  Schema;
