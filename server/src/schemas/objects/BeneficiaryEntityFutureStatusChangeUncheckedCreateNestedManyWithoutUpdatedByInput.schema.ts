import { z } from 'zod';
import { BeneficiaryEntityFutureStatusChangeCreateWithoutUpdatedByInputObjectSchema } from './BeneficiaryEntityFutureStatusChangeCreateWithoutUpdatedByInput.schema';
import { BeneficiaryEntityFutureStatusChangeUncheckedCreateWithoutUpdatedByInputObjectSchema } from './BeneficiaryEntityFutureStatusChangeUncheckedCreateWithoutUpdatedByInput.schema';
import { BeneficiaryEntityFutureStatusChangeCreateOrConnectWithoutUpdatedByInputObjectSchema } from './BeneficiaryEntityFutureStatusChangeCreateOrConnectWithoutUpdatedByInput.schema';
import { BeneficiaryEntityFutureStatusChangeCreateManyUpdatedByInputEnvelopeObjectSchema } from './BeneficiaryEntityFutureStatusChangeCreateManyUpdatedByInputEnvelope.schema';
import { BeneficiaryEntityFutureStatusChangeWhereUniqueInputObjectSchema } from './BeneficiaryEntityFutureStatusChangeWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BeneficiaryEntityFutureStatusChangeUncheckedCreateNestedManyWithoutUpdatedByInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(
            () =>
              BeneficiaryEntityFutureStatusChangeCreateWithoutUpdatedByInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                BeneficiaryEntityFutureStatusChangeCreateWithoutUpdatedByInputObjectSchema,
            )
            .array(),
          z.lazy(
            () =>
              BeneficiaryEntityFutureStatusChangeUncheckedCreateWithoutUpdatedByInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                BeneficiaryEntityFutureStatusChangeUncheckedCreateWithoutUpdatedByInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(
            () =>
              BeneficiaryEntityFutureStatusChangeCreateOrConnectWithoutUpdatedByInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                BeneficiaryEntityFutureStatusChangeCreateOrConnectWithoutUpdatedByInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(
          () =>
            BeneficiaryEntityFutureStatusChangeCreateManyUpdatedByInputEnvelopeObjectSchema,
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

export const BeneficiaryEntityFutureStatusChangeUncheckedCreateNestedManyWithoutUpdatedByInputObjectSchema =
  Schema;
