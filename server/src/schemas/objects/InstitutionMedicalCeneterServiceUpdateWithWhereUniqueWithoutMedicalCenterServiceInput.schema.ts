import { z } from 'zod';
import { InstitutionMedicalCeneterServiceWhereUniqueInputObjectSchema } from './InstitutionMedicalCeneterServiceWhereUniqueInput.schema';
import { InstitutionMedicalCeneterServiceUpdateWithoutMedicalCenterServiceInputObjectSchema } from './InstitutionMedicalCeneterServiceUpdateWithoutMedicalCenterServiceInput.schema';
import { InstitutionMedicalCeneterServiceUncheckedUpdateWithoutMedicalCenterServiceInputObjectSchema } from './InstitutionMedicalCeneterServiceUncheckedUpdateWithoutMedicalCenterServiceInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.InstitutionMedicalCeneterServiceUpdateWithWhereUniqueWithoutMedicalCenterServiceInput> =
  z
    .object({
      where: z.lazy(
        () => InstitutionMedicalCeneterServiceWhereUniqueInputObjectSchema,
      ),
      data: z.union([
        z.lazy(
          () =>
            InstitutionMedicalCeneterServiceUpdateWithoutMedicalCenterServiceInputObjectSchema,
        ),
        z.lazy(
          () =>
            InstitutionMedicalCeneterServiceUncheckedUpdateWithoutMedicalCenterServiceInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const InstitutionMedicalCeneterServiceUpdateWithWhereUniqueWithoutMedicalCenterServiceInputObjectSchema =
  Schema;
