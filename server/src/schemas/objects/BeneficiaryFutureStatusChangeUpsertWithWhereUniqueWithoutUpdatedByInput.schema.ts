import { z } from 'zod';
import { BeneficiaryFutureStatusChangeWhereUniqueInputObjectSchema } from './BeneficiaryFutureStatusChangeWhereUniqueInput.schema';
import { BeneficiaryFutureStatusChangeUpdateWithoutUpdatedByInputObjectSchema } from './BeneficiaryFutureStatusChangeUpdateWithoutUpdatedByInput.schema';
import { BeneficiaryFutureStatusChangeUncheckedUpdateWithoutUpdatedByInputObjectSchema } from './BeneficiaryFutureStatusChangeUncheckedUpdateWithoutUpdatedByInput.schema';
import { BeneficiaryFutureStatusChangeCreateWithoutUpdatedByInputObjectSchema } from './BeneficiaryFutureStatusChangeCreateWithoutUpdatedByInput.schema';
import { BeneficiaryFutureStatusChangeUncheckedCreateWithoutUpdatedByInputObjectSchema } from './BeneficiaryFutureStatusChangeUncheckedCreateWithoutUpdatedByInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BeneficiaryFutureStatusChangeUpsertWithWhereUniqueWithoutUpdatedByInput> =
  z
    .object({
      where: z.lazy(
        () => BeneficiaryFutureStatusChangeWhereUniqueInputObjectSchema,
      ),
      update: z.union([
        z.lazy(
          () =>
            BeneficiaryFutureStatusChangeUpdateWithoutUpdatedByInputObjectSchema,
        ),
        z.lazy(
          () =>
            BeneficiaryFutureStatusChangeUncheckedUpdateWithoutUpdatedByInputObjectSchema,
        ),
      ]),
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

export const BeneficiaryFutureStatusChangeUpsertWithWhereUniqueWithoutUpdatedByInputObjectSchema =
  Schema;
