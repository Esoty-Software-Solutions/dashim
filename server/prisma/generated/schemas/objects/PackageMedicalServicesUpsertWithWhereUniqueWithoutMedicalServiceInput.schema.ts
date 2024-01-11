import { z } from 'zod';
import { PackageMedicalServicesWhereUniqueInputObjectSchema } from './PackageMedicalServicesWhereUniqueInput.schema';
import { PackageMedicalServicesUpdateWithoutMedicalServiceInputObjectSchema } from './PackageMedicalServicesUpdateWithoutMedicalServiceInput.schema';
import { PackageMedicalServicesUncheckedUpdateWithoutMedicalServiceInputObjectSchema } from './PackageMedicalServicesUncheckedUpdateWithoutMedicalServiceInput.schema';
import { PackageMedicalServicesCreateWithoutMedicalServiceInputObjectSchema } from './PackageMedicalServicesCreateWithoutMedicalServiceInput.schema';
import { PackageMedicalServicesUncheckedCreateWithoutMedicalServiceInputObjectSchema } from './PackageMedicalServicesUncheckedCreateWithoutMedicalServiceInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PackageMedicalServicesUpsertWithWhereUniqueWithoutMedicalServiceInput> =
  z
    .object({
      where: z.lazy(() => PackageMedicalServicesWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(
          () =>
            PackageMedicalServicesUpdateWithoutMedicalServiceInputObjectSchema,
        ),
        z.lazy(
          () =>
            PackageMedicalServicesUncheckedUpdateWithoutMedicalServiceInputObjectSchema,
        ),
      ]),
      create: z.union([
        z.lazy(
          () =>
            PackageMedicalServicesCreateWithoutMedicalServiceInputObjectSchema,
        ),
        z.lazy(
          () =>
            PackageMedicalServicesUncheckedCreateWithoutMedicalServiceInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const PackageMedicalServicesUpsertWithWhereUniqueWithoutMedicalServiceInputObjectSchema =
  Schema;
