import { z } from 'zod';
import { MedicalCenterCreateWithoutTimeWindowInputObjectSchema } from './MedicalCenterCreateWithoutTimeWindowInput.schema';
import { MedicalCenterUncheckedCreateWithoutTimeWindowInputObjectSchema } from './MedicalCenterUncheckedCreateWithoutTimeWindowInput.schema';
import { MedicalCenterCreateOrConnectWithoutTimeWindowInputObjectSchema } from './MedicalCenterCreateOrConnectWithoutTimeWindowInput.schema';
import { MedicalCenterWhereUniqueInputObjectSchema } from './MedicalCenterWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MedicalCenterCreateNestedOneWithoutTimeWindowInput> =
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
      connect: z
        .lazy(() => MedicalCenterWhereUniqueInputObjectSchema)
        .optional(),
    })
    .strict();

export const MedicalCenterCreateNestedOneWithoutTimeWindowInputObjectSchema =
  Schema;
