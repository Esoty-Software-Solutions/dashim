import { z } from 'zod';
import { BeneficiaryCreateWithoutGenderInputObjectSchema } from './BeneficiaryCreateWithoutGenderInput.schema';
import { BeneficiaryUncheckedCreateWithoutGenderInputObjectSchema } from './BeneficiaryUncheckedCreateWithoutGenderInput.schema';
import { BeneficiaryCreateOrConnectWithoutGenderInputObjectSchema } from './BeneficiaryCreateOrConnectWithoutGenderInput.schema';
import { BeneficiaryUpsertWithWhereUniqueWithoutGenderInputObjectSchema } from './BeneficiaryUpsertWithWhereUniqueWithoutGenderInput.schema';
import { BeneficiaryCreateManyGenderInputEnvelopeObjectSchema } from './BeneficiaryCreateManyGenderInputEnvelope.schema';
import { BeneficiaryWhereUniqueInputObjectSchema } from './BeneficiaryWhereUniqueInput.schema';
import { BeneficiaryUpdateWithWhereUniqueWithoutGenderInputObjectSchema } from './BeneficiaryUpdateWithWhereUniqueWithoutGenderInput.schema';
import { BeneficiaryUpdateManyWithWhereWithoutGenderInputObjectSchema } from './BeneficiaryUpdateManyWithWhereWithoutGenderInput.schema';
import { BeneficiaryScalarWhereInputObjectSchema } from './BeneficiaryScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BeneficiaryUncheckedUpdateManyWithoutGenderNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => BeneficiaryCreateWithoutGenderInputObjectSchema),
          z.lazy(() => BeneficiaryCreateWithoutGenderInputObjectSchema).array(),
          z.lazy(
            () => BeneficiaryUncheckedCreateWithoutGenderInputObjectSchema,
          ),
          z
            .lazy(
              () => BeneficiaryUncheckedCreateWithoutGenderInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(
            () => BeneficiaryCreateOrConnectWithoutGenderInputObjectSchema,
          ),
          z
            .lazy(
              () => BeneficiaryCreateOrConnectWithoutGenderInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(
            () =>
              BeneficiaryUpsertWithWhereUniqueWithoutGenderInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                BeneficiaryUpsertWithWhereUniqueWithoutGenderInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => BeneficiaryCreateManyGenderInputEnvelopeObjectSchema)
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
              BeneficiaryUpdateWithWhereUniqueWithoutGenderInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                BeneficiaryUpdateWithWhereUniqueWithoutGenderInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(
            () => BeneficiaryUpdateManyWithWhereWithoutGenderInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                BeneficiaryUpdateManyWithWhereWithoutGenderInputObjectSchema,
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

export const BeneficiaryUncheckedUpdateManyWithoutGenderNestedInputObjectSchema =
  Schema;
