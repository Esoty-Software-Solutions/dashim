import { z } from 'zod';
import { MedicalCenterCreateWithoutTimeWindowInputObjectSchema } from './MedicalCenterCreateWithoutTimeWindowInput.schema';
import { MedicalCenterUncheckedCreateWithoutTimeWindowInputObjectSchema } from './MedicalCenterUncheckedCreateWithoutTimeWindowInput.schema';
import { MedicalCenterCreateOrConnectWithoutTimeWindowInputObjectSchema } from './MedicalCenterCreateOrConnectWithoutTimeWindowInput.schema';
import { MedicalCenterUpsertWithoutTimeWindowInputObjectSchema } from './MedicalCenterUpsertWithoutTimeWindowInput.schema';
import { MedicalCenterWhereUniqueInputObjectSchema } from './MedicalCenterWhereUniqueInput.schema';
import { MedicalCenterUpdateWithoutTimeWindowInputObjectSchema } from './MedicalCenterUpdateWithoutTimeWindowInput.schema';
import { MedicalCenterUncheckedUpdateWithoutTimeWindowInputObjectSchema } from './MedicalCenterUncheckedUpdateWithoutTimeWindowInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MedicalCenterUpdateOneRequiredWithoutTimeWindowNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => MedicalCenterCreateWithoutTimeWindowInputObjectSchema),
          z.lazy(
            () =>
              MedicalCenterUncheckedCreateWithoutTimeWindowInputObjectSchema,
          ),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(
          () => MedicalCenterCreateOrConnectWithoutTimeWindowInputObjectSchema,
        )
        .optional(),
      upsert: z
        .lazy(() => MedicalCenterUpsertWithoutTimeWindowInputObjectSchema)
        .optional(),
      connect: z
        .lazy(() => MedicalCenterWhereUniqueInputObjectSchema)
        .optional(),
      update: z
        .union([
          z.lazy(() => MedicalCenterUpdateWithoutTimeWindowInputObjectSchema),
          z.lazy(
            () =>
              MedicalCenterUncheckedUpdateWithoutTimeWindowInputObjectSchema,
          ),
        ])
        .optional(),
    })
    .strict();

export const MedicalCenterUpdateOneRequiredWithoutTimeWindowNestedInputObjectSchema =
  Schema;
