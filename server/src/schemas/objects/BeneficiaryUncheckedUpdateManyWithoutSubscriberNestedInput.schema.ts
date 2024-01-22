import { z } from 'zod';
import { BeneficiaryCreateWithoutSubscriberInputObjectSchema } from './BeneficiaryCreateWithoutSubscriberInput.schema';
import { BeneficiaryUncheckedCreateWithoutSubscriberInputObjectSchema } from './BeneficiaryUncheckedCreateWithoutSubscriberInput.schema';
import { BeneficiaryCreateOrConnectWithoutSubscriberInputObjectSchema } from './BeneficiaryCreateOrConnectWithoutSubscriberInput.schema';
import { BeneficiaryUpsertWithWhereUniqueWithoutSubscriberInputObjectSchema } from './BeneficiaryUpsertWithWhereUniqueWithoutSubscriberInput.schema';
import { BeneficiaryCreateManySubscriberInputEnvelopeObjectSchema } from './BeneficiaryCreateManySubscriberInputEnvelope.schema';
import { BeneficiaryWhereUniqueInputObjectSchema } from './BeneficiaryWhereUniqueInput.schema';
import { BeneficiaryUpdateWithWhereUniqueWithoutSubscriberInputObjectSchema } from './BeneficiaryUpdateWithWhereUniqueWithoutSubscriberInput.schema';
import { BeneficiaryUpdateManyWithWhereWithoutSubscriberInputObjectSchema } from './BeneficiaryUpdateManyWithWhereWithoutSubscriberInput.schema';
import { BeneficiaryScalarWhereInputObjectSchema } from './BeneficiaryScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BeneficiaryUncheckedUpdateManyWithoutSubscriberNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => BeneficiaryCreateWithoutSubscriberInputObjectSchema),
          z
            .lazy(() => BeneficiaryCreateWithoutSubscriberInputObjectSchema)
            .array(),
          z.lazy(
            () => BeneficiaryUncheckedCreateWithoutSubscriberInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                BeneficiaryUncheckedCreateWithoutSubscriberInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(
            () => BeneficiaryCreateOrConnectWithoutSubscriberInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                BeneficiaryCreateOrConnectWithoutSubscriberInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(
            () =>
              BeneficiaryUpsertWithWhereUniqueWithoutSubscriberInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                BeneficiaryUpsertWithWhereUniqueWithoutSubscriberInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => BeneficiaryCreateManySubscriberInputEnvelopeObjectSchema)
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
              BeneficiaryUpdateWithWhereUniqueWithoutSubscriberInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                BeneficiaryUpdateWithWhereUniqueWithoutSubscriberInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(
            () =>
              BeneficiaryUpdateManyWithWhereWithoutSubscriberInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                BeneficiaryUpdateManyWithWhereWithoutSubscriberInputObjectSchema,
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

export const BeneficiaryUncheckedUpdateManyWithoutSubscriberNestedInputObjectSchema =
  Schema;
