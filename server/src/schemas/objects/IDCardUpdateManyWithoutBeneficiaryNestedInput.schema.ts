import { z } from 'zod';
import { IDCardCreateWithoutBeneficiaryInputObjectSchema } from './IDCardCreateWithoutBeneficiaryInput.schema';
import { IDCardUncheckedCreateWithoutBeneficiaryInputObjectSchema } from './IDCardUncheckedCreateWithoutBeneficiaryInput.schema';
import { IDCardCreateOrConnectWithoutBeneficiaryInputObjectSchema } from './IDCardCreateOrConnectWithoutBeneficiaryInput.schema';
import { IDCardUpsertWithWhereUniqueWithoutBeneficiaryInputObjectSchema } from './IDCardUpsertWithWhereUniqueWithoutBeneficiaryInput.schema';
import { IDCardCreateManyBeneficiaryInputEnvelopeObjectSchema } from './IDCardCreateManyBeneficiaryInputEnvelope.schema';
import { IDCardWhereUniqueInputObjectSchema } from './IDCardWhereUniqueInput.schema';
import { IDCardUpdateWithWhereUniqueWithoutBeneficiaryInputObjectSchema } from './IDCardUpdateWithWhereUniqueWithoutBeneficiaryInput.schema';
import { IDCardUpdateManyWithWhereWithoutBeneficiaryInputObjectSchema } from './IDCardUpdateManyWithWhereWithoutBeneficiaryInput.schema';
import { IDCardScalarWhereInputObjectSchema } from './IDCardScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.IDCardUpdateManyWithoutBeneficiaryNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => IDCardCreateWithoutBeneficiaryInputObjectSchema),
          z.lazy(() => IDCardCreateWithoutBeneficiaryInputObjectSchema).array(),
          z.lazy(
            () => IDCardUncheckedCreateWithoutBeneficiaryInputObjectSchema,
          ),
          z
            .lazy(
              () => IDCardUncheckedCreateWithoutBeneficiaryInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(
            () => IDCardCreateOrConnectWithoutBeneficiaryInputObjectSchema,
          ),
          z
            .lazy(
              () => IDCardCreateOrConnectWithoutBeneficiaryInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(
            () =>
              IDCardUpsertWithWhereUniqueWithoutBeneficiaryInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                IDCardUpsertWithWhereUniqueWithoutBeneficiaryInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => IDCardCreateManyBeneficiaryInputEnvelopeObjectSchema)
        .optional(),
      set: z
        .union([
          z.lazy(() => IDCardWhereUniqueInputObjectSchema),
          z.lazy(() => IDCardWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      disconnect: z
        .union([
          z.lazy(() => IDCardWhereUniqueInputObjectSchema),
          z.lazy(() => IDCardWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      delete: z
        .union([
          z.lazy(() => IDCardWhereUniqueInputObjectSchema),
          z.lazy(() => IDCardWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      connect: z
        .union([
          z.lazy(() => IDCardWhereUniqueInputObjectSchema),
          z.lazy(() => IDCardWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      update: z
        .union([
          z.lazy(
            () =>
              IDCardUpdateWithWhereUniqueWithoutBeneficiaryInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                IDCardUpdateWithWhereUniqueWithoutBeneficiaryInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(
            () => IDCardUpdateManyWithWhereWithoutBeneficiaryInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                IDCardUpdateManyWithWhereWithoutBeneficiaryInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      deleteMany: z
        .union([
          z.lazy(() => IDCardScalarWhereInputObjectSchema),
          z.lazy(() => IDCardScalarWhereInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const IDCardUpdateManyWithoutBeneficiaryNestedInputObjectSchema = Schema;
