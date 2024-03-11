import { z } from 'zod';
import { CityEnumCreateWithoutCountryInputObjectSchema } from './CityEnumCreateWithoutCountryInput.schema';
import { CityEnumUncheckedCreateWithoutCountryInputObjectSchema } from './CityEnumUncheckedCreateWithoutCountryInput.schema';
import { CityEnumCreateOrConnectWithoutCountryInputObjectSchema } from './CityEnumCreateOrConnectWithoutCountryInput.schema';
import { CityEnumUpsertWithWhereUniqueWithoutCountryInputObjectSchema } from './CityEnumUpsertWithWhereUniqueWithoutCountryInput.schema';
import { CityEnumCreateManyCountryInputEnvelopeObjectSchema } from './CityEnumCreateManyCountryInputEnvelope.schema';
import { CityEnumWhereUniqueInputObjectSchema } from './CityEnumWhereUniqueInput.schema';
import { CityEnumUpdateWithWhereUniqueWithoutCountryInputObjectSchema } from './CityEnumUpdateWithWhereUniqueWithoutCountryInput.schema';
import { CityEnumUpdateManyWithWhereWithoutCountryInputObjectSchema } from './CityEnumUpdateManyWithWhereWithoutCountryInput.schema';
import { CityEnumScalarWhereInputObjectSchema } from './CityEnumScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CityEnumUpdateManyWithoutCountryNestedInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => CityEnumCreateWithoutCountryInputObjectSchema),
        z.lazy(() => CityEnumCreateWithoutCountryInputObjectSchema).array(),
        z.lazy(() => CityEnumUncheckedCreateWithoutCountryInputObjectSchema),
        z
          .lazy(() => CityEnumUncheckedCreateWithoutCountryInputObjectSchema)
          .array(),
      ])
      .optional(),
    connectOrCreate: z
      .union([
        z.lazy(() => CityEnumCreateOrConnectWithoutCountryInputObjectSchema),
        z
          .lazy(() => CityEnumCreateOrConnectWithoutCountryInputObjectSchema)
          .array(),
      ])
      .optional(),
    upsert: z
      .union([
        z.lazy(
          () => CityEnumUpsertWithWhereUniqueWithoutCountryInputObjectSchema,
        ),
        z
          .lazy(
            () => CityEnumUpsertWithWhereUniqueWithoutCountryInputObjectSchema,
          )
          .array(),
      ])
      .optional(),
    createMany: z
      .lazy(() => CityEnumCreateManyCountryInputEnvelopeObjectSchema)
      .optional(),
    set: z
      .union([
        z.lazy(() => CityEnumWhereUniqueInputObjectSchema),
        z.lazy(() => CityEnumWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    disconnect: z
      .union([
        z.lazy(() => CityEnumWhereUniqueInputObjectSchema),
        z.lazy(() => CityEnumWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    delete: z
      .union([
        z.lazy(() => CityEnumWhereUniqueInputObjectSchema),
        z.lazy(() => CityEnumWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    connect: z
      .union([
        z.lazy(() => CityEnumWhereUniqueInputObjectSchema),
        z.lazy(() => CityEnumWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    update: z
      .union([
        z.lazy(
          () => CityEnumUpdateWithWhereUniqueWithoutCountryInputObjectSchema,
        ),
        z
          .lazy(
            () => CityEnumUpdateWithWhereUniqueWithoutCountryInputObjectSchema,
          )
          .array(),
      ])
      .optional(),
    updateMany: z
      .union([
        z.lazy(
          () => CityEnumUpdateManyWithWhereWithoutCountryInputObjectSchema,
        ),
        z
          .lazy(
            () => CityEnumUpdateManyWithWhereWithoutCountryInputObjectSchema,
          )
          .array(),
      ])
      .optional(),
    deleteMany: z
      .union([
        z.lazy(() => CityEnumScalarWhereInputObjectSchema),
        z.lazy(() => CityEnumScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
  })
  .strict();

export const CityEnumUpdateManyWithoutCountryNestedInputObjectSchema = Schema;
