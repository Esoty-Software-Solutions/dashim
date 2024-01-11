import { z } from 'zod';
import { TimeWindowCreateWithoutMedicalCenterInputObjectSchema } from './TimeWindowCreateWithoutMedicalCenterInput.schema';
import { TimeWindowUncheckedCreateWithoutMedicalCenterInputObjectSchema } from './TimeWindowUncheckedCreateWithoutMedicalCenterInput.schema';
import { TimeWindowCreateOrConnectWithoutMedicalCenterInputObjectSchema } from './TimeWindowCreateOrConnectWithoutMedicalCenterInput.schema';
import { TimeWindowWhereUniqueInputObjectSchema } from './TimeWindowWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TimeWindowUncheckedCreateNestedOneWithoutMedicalCenterInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => TimeWindowCreateWithoutMedicalCenterInputObjectSchema),
          z.lazy(
            () =>
              TimeWindowUncheckedCreateWithoutMedicalCenterInputObjectSchema,
          ),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(
          () => TimeWindowCreateOrConnectWithoutMedicalCenterInputObjectSchema,
        )
        .optional(),
      connect: z.lazy(() => TimeWindowWhereUniqueInputObjectSchema).optional(),
    })
    .strict();

export const TimeWindowUncheckedCreateNestedOneWithoutMedicalCenterInputObjectSchema =
  Schema;
