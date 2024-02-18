import { z } from 'zod';
import { MedicalServiceCategoryWhereUniqueInputObjectSchema } from './MedicalServiceCategoryWhereUniqueInput.schema';
import { MedicalServiceCategoryCreateWithoutBeneftiPackagesInputObjectSchema } from './MedicalServiceCategoryCreateWithoutBeneftiPackagesInput.schema';
import { MedicalServiceCategoryUncheckedCreateWithoutBeneftiPackagesInputObjectSchema } from './MedicalServiceCategoryUncheckedCreateWithoutBeneftiPackagesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MedicalServiceCategoryCreateOrConnectWithoutBeneftiPackagesInput> =
  z
    .object({
      where: z.lazy(() => MedicalServiceCategoryWhereUniqueInputObjectSchema),
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

export const MedicalServiceCategoryCreateOrConnectWithoutBeneftiPackagesInputObjectSchema =
  Schema;
