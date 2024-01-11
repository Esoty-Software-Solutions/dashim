import { z } from 'zod';
import { BenefitPackageWhereUniqueInputObjectSchema } from './BenefitPackageWhereUniqueInput.schema';
import { BenefitPackageCreateWithoutMedicalServicesInputObjectSchema } from './BenefitPackageCreateWithoutMedicalServicesInput.schema';
import { BenefitPackageUncheckedCreateWithoutMedicalServicesInputObjectSchema } from './BenefitPackageUncheckedCreateWithoutMedicalServicesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BenefitPackageCreateOrConnectWithoutMedicalServicesInput> =
  z
    .object({
      where: z.lazy(() => BenefitPackageWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(
          () => BenefitPackageCreateWithoutMedicalServicesInputObjectSchema,
        ),
        z.lazy(
          () =>
            BenefitPackageUncheckedCreateWithoutMedicalServicesInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const BenefitPackageCreateOrConnectWithoutMedicalServicesInputObjectSchema =
  Schema;
