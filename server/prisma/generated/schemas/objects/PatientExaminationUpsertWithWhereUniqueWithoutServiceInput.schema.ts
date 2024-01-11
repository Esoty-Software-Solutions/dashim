import { z } from 'zod';
import { PatientExaminationWhereUniqueInputObjectSchema } from './PatientExaminationWhereUniqueInput.schema';
import { PatientExaminationUpdateWithoutServiceInputObjectSchema } from './PatientExaminationUpdateWithoutServiceInput.schema';
import { PatientExaminationUncheckedUpdateWithoutServiceInputObjectSchema } from './PatientExaminationUncheckedUpdateWithoutServiceInput.schema';
import { PatientExaminationCreateWithoutServiceInputObjectSchema } from './PatientExaminationCreateWithoutServiceInput.schema';
import { PatientExaminationUncheckedCreateWithoutServiceInputObjectSchema } from './PatientExaminationUncheckedCreateWithoutServiceInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PatientExaminationUpsertWithWhereUniqueWithoutServiceInput> =
  z
    .object({
      where: z.lazy(() => PatientExaminationWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => PatientExaminationUpdateWithoutServiceInputObjectSchema),
        z.lazy(
          () =>
            PatientExaminationUncheckedUpdateWithoutServiceInputObjectSchema,
        ),
      ]),
      create: z.union([
        z.lazy(() => PatientExaminationCreateWithoutServiceInputObjectSchema),
        z.lazy(
          () =>
            PatientExaminationUncheckedCreateWithoutServiceInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const PatientExaminationUpsertWithWhereUniqueWithoutServiceInputObjectSchema =
  Schema;
