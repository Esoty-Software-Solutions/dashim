import { z } from 'zod';
import { MedicalServiceCategoryWhereUniqueInputObjectSchema } from './MedicalServiceCategoryWhereUniqueInput.schema';
import { MedicalServiceCategoryCreateWithoutServicesInputObjectSchema } from './MedicalServiceCategoryCreateWithoutServicesInput.schema';
import { MedicalServiceCategoryUncheckedCreateWithoutServicesInputObjectSchema } from './MedicalServiceCategoryUncheckedCreateWithoutServicesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MedicalServiceCategoryCreateOrConnectWithoutServicesInput> =
  z
    .object({
      where: z.lazy(() => MedicalServiceCategoryWhereUniqueInputObjectSchema),
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

export const MedicalServiceCategoryCreateOrConnectWithoutServicesInputObjectSchema =
  Schema;
