import { z } from 'zod';
import { MedicalServiceCategoryUpdateWithoutBeneftiPackagesInputObjectSchema } from './MedicalServiceCategoryUpdateWithoutBeneftiPackagesInput.schema';
import { MedicalServiceCategoryUncheckedUpdateWithoutBeneftiPackagesInputObjectSchema } from './MedicalServiceCategoryUncheckedUpdateWithoutBeneftiPackagesInput.schema';
import { MedicalServiceCategoryCreateWithoutBeneftiPackagesInputObjectSchema } from './MedicalServiceCategoryCreateWithoutBeneftiPackagesInput.schema';
import { MedicalServiceCategoryUncheckedCreateWithoutBeneftiPackagesInputObjectSchema } from './MedicalServiceCategoryUncheckedCreateWithoutBeneftiPackagesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MedicalServiceCategoryUpsertWithoutBeneftiPackagesInput> =
  z
    .object({
      update: z.union([
        z.lazy(
          () =>
            MedicalServiceCategoryUpdateWithoutBeneftiPackagesInputObjectSchema,
        ),
        z.lazy(
          () =>
            MedicalServiceCategoryUncheckedUpdateWithoutBeneftiPackagesInputObjectSchema,
        ),
      ]),
      create: z.union([
        z.lazy(
          () =>
            MedicalServiceCategoryCreateWithoutBeneftiPackagesInputObjectSchema,
        ),
        z.lazy(
          () =>
            MedicalServiceCategoryUncheckedCreateWithoutBeneftiPackagesInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const MedicalServiceCategoryUpsertWithoutBeneftiPackagesInputObjectSchema =
  Schema;
