import { z } from 'zod';
import { BenefitPackageCreateWithoutMedicalServicesInputObjectSchema } from './BenefitPackageCreateWithoutMedicalServicesInput.schema';
import { BenefitPackageUncheckedCreateWithoutMedicalServicesInputObjectSchema } from './BenefitPackageUncheckedCreateWithoutMedicalServicesInput.schema';
import { BenefitPackageCreateOrConnectWithoutMedicalServicesInputObjectSchema } from './BenefitPackageCreateOrConnectWithoutMedicalServicesInput.schema';
import { BenefitPackageWhereUniqueInputObjectSchema } from './BenefitPackageWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BenefitPackageCreateNestedOneWithoutMedicalServicesInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(
            () => BenefitPackageCreateWithoutMedicalServicesInputObjectSchema,
          ),
          z.lazy(
            () =>
              BenefitPackageUncheckedCreateWithoutMedicalServicesInputObjectSchema,
          ),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(
          () =>
            BenefitPackageCreateOrConnectWithoutMedicalServicesInputObjectSchema,
        )
        .optional(),
      connect: z
        .lazy(() => BenefitPackageWhereUniqueInputObjectSchema)
        .optional(),
    })
    .strict();

export const BenefitPackageCreateNestedOneWithoutMedicalServicesInputObjectSchema =
  Schema;
