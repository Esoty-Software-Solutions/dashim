import { z } from 'zod';
import { TimeWindowUpdateWithoutMedicalCenterInputObjectSchema } from './TimeWindowUpdateWithoutMedicalCenterInput.schema';
import { TimeWindowUncheckedUpdateWithoutMedicalCenterInputObjectSchema } from './TimeWindowUncheckedUpdateWithoutMedicalCenterInput.schema';
import { TimeWindowCreateWithoutMedicalCenterInputObjectSchema } from './TimeWindowCreateWithoutMedicalCenterInput.schema';
import { TimeWindowUncheckedCreateWithoutMedicalCenterInputObjectSchema } from './TimeWindowUncheckedCreateWithoutMedicalCenterInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TimeWindowUpsertWithoutMedicalCenterInput> = z
  .object({
    update: z.union([
      z.lazy(() => TimeWindowUpdateWithoutMedicalCenterInputObjectSchema),
      z.lazy(
        () => TimeWindowUncheckedUpdateWithoutMedicalCenterInputObjectSchema,
      ),
    ]),
    create: z.union([
      z.lazy(() => TimeWindowCreateWithoutMedicalCenterInputObjectSchema),
      z.lazy(
        () => TimeWindowUncheckedCreateWithoutMedicalCenterInputObjectSchema,
      ),
    ]),
  })
  .strict();

export const TimeWindowUpsertWithoutMedicalCenterInputObjectSchema = Schema;
