import { z } from 'zod';
import { PackageMedicalServicesCreateWithoutInsurancePolicyInputObjectSchema } from './PackageMedicalServicesCreateWithoutInsurancePolicyInput.schema';
import { PackageMedicalServicesUncheckedCreateWithoutInsurancePolicyInputObjectSchema } from './PackageMedicalServicesUncheckedCreateWithoutInsurancePolicyInput.schema';
import { PackageMedicalServicesCreateOrConnectWithoutInsurancePolicyInputObjectSchema } from './PackageMedicalServicesCreateOrConnectWithoutInsurancePolicyInput.schema';
import { PackageMedicalServicesCreateManyInsurancePolicyInputEnvelopeObjectSchema } from './PackageMedicalServicesCreateManyInsurancePolicyInputEnvelope.schema';
import { PackageMedicalServicesWhereUniqueInputObjectSchema } from './PackageMedicalServicesWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PackageMedicalServicesUncheckedCreateNestedManyWithoutInsurancePolicyInput> =
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
      createMany: z
        .lazy(
          () =>
            PackageMedicalServicesCreateManyInsurancePolicyInputEnvelopeObjectSchema,
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

export const PackageMedicalServicesUncheckedCreateNestedManyWithoutInsurancePolicyInputObjectSchema =
  Schema;
