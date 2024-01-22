import { z } from 'zod';
import { BenefitPackageWhereUniqueInputObjectSchema } from './BenefitPackageWhereUniqueInput.schema';
import { BenefitPackageCreateWithoutMedicalServiceTemplatesInputObjectSchema } from './BenefitPackageCreateWithoutMedicalServiceTemplatesInput.schema';
import { BenefitPackageUncheckedCreateWithoutMedicalServiceTemplatesInputObjectSchema } from './BenefitPackageUncheckedCreateWithoutMedicalServiceTemplatesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BenefitPackageCreateOrConnectWithoutMedicalServiceTemplatesInput> =
  z
    .object({
      where: z.lazy(() => BenefitPackageWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(
          () =>
            BenefitPackageCreateWithoutMedicalServiceTemplatesInputObjectSchema,
        ),
        z.lazy(
          () =>
            BenefitPackageUncheckedCreateWithoutMedicalServiceTemplatesInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const BenefitPackageCreateOrConnectWithoutMedicalServiceTemplatesInputObjectSchema =
  Schema;
