import { z } from 'zod';
import { BeneficiaryServiceCreateWithoutCreatedByInputObjectSchema } from './BeneficiaryServiceCreateWithoutCreatedByInput.schema';
import { BeneficiaryServiceUncheckedCreateWithoutCreatedByInputObjectSchema } from './BeneficiaryServiceUncheckedCreateWithoutCreatedByInput.schema';
import { BeneficiaryServiceCreateOrConnectWithoutCreatedByInputObjectSchema } from './BeneficiaryServiceCreateOrConnectWithoutCreatedByInput.schema';
import { BeneficiaryServiceCreateManyCreatedByInputEnvelopeObjectSchema } from './BeneficiaryServiceCreateManyCreatedByInputEnvelope.schema';
import { BeneficiaryServiceWhereUniqueInputObjectSchema } from './BeneficiaryServiceWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BeneficiaryServiceUncheckedCreateNestedManyWithoutCreatedByInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(
            () => BeneficiaryServiceCreateWithoutCreatedByInputObjectSchema,
          ),
          z
            .lazy(
              () => BeneficiaryServiceCreateWithoutCreatedByInputObjectSchema,
            )
            .array(),
          z.lazy(
            () =>
              BeneficiaryServiceUncheckedCreateWithoutCreatedByInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                BeneficiaryServiceUncheckedCreateWithoutCreatedByInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(
            () =>
              BeneficiaryServiceCreateOrConnectWithoutCreatedByInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                BeneficiaryServiceCreateOrConnectWithoutCreatedByInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(
          () => BeneficiaryServiceCreateManyCreatedByInputEnvelopeObjectSchema,
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

export const BeneficiaryServiceUncheckedCreateNestedManyWithoutCreatedByInputObjectSchema =
  Schema;
