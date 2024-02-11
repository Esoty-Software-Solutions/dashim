import { z } from 'zod';
import { MedicalServiceCategoryCreateWithoutBeneftiPackagesInputObjectSchema } from './MedicalServiceCategoryCreateWithoutBeneftiPackagesInput.schema';
import { MedicalServiceCategoryUncheckedCreateWithoutBeneftiPackagesInputObjectSchema } from './MedicalServiceCategoryUncheckedCreateWithoutBeneftiPackagesInput.schema';
import { MedicalServiceCategoryCreateOrConnectWithoutBeneftiPackagesInputObjectSchema } from './MedicalServiceCategoryCreateOrConnectWithoutBeneftiPackagesInput.schema';
import { MedicalServiceCategoryUpsertWithoutBeneftiPackagesInputObjectSchema } from './MedicalServiceCategoryUpsertWithoutBeneftiPackagesInput.schema';
import { MedicalServiceCategoryWhereUniqueInputObjectSchema } from './MedicalServiceCategoryWhereUniqueInput.schema';
import { MedicalServiceCategoryUpdateWithoutBeneftiPackagesInputObjectSchema } from './MedicalServiceCategoryUpdateWithoutBeneftiPackagesInput.schema';
import { MedicalServiceCategoryUncheckedUpdateWithoutBeneftiPackagesInputObjectSchema } from './MedicalServiceCategoryUncheckedUpdateWithoutBeneftiPackagesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MedicalServiceCategoryUpdateOneRequiredWithoutBeneftiPackagesNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(
            () =>
              MedicalServiceCategoryCreateWithoutBeneftiPackagesInputObjectSchema,
          ),
          z.lazy(
            () =>
              MedicalServiceCategoryUncheckedCreateWithoutBeneftiPackagesInputObjectSchema,
          ),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(
          () =>
            MedicalServiceCategoryCreateOrConnectWithoutBeneftiPackagesInputObjectSchema,
        )
        .optional(),
      upsert: z
        .lazy(
          () =>
            MedicalServiceCategoryUpsertWithoutBeneftiPackagesInputObjectSchema,
        )
        .optional(),
      connect: z
        .lazy(() => MedicalServiceCategoryWhereUniqueInputObjectSchema)
        .optional(),
      update: z
        .union([
          z.lazy(
            () =>
              MedicalServiceCategoryUpdateWithoutBeneftiPackagesInputObjectSchema,
          ),
          z.lazy(
            () =>
              MedicalServiceCategoryUncheckedUpdateWithoutBeneftiPackagesInputObjectSchema,
          ),
        ])
        .optional(),
    })
    .strict();

export const MedicalServiceCategoryUpdateOneRequiredWithoutBeneftiPackagesNestedInputObjectSchema =
  Schema;
