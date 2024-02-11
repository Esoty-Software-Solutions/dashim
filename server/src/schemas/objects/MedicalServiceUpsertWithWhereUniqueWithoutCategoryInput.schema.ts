import { z } from 'zod';
import { MedicalServiceWhereUniqueInputObjectSchema } from './MedicalServiceWhereUniqueInput.schema';
import { MedicalServiceUpdateWithoutCategoryInputObjectSchema } from './MedicalServiceUpdateWithoutCategoryInput.schema';
import { MedicalServiceUncheckedUpdateWithoutCategoryInputObjectSchema } from './MedicalServiceUncheckedUpdateWithoutCategoryInput.schema';
import { MedicalServiceCreateWithoutCategoryInputObjectSchema } from './MedicalServiceCreateWithoutCategoryInput.schema';
import { MedicalServiceUncheckedCreateWithoutCategoryInputObjectSchema } from './MedicalServiceUncheckedCreateWithoutCategoryInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MedicalServiceUpsertWithWhereUniqueWithoutCategoryInput> =
  z
    .object({
      where: z.lazy(() => MedicalServiceWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => MedicalServiceUpdateWithoutCategoryInputObjectSchema),
        z.lazy(
          () => MedicalServiceUncheckedUpdateWithoutCategoryInputObjectSchema,
        ),
      ]),
      create: z.union([
        z.lazy(() => MedicalServiceCreateWithoutCategoryInputObjectSchema),
        z.lazy(
          () => MedicalServiceUncheckedCreateWithoutCategoryInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const MedicalServiceUpsertWithWhereUniqueWithoutCategoryInputObjectSchema =
  Schema;
