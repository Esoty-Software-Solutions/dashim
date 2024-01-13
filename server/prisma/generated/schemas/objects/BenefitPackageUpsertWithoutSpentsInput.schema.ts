import { z } from 'zod';
import { BenefitPackageUpdateWithoutSpentsInputObjectSchema } from './BenefitPackageUpdateWithoutSpentsInput.schema';
import { BenefitPackageUncheckedUpdateWithoutSpentsInputObjectSchema } from './BenefitPackageUncheckedUpdateWithoutSpentsInput.schema';
import { BenefitPackageCreateWithoutSpentsInputObjectSchema } from './BenefitPackageCreateWithoutSpentsInput.schema';
import { BenefitPackageUncheckedCreateWithoutSpentsInputObjectSchema } from './BenefitPackageUncheckedCreateWithoutSpentsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BenefitPackageUpsertWithoutSpentsInput> = z
  .object({
    update: z.union([
      z.lazy(() => BenefitPackageUpdateWithoutSpentsInputObjectSchema),
      z.lazy(() => BenefitPackageUncheckedUpdateWithoutSpentsInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => BenefitPackageCreateWithoutSpentsInputObjectSchema),
      z.lazy(() => BenefitPackageUncheckedCreateWithoutSpentsInputObjectSchema),
    ]),
  })
  .strict();

export const BenefitPackageUpsertWithoutSpentsInputObjectSchema = Schema;
