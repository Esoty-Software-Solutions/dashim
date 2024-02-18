import { z } from 'zod';
import { MedicalCenterWhereUniqueInputObjectSchema } from './MedicalCenterWhereUniqueInput.schema';
import { MedicalCenterCreateWithoutCityInputObjectSchema } from './MedicalCenterCreateWithoutCityInput.schema';
import { MedicalCenterUncheckedCreateWithoutCityInputObjectSchema } from './MedicalCenterUncheckedCreateWithoutCityInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MedicalCenterCreateOrConnectWithoutCityInput> = z
  .object({
    where: z.lazy(() => MedicalCenterWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => MedicalCenterCreateWithoutCityInputObjectSchema),
      z.lazy(() => MedicalCenterUncheckedCreateWithoutCityInputObjectSchema),
    ]),
  })
  .strict();

export const MedicalCenterCreateOrConnectWithoutCityInputObjectSchema = Schema;
