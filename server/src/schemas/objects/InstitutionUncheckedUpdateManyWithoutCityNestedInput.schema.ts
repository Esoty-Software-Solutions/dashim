import { z } from 'zod';
import { InstitutionCreateWithoutCityInputObjectSchema } from './InstitutionCreateWithoutCityInput.schema';
import { InstitutionUncheckedCreateWithoutCityInputObjectSchema } from './InstitutionUncheckedCreateWithoutCityInput.schema';
import { InstitutionCreateOrConnectWithoutCityInputObjectSchema } from './InstitutionCreateOrConnectWithoutCityInput.schema';
import { InstitutionUpsertWithWhereUniqueWithoutCityInputObjectSchema } from './InstitutionUpsertWithWhereUniqueWithoutCityInput.schema';
import { InstitutionCreateManyCityInputEnvelopeObjectSchema } from './InstitutionCreateManyCityInputEnvelope.schema';
import { InstitutionWhereUniqueInputObjectSchema } from './InstitutionWhereUniqueInput.schema';
import { InstitutionUpdateWithWhereUniqueWithoutCityInputObjectSchema } from './InstitutionUpdateWithWhereUniqueWithoutCityInput.schema';
import { InstitutionUpdateManyWithWhereWithoutCityInputObjectSchema } from './InstitutionUpdateManyWithWhereWithoutCityInput.schema';
import { InstitutionScalarWhereInputObjectSchema } from './InstitutionScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.InstitutionUncheckedUpdateManyWithoutCityNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => InstitutionCreateWithoutCityInputObjectSchema),
          z.lazy(() => InstitutionCreateWithoutCityInputObjectSchema).array(),
          z.lazy(() => InstitutionUncheckedCreateWithoutCityInputObjectSchema),
          z
            .lazy(() => InstitutionUncheckedCreateWithoutCityInputObjectSchema)
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => InstitutionCreateOrConnectWithoutCityInputObjectSchema),
          z
            .lazy(() => InstitutionCreateOrConnectWithoutCityInputObjectSchema)
            .array(),
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(
            () => InstitutionUpsertWithWhereUniqueWithoutCityInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                InstitutionUpsertWithWhereUniqueWithoutCityInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => InstitutionCreateManyCityInputEnvelopeObjectSchema)
        .optional(),
      set: z
        .union([
          z.lazy(() => InstitutionWhereUniqueInputObjectSchema),
          z.lazy(() => InstitutionWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      disconnect: z
        .union([
          z.lazy(() => InstitutionWhereUniqueInputObjectSchema),
          z.lazy(() => InstitutionWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      delete: z
        .union([
          z.lazy(() => InstitutionWhereUniqueInputObjectSchema),
          z.lazy(() => InstitutionWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      connect: z
        .union([
          z.lazy(() => InstitutionWhereUniqueInputObjectSchema),
          z.lazy(() => InstitutionWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      update: z
        .union([
          z.lazy(
            () => InstitutionUpdateWithWhereUniqueWithoutCityInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                InstitutionUpdateWithWhereUniqueWithoutCityInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(
            () => InstitutionUpdateManyWithWhereWithoutCityInputObjectSchema,
          ),
          z
            .lazy(
              () => InstitutionUpdateManyWithWhereWithoutCityInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      deleteMany: z
        .union([
          z.lazy(() => InstitutionScalarWhereInputObjectSchema),
          z.lazy(() => InstitutionScalarWhereInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const InstitutionUncheckedUpdateManyWithoutCityNestedInputObjectSchema =
  Schema;
