import { z } from 'zod';
import { BeneficiaryFutureStatusChangeCreateWithoutUpdatedByInputObjectSchema } from './BeneficiaryFutureStatusChangeCreateWithoutUpdatedByInput.schema';
import { BeneficiaryFutureStatusChangeUncheckedCreateWithoutUpdatedByInputObjectSchema } from './BeneficiaryFutureStatusChangeUncheckedCreateWithoutUpdatedByInput.schema';
import { BeneficiaryFutureStatusChangeCreateOrConnectWithoutUpdatedByInputObjectSchema } from './BeneficiaryFutureStatusChangeCreateOrConnectWithoutUpdatedByInput.schema';
import { BeneficiaryFutureStatusChangeCreateManyUpdatedByInputEnvelopeObjectSchema } from './BeneficiaryFutureStatusChangeCreateManyUpdatedByInputEnvelope.schema';
import { BeneficiaryFutureStatusChangeWhereUniqueInputObjectSchema } from './BeneficiaryFutureStatusChangeWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BeneficiaryFutureStatusChangeCreateNestedManyWithoutUpdatedByInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(
            () =>
              BeneficiaryFutureStatusChangeCreateWithoutUpdatedByInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                BeneficiaryFutureStatusChangeCreateWithoutUpdatedByInputObjectSchema,
            )
            .array(),
          z.lazy(
            () =>
              BeneficiaryFutureStatusChangeUncheckedCreateWithoutUpdatedByInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                BeneficiaryFutureStatusChangeUncheckedCreateWithoutUpdatedByInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(
            () =>
              BeneficiaryFutureStatusChangeCreateOrConnectWithoutUpdatedByInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                BeneficiaryFutureStatusChangeCreateOrConnectWithoutUpdatedByInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(
          () =>
            BeneficiaryFutureStatusChangeCreateManyUpdatedByInputEnvelopeObjectSchema,
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

export const BeneficiaryFutureStatusChangeCreateNestedManyWithoutUpdatedByInputObjectSchema =
  Schema;
