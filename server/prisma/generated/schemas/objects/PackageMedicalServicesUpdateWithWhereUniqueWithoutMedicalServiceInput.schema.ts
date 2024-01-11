import { z } from 'zod';
import { PackageMedicalServicesWhereUniqueInputObjectSchema } from './PackageMedicalServicesWhereUniqueInput.schema';
import { PackageMedicalServicesUpdateWithoutMedicalServiceInputObjectSchema } from './PackageMedicalServicesUpdateWithoutMedicalServiceInput.schema';
import { PackageMedicalServicesUncheckedUpdateWithoutMedicalServiceInputObjectSchema } from './PackageMedicalServicesUncheckedUpdateWithoutMedicalServiceInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PackageMedicalServicesUpdateWithWhereUniqueWithoutMedicalServiceInput> =
  z
    .object({
      where: z.lazy(() => PackageMedicalServicesWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(
          () =>
            PackageMedicalServicesUpdateWithoutMedicalServiceInputObjectSchema,
        ),
        z.lazy(
          () =>
            PackageMedicalServicesUncheckedUpdateWithoutMedicalServiceInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const PackageMedicalServicesUpdateWithWhereUniqueWithoutMedicalServiceInputObjectSchema =
  Schema;
