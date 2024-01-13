import { z } from 'zod';
import { BenefitPackageCreateWithoutSpentsInputObjectSchema } from './BenefitPackageCreateWithoutSpentsInput.schema';
import { BenefitPackageUncheckedCreateWithoutSpentsInputObjectSchema } from './BenefitPackageUncheckedCreateWithoutSpentsInput.schema';
import { BenefitPackageCreateOrConnectWithoutSpentsInputObjectSchema } from './BenefitPackageCreateOrConnectWithoutSpentsInput.schema';
import { BenefitPackageWhereUniqueInputObjectSchema } from './BenefitPackageWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BenefitPackageCreateNestedOneWithoutSpentsInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => BenefitPackageCreateWithoutSpentsInputObjectSchema),
          z.lazy(
            () => BenefitPackageUncheckedCreateWithoutSpentsInputObjectSchema,
          ),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(() => BenefitPackageCreateOrConnectWithoutSpentsInputObjectSchema)
        .optional(),
      connect: z
        .lazy(() => BenefitPackageWhereUniqueInputObjectSchema)
        .optional(),
    })
    .strict();

export const BenefitPackageCreateNestedOneWithoutSpentsInputObjectSchema =
  Schema;
