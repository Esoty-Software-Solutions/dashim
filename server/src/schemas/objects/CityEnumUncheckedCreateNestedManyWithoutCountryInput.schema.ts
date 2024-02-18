import { z } from 'zod';
import { CityEnumCreateWithoutCountryInputObjectSchema } from './CityEnumCreateWithoutCountryInput.schema';
import { CityEnumUncheckedCreateWithoutCountryInputObjectSchema } from './CityEnumUncheckedCreateWithoutCountryInput.schema';
import { CityEnumCreateOrConnectWithoutCountryInputObjectSchema } from './CityEnumCreateOrConnectWithoutCountryInput.schema';
import { CityEnumCreateManyCountryInputEnvelopeObjectSchema } from './CityEnumCreateManyCountryInputEnvelope.schema';
import { CityEnumWhereUniqueInputObjectSchema } from './CityEnumWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CityEnumUncheckedCreateNestedManyWithoutCountryInput> =
  z
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
      createMany: z
        .lazy(() => CityEnumCreateManyCountryInputEnvelopeObjectSchema)
        .optional(),
      connect: z
        .union([
          z.lazy(() => CityEnumWhereUniqueInputObjectSchema),
          z.lazy(() => CityEnumWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const CityEnumUncheckedCreateNestedManyWithoutCountryInputObjectSchema =
  Schema;
