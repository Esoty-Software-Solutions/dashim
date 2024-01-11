import { z } from 'zod';
import { PackageMedicalServicesCreateWithoutMedicalServiceInputObjectSchema } from './PackageMedicalServicesCreateWithoutMedicalServiceInput.schema';
import { PackageMedicalServicesUncheckedCreateWithoutMedicalServiceInputObjectSchema } from './PackageMedicalServicesUncheckedCreateWithoutMedicalServiceInput.schema';
import { PackageMedicalServicesCreateOrConnectWithoutMedicalServiceInputObjectSchema } from './PackageMedicalServicesCreateOrConnectWithoutMedicalServiceInput.schema';
import { PackageMedicalServicesCreateManyMedicalServiceInputEnvelopeObjectSchema } from './PackageMedicalServicesCreateManyMedicalServiceInputEnvelope.schema';
import { PackageMedicalServicesWhereUniqueInputObjectSchema } from './PackageMedicalServicesWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PackageMedicalServicesUncheckedCreateNestedManyWithoutMedicalServiceInput> =
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
      createMany: z
        .lazy(
          () =>
            PackageMedicalServicesCreateManyMedicalServiceInputEnvelopeObjectSchema,
        )
        .optional(),
      connect: z
        .union([
          z.lazy(() => PackageMedicalServicesWhereUniqueInputObjectSchema),
          z
            .lazy(() => PackageMedicalServicesWhereUniqueInputObjectSchema)
            .array(),
        ])
        .optional(),
    })
    .strict();

export const PackageMedicalServicesUncheckedCreateNestedManyWithoutMedicalServiceInputObjectSchema =
  Schema;
