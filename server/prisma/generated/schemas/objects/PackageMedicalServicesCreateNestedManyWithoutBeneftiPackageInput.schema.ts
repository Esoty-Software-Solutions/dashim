import { z } from 'zod';
import { PackageMedicalServicesCreateWithoutBeneftiPackageInputObjectSchema } from './PackageMedicalServicesCreateWithoutBeneftiPackageInput.schema';
import { PackageMedicalServicesUncheckedCreateWithoutBeneftiPackageInputObjectSchema } from './PackageMedicalServicesUncheckedCreateWithoutBeneftiPackageInput.schema';
import { PackageMedicalServicesCreateOrConnectWithoutBeneftiPackageInputObjectSchema } from './PackageMedicalServicesCreateOrConnectWithoutBeneftiPackageInput.schema';
import { PackageMedicalServicesCreateManyBeneftiPackageInputEnvelopeObjectSchema } from './PackageMedicalServicesCreateManyBeneftiPackageInputEnvelope.schema';
import { PackageMedicalServicesWhereUniqueInputObjectSchema } from './PackageMedicalServicesWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PackageMedicalServicesCreateNestedManyWithoutBeneftiPackageInput> =
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
      createMany: z
        .lazy(
          () =>
            PackageMedicalServicesCreateManyBeneftiPackageInputEnvelopeObjectSchema,
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

export const PackageMedicalServicesCreateNestedManyWithoutBeneftiPackageInputObjectSchema =
  Schema;
