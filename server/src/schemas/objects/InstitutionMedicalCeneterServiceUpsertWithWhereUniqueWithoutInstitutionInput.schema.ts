import { z } from 'zod';
import { InstitutionMedicalCeneterServiceWhereUniqueInputObjectSchema } from './InstitutionMedicalCeneterServiceWhereUniqueInput.schema';
import { InstitutionMedicalCeneterServiceUpdateWithoutInstitutionInputObjectSchema } from './InstitutionMedicalCeneterServiceUpdateWithoutInstitutionInput.schema';
import { InstitutionMedicalCeneterServiceUncheckedUpdateWithoutInstitutionInputObjectSchema } from './InstitutionMedicalCeneterServiceUncheckedUpdateWithoutInstitutionInput.schema';
import { InstitutionMedicalCeneterServiceCreateWithoutInstitutionInputObjectSchema } from './InstitutionMedicalCeneterServiceCreateWithoutInstitutionInput.schema';
import { InstitutionMedicalCeneterServiceUncheckedCreateWithoutInstitutionInputObjectSchema } from './InstitutionMedicalCeneterServiceUncheckedCreateWithoutInstitutionInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.InstitutionMedicalCeneterServiceUpsertWithWhereUniqueWithoutInstitutionInput> =
  z
    .object({
      where: z.lazy(
        () => InstitutionMedicalCeneterServiceWhereUniqueInputObjectSchema,
      ),
      update: z.union([
        z.lazy(
          () =>
            InstitutionMedicalCeneterServiceUpdateWithoutInstitutionInputObjectSchema,
        ),
        z.lazy(
          () =>
            InstitutionMedicalCeneterServiceUncheckedUpdateWithoutInstitutionInputObjectSchema,
        ),
      ]),
      create: z.union([
        z.lazy(
          () =>
            InstitutionMedicalCeneterServiceCreateWithoutInstitutionInputObjectSchema,
        ),
        z.lazy(
          () =>
            InstitutionMedicalCeneterServiceUncheckedCreateWithoutInstitutionInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const InstitutionMedicalCeneterServiceUpsertWithWhereUniqueWithoutInstitutionInputObjectSchema =
  Schema;
