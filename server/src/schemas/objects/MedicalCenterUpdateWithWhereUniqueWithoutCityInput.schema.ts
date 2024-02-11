import { z } from 'zod';
import { MedicalCenterWhereUniqueInputObjectSchema } from './MedicalCenterWhereUniqueInput.schema';
import { MedicalCenterUpdateWithoutCityInputObjectSchema } from './MedicalCenterUpdateWithoutCityInput.schema';
import { MedicalCenterUncheckedUpdateWithoutCityInputObjectSchema } from './MedicalCenterUncheckedUpdateWithoutCityInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MedicalCenterUpdateWithWhereUniqueWithoutCityInput> =
  z
    .object({
      where: z.lazy(() => MedicalCenterWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => MedicalCenterUpdateWithoutCityInputObjectSchema),
        z.lazy(() => MedicalCenterUncheckedUpdateWithoutCityInputObjectSchema),
      ]),
    })
    .strict();

export const MedicalCenterUpdateWithWhereUniqueWithoutCityInputObjectSchema =
  Schema;
