import { z } from 'zod';
import { MedicalCenterUpdateWithoutTimeWindowInputObjectSchema } from './MedicalCenterUpdateWithoutTimeWindowInput.schema';
import { MedicalCenterUncheckedUpdateWithoutTimeWindowInputObjectSchema } from './MedicalCenterUncheckedUpdateWithoutTimeWindowInput.schema';
import { MedicalCenterCreateWithoutTimeWindowInputObjectSchema } from './MedicalCenterCreateWithoutTimeWindowInput.schema';
import { MedicalCenterUncheckedCreateWithoutTimeWindowInputObjectSchema } from './MedicalCenterUncheckedCreateWithoutTimeWindowInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MedicalCenterUpsertWithoutTimeWindowInput> = z
  .object({
    update: z.union([
      z.lazy(() => MedicalCenterUpdateWithoutTimeWindowInputObjectSchema),
      z.lazy(
        () => MedicalCenterUncheckedUpdateWithoutTimeWindowInputObjectSchema,
      ),
    ]),
    create: z.union([
      z.lazy(() => MedicalCenterCreateWithoutTimeWindowInputObjectSchema),
      z.lazy(
        () => MedicalCenterUncheckedCreateWithoutTimeWindowInputObjectSchema,
      ),
    ]),
  })
  .strict();

export const MedicalCenterUpsertWithoutTimeWindowInputObjectSchema = Schema;
