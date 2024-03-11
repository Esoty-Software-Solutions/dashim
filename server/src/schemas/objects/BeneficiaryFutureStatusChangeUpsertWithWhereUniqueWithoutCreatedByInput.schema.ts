import { z } from 'zod';
import { BeneficiaryFutureStatusChangeWhereUniqueInputObjectSchema } from './BeneficiaryFutureStatusChangeWhereUniqueInput.schema';
import { BeneficiaryFutureStatusChangeUpdateWithoutCreatedByInputObjectSchema } from './BeneficiaryFutureStatusChangeUpdateWithoutCreatedByInput.schema';
import { BeneficiaryFutureStatusChangeUncheckedUpdateWithoutCreatedByInputObjectSchema } from './BeneficiaryFutureStatusChangeUncheckedUpdateWithoutCreatedByInput.schema';
import { BeneficiaryFutureStatusChangeCreateWithoutCreatedByInputObjectSchema } from './BeneficiaryFutureStatusChangeCreateWithoutCreatedByInput.schema';
import { BeneficiaryFutureStatusChangeUncheckedCreateWithoutCreatedByInputObjectSchema } from './BeneficiaryFutureStatusChangeUncheckedCreateWithoutCreatedByInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BeneficiaryFutureStatusChangeUpsertWithWhereUniqueWithoutCreatedByInput> =
  z
    .object({
      where: z.lazy(
        () => BeneficiaryFutureStatusChangeWhereUniqueInputObjectSchema,
      ),
      update: z.union([
        z.lazy(
          () =>
            BeneficiaryFutureStatusChangeUpdateWithoutCreatedByInputObjectSchema,
        ),
        z.lazy(
          () =>
            BeneficiaryFutureStatusChangeUncheckedUpdateWithoutCreatedByInputObjectSchema,
        ),
      ]),
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

export const BeneficiaryFutureStatusChangeUpsertWithWhereUniqueWithoutCreatedByInputObjectSchema =
  Schema;
