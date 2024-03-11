import { z } from 'zod';
import { MedicalServiceCreateWithoutMedicalCenterInputObjectSchema } from './MedicalServiceCreateWithoutMedicalCenterInput.schema';
import { MedicalServiceUncheckedCreateWithoutMedicalCenterInputObjectSchema } from './MedicalServiceUncheckedCreateWithoutMedicalCenterInput.schema';
import { MedicalServiceCreateOrConnectWithoutMedicalCenterInputObjectSchema } from './MedicalServiceCreateOrConnectWithoutMedicalCenterInput.schema';
import { MedicalServiceUpsertWithWhereUniqueWithoutMedicalCenterInputObjectSchema } from './MedicalServiceUpsertWithWhereUniqueWithoutMedicalCenterInput.schema';
import { MedicalServiceCreateManyMedicalCenterInputEnvelopeObjectSchema } from './MedicalServiceCreateManyMedicalCenterInputEnvelope.schema';
import { MedicalServiceWhereUniqueInputObjectSchema } from './MedicalServiceWhereUniqueInput.schema';
import { MedicalServiceUpdateWithWhereUniqueWithoutMedicalCenterInputObjectSchema } from './MedicalServiceUpdateWithWhereUniqueWithoutMedicalCenterInput.schema';
import { MedicalServiceUpdateManyWithWhereWithoutMedicalCenterInputObjectSchema } from './MedicalServiceUpdateManyWithWhereWithoutMedicalCenterInput.schema';
import { MedicalServiceScalarWhereInputObjectSchema } from './MedicalServiceScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MedicalServiceUncheckedUpdateManyWithoutMedicalCenterNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(
            () => MedicalServiceCreateWithoutMedicalCenterInputObjectSchema,
          ),
          z
            .lazy(
              () => MedicalServiceCreateWithoutMedicalCenterInputObjectSchema,
            )
            .array(),
          z.lazy(
            () =>
              MedicalServiceUncheckedCreateWithoutMedicalCenterInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                MedicalServiceUncheckedCreateWithoutMedicalCenterInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(
            () =>
              MedicalServiceCreateOrConnectWithoutMedicalCenterInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                MedicalServiceCreateOrConnectWithoutMedicalCenterInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(
            () =>
              MedicalServiceUpsertWithWhereUniqueWithoutMedicalCenterInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                MedicalServiceUpsertWithWhereUniqueWithoutMedicalCenterInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(
          () => MedicalServiceCreateManyMedicalCenterInputEnvelopeObjectSchema,
        )
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
              MedicalServiceUpdateWithWhereUniqueWithoutMedicalCenterInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                MedicalServiceUpdateWithWhereUniqueWithoutMedicalCenterInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(
            () =>
              MedicalServiceUpdateManyWithWhereWithoutMedicalCenterInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                MedicalServiceUpdateManyWithWhereWithoutMedicalCenterInputObjectSchema,
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

export const MedicalServiceUncheckedUpdateManyWithoutMedicalCenterNestedInputObjectSchema =
  Schema;
