import { z } from 'zod';
import { PatientExaminationWhereUniqueInputObjectSchema } from './PatientExaminationWhereUniqueInput.schema';
import { PatientExaminationCreateWithoutServiceInputObjectSchema } from './PatientExaminationCreateWithoutServiceInput.schema';
import { PatientExaminationUncheckedCreateWithoutServiceInputObjectSchema } from './PatientExaminationUncheckedCreateWithoutServiceInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PatientExaminationCreateOrConnectWithoutServiceInput> =
  z
    .object({
      where: z.lazy(() => PatientExaminationWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => PatientExaminationCreateWithoutServiceInputObjectSchema),
        z.lazy(
          () =>
            PatientExaminationUncheckedCreateWithoutServiceInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const PatientExaminationCreateOrConnectWithoutServiceInputObjectSchema =
  Schema;
