import { z } from 'zod';
import { BeneficiaryEntityFutureStatusChangeCreateWithoutCreatedByInputObjectSchema } from './BeneficiaryEntityFutureStatusChangeCreateWithoutCreatedByInput.schema';
import { BeneficiaryEntityFutureStatusChangeUncheckedCreateWithoutCreatedByInputObjectSchema } from './BeneficiaryEntityFutureStatusChangeUncheckedCreateWithoutCreatedByInput.schema';
import { BeneficiaryEntityFutureStatusChangeCreateOrConnectWithoutCreatedByInputObjectSchema } from './BeneficiaryEntityFutureStatusChangeCreateOrConnectWithoutCreatedByInput.schema';
import { BeneficiaryEntityFutureStatusChangeCreateManyCreatedByInputEnvelopeObjectSchema } from './BeneficiaryEntityFutureStatusChangeCreateManyCreatedByInputEnvelope.schema';
import { BeneficiaryEntityFutureStatusChangeWhereUniqueInputObjectSchema } from './BeneficiaryEntityFutureStatusChangeWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BeneficiaryEntityFutureStatusChangeCreateNestedManyWithoutCreatedByInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(
            () =>
              BeneficiaryEntityFutureStatusChangeCreateWithoutCreatedByInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                BeneficiaryEntityFutureStatusChangeCreateWithoutCreatedByInputObjectSchema,
            )
            .array(),
          z.lazy(
            () =>
              BeneficiaryEntityFutureStatusChangeUncheckedCreateWithoutCreatedByInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                BeneficiaryEntityFutureStatusChangeUncheckedCreateWithoutCreatedByInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(
            () =>
              BeneficiaryEntityFutureStatusChangeCreateOrConnectWithoutCreatedByInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                BeneficiaryEntityFutureStatusChangeCreateOrConnectWithoutCreatedByInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(
          () =>
            BeneficiaryEntityFutureStatusChangeCreateManyCreatedByInputEnvelopeObjectSchema,
        )
        .optional(),
      connect: z
        .union([
          z.lazy(
            () =>
              BeneficiaryEntityFutureStatusChangeWhereUniqueInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                BeneficiaryEntityFutureStatusChangeWhereUniqueInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
    })
    .strict();

export const BeneficiaryEntityFutureStatusChangeCreateNestedManyWithoutCreatedByInputObjectSchema =
  Schema;
