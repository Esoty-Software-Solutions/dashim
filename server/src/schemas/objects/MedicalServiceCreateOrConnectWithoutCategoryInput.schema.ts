import { z } from 'zod';
import { MedicalServiceWhereUniqueInputObjectSchema } from './MedicalServiceWhereUniqueInput.schema';
import { MedicalServiceCreateWithoutCategoryInputObjectSchema } from './MedicalServiceCreateWithoutCategoryInput.schema';
import { MedicalServiceUncheckedCreateWithoutCategoryInputObjectSchema } from './MedicalServiceUncheckedCreateWithoutCategoryInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MedicalServiceCreateOrConnectWithoutCategoryInput> =
  z
    .object({
      where: z.lazy(() => MedicalServiceWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => MedicalServiceCreateWithoutCategoryInputObjectSchema),
        z.lazy(
          () => MedicalServiceUncheckedCreateWithoutCategoryInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const MedicalServiceCreateOrConnectWithoutCategoryInputObjectSchema =
  Schema;
