import { z } from 'zod';
import { MedicalCenterWhereUniqueInputObjectSchema } from './MedicalCenterWhereUniqueInput.schema';
import { MedicalCenterCreateWithoutTimeWindowInputObjectSchema } from './MedicalCenterCreateWithoutTimeWindowInput.schema';
import { MedicalCenterUncheckedCreateWithoutTimeWindowInputObjectSchema } from './MedicalCenterUncheckedCreateWithoutTimeWindowInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MedicalCenterCreateOrConnectWithoutTimeWindowInput> =
  z
    .object({
      where: z.lazy(() => MedicalCenterWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => MedicalCenterCreateWithoutTimeWindowInputObjectSchema),
        z.lazy(
          () => MedicalCenterUncheckedCreateWithoutTimeWindowInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const MedicalCenterCreateOrConnectWithoutTimeWindowInputObjectSchema =
  Schema;
