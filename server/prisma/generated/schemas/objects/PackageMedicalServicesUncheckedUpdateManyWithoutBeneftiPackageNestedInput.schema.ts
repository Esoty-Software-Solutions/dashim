import { z } from 'zod';
import { PackageMedicalServicesCreateWithoutBeneftiPackageInputObjectSchema } from './PackageMedicalServicesCreateWithoutBeneftiPackageInput.schema';
import { PackageMedicalServicesUncheckedCreateWithoutBeneftiPackageInputObjectSchema } from './PackageMedicalServicesUncheckedCreateWithoutBeneftiPackageInput.schema';
import { PackageMedicalServicesCreateOrConnectWithoutBeneftiPackageInputObjectSchema } from './PackageMedicalServicesCreateOrConnectWithoutBeneftiPackageInput.schema';
import { PackageMedicalServicesUpsertWithWhereUniqueWithoutBeneftiPackageInputObjectSchema } from './PackageMedicalServicesUpsertWithWhereUniqueWithoutBeneftiPackageInput.schema';
import { PackageMedicalServicesCreateManyBeneftiPackageInputEnvelopeObjectSchema } from './PackageMedicalServicesCreateManyBeneftiPackageInputEnvelope.schema';
import { PackageMedicalServicesWhereUniqueInputObjectSchema } from './PackageMedicalServicesWhereUniqueInput.schema';
import { PackageMedicalServicesUpdateWithWhereUniqueWithoutBeneftiPackageInputObjectSchema } from './PackageMedicalServicesUpdateWithWhereUniqueWithoutBeneftiPackageInput.schema';
import { PackageMedicalServicesUpdateManyWithWhereWithoutBeneftiPackageInputObjectSchema } from './PackageMedicalServicesUpdateManyWithWhereWithoutBeneftiPackageInput.schema';
import { PackageMedicalServicesScalarWhereInputObjectSchema } from './PackageMedicalServicesScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PackageMedicalServicesUncheckedUpdateManyWithoutBeneftiPackageNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(
            () =>
              PackageMedicalServicesCreateWithoutBeneftiPackageInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                PackageMedicalServicesCreateWithoutBeneftiPackageInputObjectSchema,
            )
            .array(),
          z.lazy(
            () =>
              PackageMedicalServicesUncheckedCreateWithoutBeneftiPackageInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                PackageMedicalServicesUncheckedCreateWithoutBeneftiPackageInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(
            () =>
              PackageMedicalServicesCreateOrConnectWithoutBeneftiPackageInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                PackageMedicalServicesCreateOrConnectWithoutBeneftiPackageInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(
            () =>
              PackageMedicalServicesUpsertWithWhereUniqueWithoutBeneftiPackageInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                PackageMedicalServicesUpsertWithWhereUniqueWithoutBeneftiPackageInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(
          () =>
            PackageMedicalServicesCreateManyBeneftiPackageInputEnvelopeObjectSchema,
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
              PackageMedicalServicesUpdateWithWhereUniqueWithoutBeneftiPackageInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                PackageMedicalServicesUpdateWithWhereUniqueWithoutBeneftiPackageInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(
            () =>
              PackageMedicalServicesUpdateManyWithWhereWithoutBeneftiPackageInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                PackageMedicalServicesUpdateManyWithWhereWithoutBeneftiPackageInputObjectSchema,
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

export const PackageMedicalServicesUncheckedUpdateManyWithoutBeneftiPackageNestedInputObjectSchema =
  Schema;
