import { z } from 'zod';
import { BeneficiaryEntityFutureStatusChangeWhereUniqueInputObjectSchema } from './BeneficiaryEntityFutureStatusChangeWhereUniqueInput.schema';
import { BeneficiaryEntityFutureStatusChangeUpdateWithoutCreatedByInputObjectSchema } from './BeneficiaryEntityFutureStatusChangeUpdateWithoutCreatedByInput.schema';
import { BeneficiaryEntityFutureStatusChangeUncheckedUpdateWithoutCreatedByInputObjectSchema } from './BeneficiaryEntityFutureStatusChangeUncheckedUpdateWithoutCreatedByInput.schema';
import { BeneficiaryEntityFutureStatusChangeCreateWithoutCreatedByInputObjectSchema } from './BeneficiaryEntityFutureStatusChangeCreateWithoutCreatedByInput.schema';
import { BeneficiaryEntityFutureStatusChangeUncheckedCreateWithoutCreatedByInputObjectSchema } from './BeneficiaryEntityFutureStatusChangeUncheckedCreateWithoutCreatedByInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BeneficiaryEntityFutureStatusChangeUpsertWithWhereUniqueWithoutCreatedByInput> =
  z
    .object({
      where: z.lazy(
        () => BeneficiaryEntityFutureStatusChangeWhereUniqueInputObjectSchema,
      ),
      update: z.union([
        z.lazy(
          () =>
            BeneficiaryEntityFutureStatusChangeUpdateWithoutCreatedByInputObjectSchema,
        ),
        z.lazy(
          () =>
            BeneficiaryEntityFutureStatusChangeUncheckedUpdateWithoutCreatedByInputObjectSchema,
        ),
      ]),
      create: z.union([
        z.lazy(
          () =>
            BeneficiaryEntityFutureStatusChangeCreateWithoutCreatedByInputObjectSchema,
        ),
        z.lazy(
          () =>
            BeneficiaryEntityFutureStatusChangeUncheckedCreateWithoutCreatedByInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const BeneficiaryEntityFutureStatusChangeUpsertWithWhereUniqueWithoutCreatedByInputObjectSchema =
  Schema;
