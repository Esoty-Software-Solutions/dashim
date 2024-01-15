import { z } from 'zod';
import { InstitutionMedicalCeneterServiceWhereUniqueInputObjectSchema } from './InstitutionMedicalCeneterServiceWhereUniqueInput.schema';
import { InstitutionMedicalCeneterServiceUpdateWithoutMedicalCenterServiceInputObjectSchema } from './InstitutionMedicalCeneterServiceUpdateWithoutMedicalCenterServiceInput.schema';
import { InstitutionMedicalCeneterServiceUncheckedUpdateWithoutMedicalCenterServiceInputObjectSchema } from './InstitutionMedicalCeneterServiceUncheckedUpdateWithoutMedicalCenterServiceInput.schema';
import { InstitutionMedicalCeneterServiceCreateWithoutMedicalCenterServiceInputObjectSchema } from './InstitutionMedicalCeneterServiceCreateWithoutMedicalCenterServiceInput.schema';
import { InstitutionMedicalCeneterServiceUncheckedCreateWithoutMedicalCenterServiceInputObjectSchema } from './InstitutionMedicalCeneterServiceUncheckedCreateWithoutMedicalCenterServiceInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.InstitutionMedicalCeneterServiceUpsertWithWhereUniqueWithoutMedicalCenterServiceInput> =
  z
    .object({
      where: z.lazy(
        () => InstitutionMedicalCeneterServiceWhereUniqueInputObjectSchema,
      ),
      update: z.union([
        z.lazy(
          () =>
            InstitutionMedicalCeneterServiceUpdateWithoutMedicalCenterServiceInputObjectSchema,
        ),
        z.lazy(
          () =>
            InstitutionMedicalCeneterServiceUncheckedUpdateWithoutMedicalCenterServiceInputObjectSchema,
        ),
      ]),
      create: z.union([
        z.lazy(
          () =>
            InstitutionMedicalCeneterServiceCreateWithoutMedicalCenterServiceInputObjectSchema,
        ),
        z.lazy(
          () =>
            InstitutionMedicalCeneterServiceUncheckedCreateWithoutMedicalCenterServiceInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const InstitutionMedicalCeneterServiceUpsertWithWhereUniqueWithoutMedicalCenterServiceInputObjectSchema =
  Schema;
