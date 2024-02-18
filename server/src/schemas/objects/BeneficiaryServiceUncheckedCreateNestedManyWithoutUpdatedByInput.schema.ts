import { z } from 'zod';
import { BeneficiaryServiceCreateWithoutUpdatedByInputObjectSchema } from './BeneficiaryServiceCreateWithoutUpdatedByInput.schema';
import { BeneficiaryServiceUncheckedCreateWithoutUpdatedByInputObjectSchema } from './BeneficiaryServiceUncheckedCreateWithoutUpdatedByInput.schema';
import { BeneficiaryServiceCreateOrConnectWithoutUpdatedByInputObjectSchema } from './BeneficiaryServiceCreateOrConnectWithoutUpdatedByInput.schema';
import { BeneficiaryServiceCreateManyUpdatedByInputEnvelopeObjectSchema } from './BeneficiaryServiceCreateManyUpdatedByInputEnvelope.schema';
import { BeneficiaryServiceWhereUniqueInputObjectSchema } from './BeneficiaryServiceWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BeneficiaryServiceUncheckedCreateNestedManyWithoutUpdatedByInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(
            () => BeneficiaryServiceCreateWithoutUpdatedByInputObjectSchema,
          ),
          z
            .lazy(
              () => BeneficiaryServiceCreateWithoutUpdatedByInputObjectSchema,
            )
            .array(),
          z.lazy(
            () =>
              BeneficiaryServiceUncheckedCreateWithoutUpdatedByInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                BeneficiaryServiceUncheckedCreateWithoutUpdatedByInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(
            () =>
              BeneficiaryServiceCreateOrConnectWithoutUpdatedByInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                BeneficiaryServiceCreateOrConnectWithoutUpdatedByInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(
          () => BeneficiaryServiceCreateManyUpdatedByInputEnvelopeObjectSchema,
        )
        .optional(),
      connect: z
        .union([
          z.lazy(() => BeneficiaryServiceWhereUniqueInputObjectSchema),
          z.lazy(() => BeneficiaryServiceWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const BeneficiaryServiceUncheckedCreateNestedManyWithoutUpdatedByInputObjectSchema =
  Schema;
