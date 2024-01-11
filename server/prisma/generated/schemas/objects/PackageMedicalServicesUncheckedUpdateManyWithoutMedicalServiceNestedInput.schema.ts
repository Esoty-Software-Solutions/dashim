import { z } from 'zod';
import { PackageMedicalServicesCreateWithoutMedicalServiceInputObjectSchema } from './PackageMedicalServicesCreateWithoutMedicalServiceInput.schema';
import { PackageMedicalServicesUncheckedCreateWithoutMedicalServiceInputObjectSchema } from './PackageMedicalServicesUncheckedCreateWithoutMedicalServiceInput.schema';
import { PackageMedicalServicesCreateOrConnectWithoutMedicalServiceInputObjectSchema } from './PackageMedicalServicesCreateOrConnectWithoutMedicalServiceInput.schema';
import { PackageMedicalServicesUpsertWithWhereUniqueWithoutMedicalServiceInputObjectSchema } from './PackageMedicalServicesUpsertWithWhereUniqueWithoutMedicalServiceInput.schema';
import { PackageMedicalServicesCreateManyMedicalServiceInputEnvelopeObjectSchema } from './PackageMedicalServicesCreateManyMedicalServiceInputEnvelope.schema';
import { PackageMedicalServicesWhereUniqueInputObjectSchema } from './PackageMedicalServicesWhereUniqueInput.schema';
import { PackageMedicalServicesUpdateWithWhereUniqueWithoutMedicalServiceInputObjectSchema } from './PackageMedicalServicesUpdateWithWhereUniqueWithoutMedicalServiceInput.schema';
import { PackageMedicalServicesUpdateManyWithWhereWithoutMedicalServiceInputObjectSchema } from './PackageMedicalServicesUpdateManyWithWhereWithoutMedicalServiceInput.schema';
import { PackageMedicalServicesScalarWhereInputObjectSchema } from './PackageMedicalServicesScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PackageMedicalServicesUncheckedUpdateManyWithoutMedicalServiceNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(
            () =>
              PackageMedicalServicesCreateWithoutMedicalServiceInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                PackageMedicalServicesCreateWithoutMedicalServiceInputObjectSchema,
            )
            .array(),
          z.lazy(
            () =>
              PackageMedicalServicesUncheckedCreateWithoutMedicalServiceInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                PackageMedicalServicesUncheckedCreateWithoutMedicalServiceInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(
            () =>
              PackageMedicalServicesCreateOrConnectWithoutMedicalServiceInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                PackageMedicalServicesCreateOrConnectWithoutMedicalServiceInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(
            () =>
              PackageMedicalServicesUpsertWithWhereUniqueWithoutMedicalServiceInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                PackageMedicalServicesUpsertWithWhereUniqueWithoutMedicalServiceInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(
          () =>
            PackageMedicalServicesCreateManyMedicalServiceInputEnvelopeObjectSchema,
        )
        .optional(),
      set: z
        .union([
          z.lazy(() => PackageMedicalServicesWhereUniqueInputObjectSchema),
          z
            .lazy(() => PackageMedicalServicesWhereUniqueInputObjectSchema)
            .array(),
        ])
        .optional(),
      disconnect: z
        .union([
          z.lazy(() => PackageMedicalServicesWhereUniqueInputObjectSchema),
          z
            .lazy(() => PackageMedicalServicesWhereUniqueInputObjectSchema)
            .array(),
        ])
        .optional(),
      delete: z
        .union([
          z.lazy(() => PackageMedicalServicesWhereUniqueInputObjectSchema),
          z
            .lazy(() => PackageMedicalServicesWhereUniqueInputObjectSchema)
            .array(),
        ])
        .optional(),
      connect: z
        .union([
          z.lazy(() => PackageMedicalServicesWhereUniqueInputObjectSchema),
          z
            .lazy(() => PackageMedicalServicesWhereUniqueInputObjectSchema)
            .array(),
        ])
        .optional(),
      update: z
        .union([
          z.lazy(
            () =>
              PackageMedicalServicesUpdateWithWhereUniqueWithoutMedicalServiceInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                PackageMedicalServicesUpdateWithWhereUniqueWithoutMedicalServiceInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(
            () =>
              PackageMedicalServicesUpdateManyWithWhereWithoutMedicalServiceInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                PackageMedicalServicesUpdateManyWithWhereWithoutMedicalServiceInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      deleteMany: z
        .union([
          z.lazy(() => PackageMedicalServicesScalarWhereInputObjectSchema),
          z
            .lazy(() => PackageMedicalServicesScalarWhereInputObjectSchema)
            .array(),
        ])
        .optional(),
    })
    .strict();

export const PackageMedicalServicesUncheckedUpdateManyWithoutMedicalServiceNestedInputObjectSchema =
  Schema;
