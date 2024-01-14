import { z } from 'zod';
import { CitiesCreateWithoutCountryInputObjectSchema } from './CitiesCreateWithoutCountryInput.schema';
import { CitiesUncheckedCreateWithoutCountryInputObjectSchema } from './CitiesUncheckedCreateWithoutCountryInput.schema';
import { CitiesCreateOrConnectWithoutCountryInputObjectSchema } from './CitiesCreateOrConnectWithoutCountryInput.schema';
import { CitiesUpsertWithWhereUniqueWithoutCountryInputObjectSchema } from './CitiesUpsertWithWhereUniqueWithoutCountryInput.schema';
import { CitiesCreateManyCountryInputEnvelopeObjectSchema } from './CitiesCreateManyCountryInputEnvelope.schema';
import { CitiesWhereUniqueInputObjectSchema } from './CitiesWhereUniqueInput.schema';
import { CitiesUpdateWithWhereUniqueWithoutCountryInputObjectSchema } from './CitiesUpdateWithWhereUniqueWithoutCountryInput.schema';
import { CitiesUpdateManyWithWhereWithoutCountryInputObjectSchema } from './CitiesUpdateManyWithWhereWithoutCountryInput.schema';
import { CitiesScalarWhereInputObjectSchema } from './CitiesScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CitiesUncheckedUpdateManyWithoutCountryNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => CitiesCreateWithoutCountryInputObjectSchema),
          z.lazy(() => CitiesCreateWithoutCountryInputObjectSchema).array(),
          z.lazy(() => CitiesUncheckedCreateWithoutCountryInputObjectSchema),
          z
            .lazy(() => CitiesUncheckedCreateWithoutCountryInputObjectSchema)
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => CitiesCreateOrConnectWithoutCountryInputObjectSchema),
          z
            .lazy(() => CitiesCreateOrConnectWithoutCountryInputObjectSchema)
            .array(),
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(
            () => CitiesUpsertWithWhereUniqueWithoutCountryInputObjectSchema,
          ),
          z
            .lazy(
              () => CitiesUpsertWithWhereUniqueWithoutCountryInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => CitiesCreateManyCountryInputEnvelopeObjectSchema)
        .optional(),
      set: z
        .union([
          z.lazy(() => CitiesWhereUniqueInputObjectSchema),
          z.lazy(() => CitiesWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      disconnect: z
        .union([
          z.lazy(() => CitiesWhereUniqueInputObjectSchema),
          z.lazy(() => CitiesWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      delete: z
        .union([
          z.lazy(() => CitiesWhereUniqueInputObjectSchema),
          z.lazy(() => CitiesWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      connect: z
        .union([
          z.lazy(() => CitiesWhereUniqueInputObjectSchema),
          z.lazy(() => CitiesWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      update: z
        .union([
          z.lazy(
            () => CitiesUpdateWithWhereUniqueWithoutCountryInputObjectSchema,
          ),
          z
            .lazy(
              () => CitiesUpdateWithWhereUniqueWithoutCountryInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(
            () => CitiesUpdateManyWithWhereWithoutCountryInputObjectSchema,
          ),
          z
            .lazy(
              () => CitiesUpdateManyWithWhereWithoutCountryInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      deleteMany: z
        .union([
          z.lazy(() => CitiesScalarWhereInputObjectSchema),
          z.lazy(() => CitiesScalarWhereInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const CitiesUncheckedUpdateManyWithoutCountryNestedInputObjectSchema =
  Schema;
