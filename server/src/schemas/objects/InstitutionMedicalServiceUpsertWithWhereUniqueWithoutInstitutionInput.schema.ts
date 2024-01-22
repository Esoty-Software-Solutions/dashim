import { z } from 'zod';
import { InstitutionMedicalServiceWhereUniqueInputObjectSchema } from './InstitutionMedicalServiceWhereUniqueInput.schema';
import { InstitutionMedicalServiceUpdateWithoutInstitutionInputObjectSchema } from './InstitutionMedicalServiceUpdateWithoutInstitutionInput.schema';
import { InstitutionMedicalServiceUncheckedUpdateWithoutInstitutionInputObjectSchema } from './InstitutionMedicalServiceUncheckedUpdateWithoutInstitutionInput.schema';
import { InstitutionMedicalServiceCreateWithoutInstitutionInputObjectSchema } from './InstitutionMedicalServiceCreateWithoutInstitutionInput.schema';
import { InstitutionMedicalServiceUncheckedCreateWithoutInstitutionInputObjectSchema } from './InstitutionMedicalServiceUncheckedCreateWithoutInstitutionInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.InstitutionMedicalServiceUpsertWithWhereUniqueWithoutInstitutionInput> =
  z
    .object({
      where: z.lazy(
        () => InstitutionMedicalServiceWhereUniqueInputObjectSchema,
      ),
      update: z.union([
        z.lazy(
          () =>
            InstitutionMedicalServiceUpdateWithoutInstitutionInputObjectSchema,
        ),
        z.lazy(
          () =>
            InstitutionMedicalServiceUncheckedUpdateWithoutInstitutionInputObjectSchema,
        ),
      ]),
      create: z.union([
        z.lazy(
          () =>
            InstitutionMedicalServiceCreateWithoutInstitutionInputObjectSchema,
        ),
        z.lazy(
          () =>
            InstitutionMedicalServiceUncheckedCreateWithoutInstitutionInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const InstitutionMedicalServiceUpsertWithWhereUniqueWithoutInstitutionInputObjectSchema =
  Schema;
