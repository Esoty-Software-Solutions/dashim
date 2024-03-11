import { z } from 'zod';
import { InstitutionMedicalServiceWhereUniqueInputObjectSchema } from './InstitutionMedicalServiceWhereUniqueInput.schema';
import { InstitutionMedicalServiceUpdateWithoutInstitutionInputObjectSchema } from './InstitutionMedicalServiceUpdateWithoutInstitutionInput.schema';
import { InstitutionMedicalServiceUncheckedUpdateWithoutInstitutionInputObjectSchema } from './InstitutionMedicalServiceUncheckedUpdateWithoutInstitutionInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.InstitutionMedicalServiceUpdateWithWhereUniqueWithoutInstitutionInput> =
  z
    .object({
      where: z.lazy(
        () => InstitutionMedicalServiceWhereUniqueInputObjectSchema,
      ),
      data: z.union([
        z.lazy(
          () =>
            InstitutionMedicalServiceUpdateWithoutInstitutionInputObjectSchema,
        ),
        z.lazy(
          () =>
            InstitutionMedicalServiceUncheckedUpdateWithoutInstitutionInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const InstitutionMedicalServiceUpdateWithWhereUniqueWithoutInstitutionInputObjectSchema =
  Schema;
