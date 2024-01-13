import { z } from 'zod';
import { PackageMedicalServicesCreateWithoutInsurancePolicyInputObjectSchema } from './PackageMedicalServicesCreateWithoutInsurancePolicyInput.schema';
import { PackageMedicalServicesUncheckedCreateWithoutInsurancePolicyInputObjectSchema } from './PackageMedicalServicesUncheckedCreateWithoutInsurancePolicyInput.schema';
import { PackageMedicalServicesCreateOrConnectWithoutInsurancePolicyInputObjectSchema } from './PackageMedicalServicesCreateOrConnectWithoutInsurancePolicyInput.schema';
import { PackageMedicalServicesUpsertWithWhereUniqueWithoutInsurancePolicyInputObjectSchema } from './PackageMedicalServicesUpsertWithWhereUniqueWithoutInsurancePolicyInput.schema';
import { PackageMedicalServicesCreateManyInsurancePolicyInputEnvelopeObjectSchema } from './PackageMedicalServicesCreateManyInsurancePolicyInputEnvelope.schema';
import { PackageMedicalServicesWhereUniqueInputObjectSchema } from './PackageMedicalServicesWhereUniqueInput.schema';
import { PackageMedicalServicesUpdateWithWhereUniqueWithoutInsurancePolicyInputObjectSchema } from './PackageMedicalServicesUpdateWithWhereUniqueWithoutInsurancePolicyInput.schema';
import { PackageMedicalServicesUpdateManyWithWhereWithoutInsurancePolicyInputObjectSchema } from './PackageMedicalServicesUpdateManyWithWhereWithoutInsurancePolicyInput.schema';
import { PackageMedicalServicesScalarWhereInputObjectSchema } from './PackageMedicalServicesScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PackageMedicalServicesUncheckedUpdateManyWithoutInsurancePolicyNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(
            () =>
              PackageMedicalServicesCreateWithoutInsurancePolicyInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                PackageMedicalServicesCreateWithoutInsurancePolicyInputObjectSchema,
            )
            .array(),
          z.lazy(
            () =>
              PackageMedicalServicesUncheckedCreateWithoutInsurancePolicyInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                PackageMedicalServicesUncheckedCreateWithoutInsurancePolicyInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(
            () =>
              PackageMedicalServicesCreateOrConnectWithoutInsurancePolicyInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                PackageMedicalServicesCreateOrConnectWithoutInsurancePolicyInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(
            () =>
              PackageMedicalServicesUpsertWithWhereUniqueWithoutInsurancePolicyInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                PackageMedicalServicesUpsertWithWhereUniqueWithoutInsurancePolicyInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(
          () =>
            PackageMedicalServicesCreateManyInsurancePolicyInputEnvelopeObjectSchema,
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
              PackageMedicalServicesUpdateWithWhereUniqueWithoutInsurancePolicyInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                PackageMedicalServicesUpdateWithWhereUniqueWithoutInsurancePolicyInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(
            () =>
              PackageMedicalServicesUpdateManyWithWhereWithoutInsurancePolicyInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                PackageMedicalServicesUpdateManyWithWhereWithoutInsurancePolicyInputObjectSchema,
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

export const PackageMedicalServicesUncheckedUpdateManyWithoutInsurancePolicyNestedInputObjectSchema =
  Schema;
