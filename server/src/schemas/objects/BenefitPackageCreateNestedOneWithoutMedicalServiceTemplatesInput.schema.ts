import { z } from 'zod';
import { BenefitPackageCreateWithoutMedicalServiceTemplatesInputObjectSchema } from './BenefitPackageCreateWithoutMedicalServiceTemplatesInput.schema';
import { BenefitPackageUncheckedCreateWithoutMedicalServiceTemplatesInputObjectSchema } from './BenefitPackageUncheckedCreateWithoutMedicalServiceTemplatesInput.schema';
import { BenefitPackageCreateOrConnectWithoutMedicalServiceTemplatesInputObjectSchema } from './BenefitPackageCreateOrConnectWithoutMedicalServiceTemplatesInput.schema';
import { BenefitPackageWhereUniqueInputObjectSchema } from './BenefitPackageWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BenefitPackageCreateNestedOneWithoutMedicalServiceTemplatesInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(
            () =>
              BenefitPackageCreateWithoutMedicalServiceTemplatesInputObjectSchema,
          ),
          z.lazy(
            () =>
              BenefitPackageUncheckedCreateWithoutMedicalServiceTemplatesInputObjectSchema,
          ),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(
          () =>
            BenefitPackageCreateOrConnectWithoutMedicalServiceTemplatesInputObjectSchema,
        )
        .optional(),
      connect: z
        .lazy(() => BenefitPackageWhereUniqueInputObjectSchema)
        .optional(),
    })
    .strict();

export const BenefitPackageCreateNestedOneWithoutMedicalServiceTemplatesInputObjectSchema =
  Schema;
