import { z } from 'zod';
import { MedicalServiceCategoryUpdateWithoutServicesInputObjectSchema } from './MedicalServiceCategoryUpdateWithoutServicesInput.schema';
import { MedicalServiceCategoryUncheckedUpdateWithoutServicesInputObjectSchema } from './MedicalServiceCategoryUncheckedUpdateWithoutServicesInput.schema';
import { MedicalServiceCategoryCreateWithoutServicesInputObjectSchema } from './MedicalServiceCategoryCreateWithoutServicesInput.schema';
import { MedicalServiceCategoryUncheckedCreateWithoutServicesInputObjectSchema } from './MedicalServiceCategoryUncheckedCreateWithoutServicesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MedicalServiceCategoryUpsertWithoutServicesInput> =
  z
    .object({
      update: z.union([
        z.lazy(
          () => MedicalServiceCategoryUpdateWithoutServicesInputObjectSchema,
        ),
        z.lazy(
          () =>
            MedicalServiceCategoryUncheckedUpdateWithoutServicesInputObjectSchema,
        ),
      ]),
      create: z.union([
        z.lazy(
          () => MedicalServiceCategoryCreateWithoutServicesInputObjectSchema,
        ),
        z.lazy(
          () =>
            MedicalServiceCategoryUncheckedCreateWithoutServicesInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const MedicalServiceCategoryUpsertWithoutServicesInputObjectSchema =
  Schema;
