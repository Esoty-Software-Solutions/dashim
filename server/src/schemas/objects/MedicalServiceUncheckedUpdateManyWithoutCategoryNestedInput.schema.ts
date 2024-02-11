import { z } from 'zod';
import { MedicalServiceCreateWithoutCategoryInputObjectSchema } from './MedicalServiceCreateWithoutCategoryInput.schema';
import { MedicalServiceUncheckedCreateWithoutCategoryInputObjectSchema } from './MedicalServiceUncheckedCreateWithoutCategoryInput.schema';
import { MedicalServiceCreateOrConnectWithoutCategoryInputObjectSchema } from './MedicalServiceCreateOrConnectWithoutCategoryInput.schema';
import { MedicalServiceUpsertWithWhereUniqueWithoutCategoryInputObjectSchema } from './MedicalServiceUpsertWithWhereUniqueWithoutCategoryInput.schema';
import { MedicalServiceCreateManyCategoryInputEnvelopeObjectSchema } from './MedicalServiceCreateManyCategoryInputEnvelope.schema';
import { MedicalServiceWhereUniqueInputObjectSchema } from './MedicalServiceWhereUniqueInput.schema';
import { MedicalServiceUpdateWithWhereUniqueWithoutCategoryInputObjectSchema } from './MedicalServiceUpdateWithWhereUniqueWithoutCategoryInput.schema';
import { MedicalServiceUpdateManyWithWhereWithoutCategoryInputObjectSchema } from './MedicalServiceUpdateManyWithWhereWithoutCategoryInput.schema';
import { MedicalServiceScalarWhereInputObjectSchema } from './MedicalServiceScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MedicalServiceUncheckedUpdateManyWithoutCategoryNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => MedicalServiceCreateWithoutCategoryInputObjectSchema),
          z
            .lazy(() => MedicalServiceCreateWithoutCategoryInputObjectSchema)
            .array(),
          z.lazy(
            () => MedicalServiceUncheckedCreateWithoutCategoryInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                MedicalServiceUncheckedCreateWithoutCategoryInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(
            () => MedicalServiceCreateOrConnectWithoutCategoryInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                MedicalServiceCreateOrConnectWithoutCategoryInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(
            () =>
              MedicalServiceUpsertWithWhereUniqueWithoutCategoryInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                MedicalServiceUpsertWithWhereUniqueWithoutCategoryInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => MedicalServiceCreateManyCategoryInputEnvelopeObjectSchema)
        .optional(),
      set: z
        .union([
          z.lazy(() => MedicalServiceWhereUniqueInputObjectSchema),
          z.lazy(() => MedicalServiceWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      disconnect: z
        .union([
          z.lazy(() => MedicalServiceWhereUniqueInputObjectSchema),
          z.lazy(() => MedicalServiceWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      delete: z
        .union([
          z.lazy(() => MedicalServiceWhereUniqueInputObjectSchema),
          z.lazy(() => MedicalServiceWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      connect: z
        .union([
          z.lazy(() => MedicalServiceWhereUniqueInputObjectSchema),
          z.lazy(() => MedicalServiceWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      update: z
        .union([
          z.lazy(
            () =>
              MedicalServiceUpdateWithWhereUniqueWithoutCategoryInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                MedicalServiceUpdateWithWhereUniqueWithoutCategoryInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(
            () =>
              MedicalServiceUpdateManyWithWhereWithoutCategoryInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                MedicalServiceUpdateManyWithWhereWithoutCategoryInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      deleteMany: z
        .union([
          z.lazy(() => MedicalServiceScalarWhereInputObjectSchema),
          z.lazy(() => MedicalServiceScalarWhereInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const MedicalServiceUncheckedUpdateManyWithoutCategoryNestedInputObjectSchema =
  Schema;
