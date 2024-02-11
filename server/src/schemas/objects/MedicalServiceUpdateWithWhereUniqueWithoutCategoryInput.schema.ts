import { z } from 'zod';
import { MedicalServiceWhereUniqueInputObjectSchema } from './MedicalServiceWhereUniqueInput.schema';
import { MedicalServiceUpdateWithoutCategoryInputObjectSchema } from './MedicalServiceUpdateWithoutCategoryInput.schema';
import { MedicalServiceUncheckedUpdateWithoutCategoryInputObjectSchema } from './MedicalServiceUncheckedUpdateWithoutCategoryInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MedicalServiceUpdateWithWhereUniqueWithoutCategoryInput> =
  z
    .object({
      where: z.lazy(() => MedicalServiceWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => MedicalServiceUpdateWithoutCategoryInputObjectSchema),
        z.lazy(
          () => MedicalServiceUncheckedUpdateWithoutCategoryInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const MedicalServiceUpdateWithWhereUniqueWithoutCategoryInputObjectSchema =
  Schema;
