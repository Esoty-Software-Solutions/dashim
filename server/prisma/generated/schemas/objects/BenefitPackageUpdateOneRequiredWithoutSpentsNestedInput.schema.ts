import { z } from 'zod';
import { BenefitPackageCreateWithoutSpentsInputObjectSchema } from './BenefitPackageCreateWithoutSpentsInput.schema';
import { BenefitPackageUncheckedCreateWithoutSpentsInputObjectSchema } from './BenefitPackageUncheckedCreateWithoutSpentsInput.schema';
import { BenefitPackageCreateOrConnectWithoutSpentsInputObjectSchema } from './BenefitPackageCreateOrConnectWithoutSpentsInput.schema';
import { BenefitPackageUpsertWithoutSpentsInputObjectSchema } from './BenefitPackageUpsertWithoutSpentsInput.schema';
import { BenefitPackageWhereUniqueInputObjectSchema } from './BenefitPackageWhereUniqueInput.schema';
import { BenefitPackageUpdateWithoutSpentsInputObjectSchema } from './BenefitPackageUpdateWithoutSpentsInput.schema';
import { BenefitPackageUncheckedUpdateWithoutSpentsInputObjectSchema } from './BenefitPackageUncheckedUpdateWithoutSpentsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BenefitPackageUpdateOneRequiredWithoutSpentsNestedInput> =
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
      upsert: z
        .lazy(() => BenefitPackageUpsertWithoutSpentsInputObjectSchema)
        .optional(),
      connect: z
        .lazy(() => BenefitPackageWhereUniqueInputObjectSchema)
        .optional(),
      update: z
        .union([
          z.lazy(() => BenefitPackageUpdateWithoutSpentsInputObjectSchema),
          z.lazy(
            () => BenefitPackageUncheckedUpdateWithoutSpentsInputObjectSchema,
          ),
        ])
        .optional(),
    })
    .strict();

export const BenefitPackageUpdateOneRequiredWithoutSpentsNestedInputObjectSchema =
  Schema;
