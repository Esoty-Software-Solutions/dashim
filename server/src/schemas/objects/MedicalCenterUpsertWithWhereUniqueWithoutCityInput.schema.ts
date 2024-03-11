import { z } from 'zod';
import { MedicalCenterWhereUniqueInputObjectSchema } from './MedicalCenterWhereUniqueInput.schema';
import { MedicalCenterUpdateWithoutCityInputObjectSchema } from './MedicalCenterUpdateWithoutCityInput.schema';
import { MedicalCenterUncheckedUpdateWithoutCityInputObjectSchema } from './MedicalCenterUncheckedUpdateWithoutCityInput.schema';
import { MedicalCenterCreateWithoutCityInputObjectSchema } from './MedicalCenterCreateWithoutCityInput.schema';
import { MedicalCenterUncheckedCreateWithoutCityInputObjectSchema } from './MedicalCenterUncheckedCreateWithoutCityInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MedicalCenterUpsertWithWhereUniqueWithoutCityInput> =
  z
    .object({
      where: z.lazy(() => MedicalCenterWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => MedicalCenterUpdateWithoutCityInputObjectSchema),
        z.lazy(() => MedicalCenterUncheckedUpdateWithoutCityInputObjectSchema),
      ]),
      create: z.union([
        z.lazy(() => MedicalCenterCreateWithoutCityInputObjectSchema),
        z.lazy(() => MedicalCenterUncheckedCreateWithoutCityInputObjectSchema),
      ]),
    })
    .strict();

export const MedicalCenterUpsertWithWhereUniqueWithoutCityInputObjectSchema =
  Schema;
