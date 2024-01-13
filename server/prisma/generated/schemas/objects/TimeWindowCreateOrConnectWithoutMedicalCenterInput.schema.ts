import { z } from 'zod';
import { TimeWindowWhereUniqueInputObjectSchema } from './TimeWindowWhereUniqueInput.schema';
import { TimeWindowCreateWithoutMedicalCenterInputObjectSchema } from './TimeWindowCreateWithoutMedicalCenterInput.schema';
import { TimeWindowUncheckedCreateWithoutMedicalCenterInputObjectSchema } from './TimeWindowUncheckedCreateWithoutMedicalCenterInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TimeWindowCreateOrConnectWithoutMedicalCenterInput> =
  z
    .object({
      where: z.lazy(() => TimeWindowWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => TimeWindowCreateWithoutMedicalCenterInputObjectSchema),
        z.lazy(
          () => TimeWindowUncheckedCreateWithoutMedicalCenterInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const TimeWindowCreateOrConnectWithoutMedicalCenterInputObjectSchema =
  Schema;
