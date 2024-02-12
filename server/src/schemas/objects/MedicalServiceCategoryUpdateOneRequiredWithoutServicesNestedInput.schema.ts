import { z } from 'zod';
import { MedicalServiceCategoryCreateWithoutServicesInputObjectSchema } from './MedicalServiceCategoryCreateWithoutServicesInput.schema';
import { MedicalServiceCategoryUncheckedCreateWithoutServicesInputObjectSchema } from './MedicalServiceCategoryUncheckedCreateWithoutServicesInput.schema';
import { MedicalServiceCategoryCreateOrConnectWithoutServicesInputObjectSchema } from './MedicalServiceCategoryCreateOrConnectWithoutServicesInput.schema';
import { MedicalServiceCategoryUpsertWithoutServicesInputObjectSchema } from './MedicalServiceCategoryUpsertWithoutServicesInput.schema';
import { MedicalServiceCategoryWhereUniqueInputObjectSchema } from './MedicalServiceCategoryWhereUniqueInput.schema';
import { MedicalServiceCategoryUpdateWithoutServicesInputObjectSchema } from './MedicalServiceCategoryUpdateWithoutServicesInput.schema';
import { MedicalServiceCategoryUncheckedUpdateWithoutServicesInputObjectSchema } from './MedicalServiceCategoryUncheckedUpdateWithoutServicesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MedicalServiceCategoryUpdateOneRequiredWithoutServicesNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(
            () => MedicalServiceCategoryCreateWithoutServicesInputObjectSchema,
          ),
          z.lazy(
            () =>
              MedicalServiceCategoryUncheckedCreateWithoutServicesInputObjectSchema,
          ),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(
          () =>
            MedicalServiceCategoryCreateOrConnectWithoutServicesInputObjectSchema,
        )
        .optional(),
      upsert: z
        .lazy(
          () => MedicalServiceCategoryUpsertWithoutServicesInputObjectSchema,
        )
        .optional(),
      connect: z
        .lazy(() => MedicalServiceCategoryWhereUniqueInputObjectSchema)
        .optional(),
      update: z
        .union([
          z.lazy(
            () => MedicalServiceCategoryUpdateWithoutServicesInputObjectSchema,
          ),
          z.lazy(
            () =>
              MedicalServiceCategoryUncheckedUpdateWithoutServicesInputObjectSchema,
          ),
        ])
        .optional(),
    })
    .strict();

export const MedicalServiceCategoryUpdateOneRequiredWithoutServicesNestedInputObjectSchema =
  Schema;
