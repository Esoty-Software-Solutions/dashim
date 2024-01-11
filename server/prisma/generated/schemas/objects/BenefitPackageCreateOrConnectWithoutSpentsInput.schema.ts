import { z } from 'zod';
import { BenefitPackageWhereUniqueInputObjectSchema } from './BenefitPackageWhereUniqueInput.schema';
import { BenefitPackageCreateWithoutSpentsInputObjectSchema } from './BenefitPackageCreateWithoutSpentsInput.schema';
import { BenefitPackageUncheckedCreateWithoutSpentsInputObjectSchema } from './BenefitPackageUncheckedCreateWithoutSpentsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BenefitPackageCreateOrConnectWithoutSpentsInput> =
  z
    .object({
      where: z.lazy(() => BenefitPackageWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => BenefitPackageCreateWithoutSpentsInputObjectSchema),
        z.lazy(
          () => BenefitPackageUncheckedCreateWithoutSpentsInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const BenefitPackageCreateOrConnectWithoutSpentsInputObjectSchema =
  Schema;
