import { z } from 'zod';
import { MedicalServiceWhereUniqueInputObjectSchema } from './MedicalServiceWhereUniqueInput.schema';
import { MedicalServiceUpdateWithoutMedicalCenterInputObjectSchema } from './MedicalServiceUpdateWithoutMedicalCenterInput.schema';
import { MedicalServiceUncheckedUpdateWithoutMedicalCenterInputObjectSchema } from './MedicalServiceUncheckedUpdateWithoutMedicalCenterInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MedicalServiceUpdateWithWhereUniqueWithoutMedicalCenterInput> =
  z
    .object({
      where: z.lazy(() => MedicalServiceWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => MedicalServiceUpdateWithoutMedicalCenterInputObjectSchema),
        z.lazy(
          () =>
            MedicalServiceUncheckedUpdateWithoutMedicalCenterInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const MedicalServiceUpdateWithWhereUniqueWithoutMedicalCenterInputObjectSchema =
  Schema;
