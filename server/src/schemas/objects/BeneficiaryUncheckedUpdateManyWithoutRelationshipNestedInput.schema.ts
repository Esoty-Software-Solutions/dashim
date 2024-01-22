import { z } from 'zod';
import { BeneficiaryCreateWithoutRelationshipInputObjectSchema } from './BeneficiaryCreateWithoutRelationshipInput.schema';
import { BeneficiaryUncheckedCreateWithoutRelationshipInputObjectSchema } from './BeneficiaryUncheckedCreateWithoutRelationshipInput.schema';
import { BeneficiaryCreateOrConnectWithoutRelationshipInputObjectSchema } from './BeneficiaryCreateOrConnectWithoutRelationshipInput.schema';
import { BeneficiaryUpsertWithWhereUniqueWithoutRelationshipInputObjectSchema } from './BeneficiaryUpsertWithWhereUniqueWithoutRelationshipInput.schema';
import { BeneficiaryCreateManyRelationshipInputEnvelopeObjectSchema } from './BeneficiaryCreateManyRelationshipInputEnvelope.schema';
import { BeneficiaryWhereUniqueInputObjectSchema } from './BeneficiaryWhereUniqueInput.schema';
import { BeneficiaryUpdateWithWhereUniqueWithoutRelationshipInputObjectSchema } from './BeneficiaryUpdateWithWhereUniqueWithoutRelationshipInput.schema';
import { BeneficiaryUpdateManyWithWhereWithoutRelationshipInputObjectSchema } from './BeneficiaryUpdateManyWithWhereWithoutRelationshipInput.schema';
import { BeneficiaryScalarWhereInputObjectSchema } from './BeneficiaryScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BeneficiaryUncheckedUpdateManyWithoutRelationshipNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => BeneficiaryCreateWithoutRelationshipInputObjectSchema),
          z
            .lazy(() => BeneficiaryCreateWithoutRelationshipInputObjectSchema)
            .array(),
          z.lazy(
            () =>
              BeneficiaryUncheckedCreateWithoutRelationshipInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                BeneficiaryUncheckedCreateWithoutRelationshipInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(
            () =>
              BeneficiaryCreateOrConnectWithoutRelationshipInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                BeneficiaryCreateOrConnectWithoutRelationshipInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(
            () =>
              BeneficiaryUpsertWithWhereUniqueWithoutRelationshipInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                BeneficiaryUpsertWithWhereUniqueWithoutRelationshipInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => BeneficiaryCreateManyRelationshipInputEnvelopeObjectSchema)
        .optional(),
      set: z
        .union([
          z.lazy(() => BeneficiaryWhereUniqueInputObjectSchema),
          z.lazy(() => BeneficiaryWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      disconnect: z
        .union([
          z.lazy(() => BeneficiaryWhereUniqueInputObjectSchema),
          z.lazy(() => BeneficiaryWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      delete: z
        .union([
          z.lazy(() => BeneficiaryWhereUniqueInputObjectSchema),
          z.lazy(() => BeneficiaryWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      connect: z
        .union([
          z.lazy(() => BeneficiaryWhereUniqueInputObjectSchema),
          z.lazy(() => BeneficiaryWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      update: z
        .union([
          z.lazy(
            () =>
              BeneficiaryUpdateWithWhereUniqueWithoutRelationshipInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                BeneficiaryUpdateWithWhereUniqueWithoutRelationshipInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(
            () =>
              BeneficiaryUpdateManyWithWhereWithoutRelationshipInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                BeneficiaryUpdateManyWithWhereWithoutRelationshipInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      deleteMany: z
        .union([
          z.lazy(() => BeneficiaryScalarWhereInputObjectSchema),
          z.lazy(() => BeneficiaryScalarWhereInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const BeneficiaryUncheckedUpdateManyWithoutRelationshipNestedInputObjectSchema =
  Schema;
