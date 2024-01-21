import { z } from 'zod';
import { MedicalServiceWhereUniqueInputObjectSchema } from './MedicalServiceWhereUniqueInput.schema';
import { MedicalServiceUpdateWithoutMedicalCenterInputObjectSchema } from './MedicalServiceUpdateWithoutMedicalCenterInput.schema';
import { MedicalServiceUncheckedUpdateWithoutMedicalCenterInputObjectSchema } from './MedicalServiceUncheckedUpdateWithoutMedicalCenterInput.schema';
import { MedicalServiceCreateWithoutMedicalCenterInputObjectSchema } from './MedicalServiceCreateWithoutMedicalCenterInput.schema';
import { MedicalServiceUncheckedCreateWithoutMedicalCenterInputObjectSchema } from './MedicalServiceUncheckedCreateWithoutMedicalCenterInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MedicalServiceUpsertWithWhereUniqueWithoutMedicalCenterInput> =
  z
    .object({
      where: z.lazy(() => MedicalServiceWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => MedicalServiceUpdateWithoutMedicalCenterInputObjectSchema),
        z.lazy(
          () =>
            MedicalServiceUncheckedUpdateWithoutMedicalCenterInputObjectSchema,
        ),
      ]),
      create: z.union([
        z.lazy(() => MedicalServiceCreateWithoutMedicalCenterInputObjectSchema),
        z.lazy(
          () =>
            MedicalServiceUncheckedCreateWithoutMedicalCenterInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const MedicalServiceUpsertWithWhereUniqueWithoutMedicalCenterInputObjectSchema =
  Schema;
