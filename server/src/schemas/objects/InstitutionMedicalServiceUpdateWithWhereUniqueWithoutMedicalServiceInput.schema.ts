import { z } from 'zod';
import { InstitutionMedicalServiceWhereUniqueInputObjectSchema } from './InstitutionMedicalServiceWhereUniqueInput.schema';
import { InstitutionMedicalServiceUpdateWithoutMedicalServiceInputObjectSchema } from './InstitutionMedicalServiceUpdateWithoutMedicalServiceInput.schema';
import { InstitutionMedicalServiceUncheckedUpdateWithoutMedicalServiceInputObjectSchema } from './InstitutionMedicalServiceUncheckedUpdateWithoutMedicalServiceInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.InstitutionMedicalServiceUpdateWithWhereUniqueWithoutMedicalServiceInput> =
  z
    .object({
      where: z.lazy(
        () => InstitutionMedicalServiceWhereUniqueInputObjectSchema,
      ),
      data: z.union([
        z.lazy(
          () =>
            InstitutionMedicalServiceUpdateWithoutMedicalServiceInputObjectSchema,
        ),
        z.lazy(
          () =>
            InstitutionMedicalServiceUncheckedUpdateWithoutMedicalServiceInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const InstitutionMedicalServiceUpdateWithWhereUniqueWithoutMedicalServiceInputObjectSchema =
  Schema;
