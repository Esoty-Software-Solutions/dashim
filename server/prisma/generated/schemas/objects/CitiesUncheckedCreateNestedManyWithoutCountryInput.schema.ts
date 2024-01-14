import { z } from 'zod';
import { CitiesCreateWithoutCountryInputObjectSchema } from './CitiesCreateWithoutCountryInput.schema';
import { CitiesUncheckedCreateWithoutCountryInputObjectSchema } from './CitiesUncheckedCreateWithoutCountryInput.schema';
import { CitiesCreateOrConnectWithoutCountryInputObjectSchema } from './CitiesCreateOrConnectWithoutCountryInput.schema';
import { CitiesCreateManyCountryInputEnvelopeObjectSchema } from './CitiesCreateManyCountryInputEnvelope.schema';
import { CitiesWhereUniqueInputObjectSchema } from './CitiesWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CitiesUncheckedCreateNestedManyWithoutCountryInput> =
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
      createMany: z
        .lazy(() => CitiesCreateManyCountryInputEnvelopeObjectSchema)
        .optional(),
      connect: z
        .union([
          z.lazy(() => CitiesWhereUniqueInputObjectSchema),
          z.lazy(() => CitiesWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const CitiesUncheckedCreateNestedManyWithoutCountryInputObjectSchema =
  Schema;
