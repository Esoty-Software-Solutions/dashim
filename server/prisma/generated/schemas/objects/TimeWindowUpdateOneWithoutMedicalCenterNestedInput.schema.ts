import { z } from 'zod';
import { TimeWindowCreateWithoutMedicalCenterInputObjectSchema } from './TimeWindowCreateWithoutMedicalCenterInput.schema';
import { TimeWindowUncheckedCreateWithoutMedicalCenterInputObjectSchema } from './TimeWindowUncheckedCreateWithoutMedicalCenterInput.schema';
import { TimeWindowCreateOrConnectWithoutMedicalCenterInputObjectSchema } from './TimeWindowCreateOrConnectWithoutMedicalCenterInput.schema';
import { TimeWindowUpsertWithoutMedicalCenterInputObjectSchema } from './TimeWindowUpsertWithoutMedicalCenterInput.schema';
import { TimeWindowWhereUniqueInputObjectSchema } from './TimeWindowWhereUniqueInput.schema';
import { TimeWindowUpdateWithoutMedicalCenterInputObjectSchema } from './TimeWindowUpdateWithoutMedicalCenterInput.schema';
import { TimeWindowUncheckedUpdateWithoutMedicalCenterInputObjectSchema } from './TimeWindowUncheckedUpdateWithoutMedicalCenterInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TimeWindowUpdateOneWithoutMedicalCenterNestedInput> =
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
      upsert: z
        .lazy(() => TimeWindowUpsertWithoutMedicalCenterInputObjectSchema)
        .optional(),
      disconnect: z.boolean().optional(),
      delete: z.boolean().optional(),
      connect: z.lazy(() => TimeWindowWhereUniqueInputObjectSchema).optional(),
      update: z
        .union([
          z.lazy(() => TimeWindowUpdateWithoutMedicalCenterInputObjectSchema),
          z.lazy(
            () =>
              TimeWindowUncheckedUpdateWithoutMedicalCenterInputObjectSchema,
          ),
        ])
        .optional(),
    })
    .strict();

export const TimeWindowUpdateOneWithoutMedicalCenterNestedInputObjectSchema =
  Schema;
