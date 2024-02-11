import { z } from 'zod';
import { BeneficiaryEntityCreateWithoutStatusSetByInputObjectSchema } from './BeneficiaryEntityCreateWithoutStatusSetByInput.schema';
import { BeneficiaryEntityUncheckedCreateWithoutStatusSetByInputObjectSchema } from './BeneficiaryEntityUncheckedCreateWithoutStatusSetByInput.schema';
import { BeneficiaryEntityCreateOrConnectWithoutStatusSetByInputObjectSchema } from './BeneficiaryEntityCreateOrConnectWithoutStatusSetByInput.schema';
import { BeneficiaryEntityUpsertWithWhereUniqueWithoutStatusSetByInputObjectSchema } from './BeneficiaryEntityUpsertWithWhereUniqueWithoutStatusSetByInput.schema';
import { BeneficiaryEntityCreateManyStatusSetByInputEnvelopeObjectSchema } from './BeneficiaryEntityCreateManyStatusSetByInputEnvelope.schema';
import { BeneficiaryEntityWhereUniqueInputObjectSchema } from './BeneficiaryEntityWhereUniqueInput.schema';
import { BeneficiaryEntityUpdateWithWhereUniqueWithoutStatusSetByInputObjectSchema } from './BeneficiaryEntityUpdateWithWhereUniqueWithoutStatusSetByInput.schema';
import { BeneficiaryEntityUpdateManyWithWhereWithoutStatusSetByInputObjectSchema } from './BeneficiaryEntityUpdateManyWithWhereWithoutStatusSetByInput.schema';
import { BeneficiaryEntityScalarWhereInputObjectSchema } from './BeneficiaryEntityScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BeneficiaryEntityUncheckedUpdateManyWithoutStatusSetByNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(
            () => BeneficiaryEntityCreateWithoutStatusSetByInputObjectSchema,
          ),
          z
            .lazy(
              () => BeneficiaryEntityCreateWithoutStatusSetByInputObjectSchema,
            )
            .array(),
          z.lazy(
            () =>
              BeneficiaryEntityUncheckedCreateWithoutStatusSetByInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                BeneficiaryEntityUncheckedCreateWithoutStatusSetByInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(
            () =>
              BeneficiaryEntityCreateOrConnectWithoutStatusSetByInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                BeneficiaryEntityCreateOrConnectWithoutStatusSetByInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(
            () =>
              BeneficiaryEntityUpsertWithWhereUniqueWithoutStatusSetByInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                BeneficiaryEntityUpsertWithWhereUniqueWithoutStatusSetByInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(
          () => BeneficiaryEntityCreateManyStatusSetByInputEnvelopeObjectSchema,
        )
        .optional(),
      set: z
        .union([
          z.lazy(() => BeneficiaryEntityWhereUniqueInputObjectSchema),
          z.lazy(() => BeneficiaryEntityWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      disconnect: z
        .union([
          z.lazy(() => BeneficiaryEntityWhereUniqueInputObjectSchema),
          z.lazy(() => BeneficiaryEntityWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      delete: z
        .union([
          z.lazy(() => BeneficiaryEntityWhereUniqueInputObjectSchema),
          z.lazy(() => BeneficiaryEntityWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      connect: z
        .union([
          z.lazy(() => BeneficiaryEntityWhereUniqueInputObjectSchema),
          z.lazy(() => BeneficiaryEntityWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      update: z
        .union([
          z.lazy(
            () =>
              BeneficiaryEntityUpdateWithWhereUniqueWithoutStatusSetByInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                BeneficiaryEntityUpdateWithWhereUniqueWithoutStatusSetByInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(
            () =>
              BeneficiaryEntityUpdateManyWithWhereWithoutStatusSetByInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                BeneficiaryEntityUpdateManyWithWhereWithoutStatusSetByInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      deleteMany: z
        .union([
          z.lazy(() => BeneficiaryEntityScalarWhereInputObjectSchema),
          z.lazy(() => BeneficiaryEntityScalarWhereInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const BeneficiaryEntityUncheckedUpdateManyWithoutStatusSetByNestedInputObjectSchema =
  Schema;
