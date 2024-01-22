import { z } from 'zod';
import { BeneficiaryFutureStatusChangeCreateWithoutCreatedByInputObjectSchema } from './BeneficiaryFutureStatusChangeCreateWithoutCreatedByInput.schema';
import { BeneficiaryFutureStatusChangeUncheckedCreateWithoutCreatedByInputObjectSchema } from './BeneficiaryFutureStatusChangeUncheckedCreateWithoutCreatedByInput.schema';
import { BeneficiaryFutureStatusChangeCreateOrConnectWithoutCreatedByInputObjectSchema } from './BeneficiaryFutureStatusChangeCreateOrConnectWithoutCreatedByInput.schema';
import { BeneficiaryFutureStatusChangeCreateManyCreatedByInputEnvelopeObjectSchema } from './BeneficiaryFutureStatusChangeCreateManyCreatedByInputEnvelope.schema';
import { BeneficiaryFutureStatusChangeWhereUniqueInputObjectSchema } from './BeneficiaryFutureStatusChangeWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BeneficiaryFutureStatusChangeCreateNestedManyWithoutCreatedByInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(
            () =>
              BeneficiaryFutureStatusChangeCreateWithoutCreatedByInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                BeneficiaryFutureStatusChangeCreateWithoutCreatedByInputObjectSchema,
            )
            .array(),
          z.lazy(
            () =>
              BeneficiaryFutureStatusChangeUncheckedCreateWithoutCreatedByInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                BeneficiaryFutureStatusChangeUncheckedCreateWithoutCreatedByInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(
            () =>
              BeneficiaryFutureStatusChangeCreateOrConnectWithoutCreatedByInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                BeneficiaryFutureStatusChangeCreateOrConnectWithoutCreatedByInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(
          () =>
            BeneficiaryFutureStatusChangeCreateManyCreatedByInputEnvelopeObjectSchema,
        )
        .optional(),
      connect: z
        .union([
          z.lazy(
            () => BeneficiaryFutureStatusChangeWhereUniqueInputObjectSchema,
          ),
          z
            .lazy(
              () => BeneficiaryFutureStatusChangeWhereUniqueInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
    })
    .strict();

export const BeneficiaryFutureStatusChangeCreateNestedManyWithoutCreatedByInputObjectSchema =
  Schema;
