import { z } from 'zod';
import { PatientExaminationWhereUniqueInputObjectSchema } from './PatientExaminationWhereUniqueInput.schema';
import { PatientExaminationUpdateWithoutServiceInputObjectSchema } from './PatientExaminationUpdateWithoutServiceInput.schema';
import { PatientExaminationUncheckedUpdateWithoutServiceInputObjectSchema } from './PatientExaminationUncheckedUpdateWithoutServiceInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PatientExaminationUpdateWithWhereUniqueWithoutServiceInput> =
  z
    .object({
      where: z.lazy(() => PatientExaminationWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => PatientExaminationUpdateWithoutServiceInputObjectSchema),
        z.lazy(
          () =>
            PatientExaminationUncheckedUpdateWithoutServiceInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const PatientExaminationUpdateWithWhereUniqueWithoutServiceInputObjectSchema =
  Schema;
