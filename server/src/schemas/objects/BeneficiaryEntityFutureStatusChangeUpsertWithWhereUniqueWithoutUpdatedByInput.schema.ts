import { z } from 'zod';
import { BeneficiaryEntityFutureStatusChangeWhereUniqueInputObjectSchema } from './BeneficiaryEntityFutureStatusChangeWhereUniqueInput.schema';
import { BeneficiaryEntityFutureStatusChangeUpdateWithoutUpdatedByInputObjectSchema } from './BeneficiaryEntityFutureStatusChangeUpdateWithoutUpdatedByInput.schema';
import { BeneficiaryEntityFutureStatusChangeUncheckedUpdateWithoutUpdatedByInputObjectSchema } from './BeneficiaryEntityFutureStatusChangeUncheckedUpdateWithoutUpdatedByInput.schema';
import { BeneficiaryEntityFutureStatusChangeCreateWithoutUpdatedByInputObjectSchema } from './BeneficiaryEntityFutureStatusChangeCreateWithoutUpdatedByInput.schema';
import { BeneficiaryEntityFutureStatusChangeUncheckedCreateWithoutUpdatedByInputObjectSchema } from './BeneficiaryEntityFutureStatusChangeUncheckedCreateWithoutUpdatedByInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BeneficiaryEntityFutureStatusChangeUpsertWithWhereUniqueWithoutUpdatedByInput> =
  z
    .object({
      where: z.lazy(
        () => BeneficiaryEntityFutureStatusChangeWhereUniqueInputObjectSchema,
      ),
      update: z.union([
        z.lazy(
          () =>
            BeneficiaryEntityFutureStatusChangeUpdateWithoutUpdatedByInputObjectSchema,
        ),
        z.lazy(
          () =>
            BeneficiaryEntityFutureStatusChangeUncheckedUpdateWithoutUpdatedByInputObjectSchema,
        ),
      ]),
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

export const BeneficiaryEntityFutureStatusChangeUpsertWithWhereUniqueWithoutUpdatedByInputObjectSchema =
  Schema;
