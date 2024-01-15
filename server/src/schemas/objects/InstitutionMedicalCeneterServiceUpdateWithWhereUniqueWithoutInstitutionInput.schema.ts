import { z } from 'zod';
import { InstitutionMedicalCeneterServiceWhereUniqueInputObjectSchema } from './InstitutionMedicalCeneterServiceWhereUniqueInput.schema';
import { InstitutionMedicalCeneterServiceUpdateWithoutInstitutionInputObjectSchema } from './InstitutionMedicalCeneterServiceUpdateWithoutInstitutionInput.schema';
import { InstitutionMedicalCeneterServiceUncheckedUpdateWithoutInstitutionInputObjectSchema } from './InstitutionMedicalCeneterServiceUncheckedUpdateWithoutInstitutionInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.InstitutionMedicalCeneterServiceUpdateWithWhereUniqueWithoutInstitutionInput> =
  z
    .object({
      where: z.lazy(
        () => InstitutionMedicalCeneterServiceWhereUniqueInputObjectSchema,
      ),
      data: z.union([
        z.lazy(
          () =>
            InstitutionMedicalCeneterServiceUpdateWithoutInstitutionInputObjectSchema,
        ),
        z.lazy(
          () =>
            InstitutionMedicalCeneterServiceUncheckedUpdateWithoutInstitutionInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const InstitutionMedicalCeneterServiceUpdateWithWhereUniqueWithoutInstitutionInputObjectSchema =
  Schema;
