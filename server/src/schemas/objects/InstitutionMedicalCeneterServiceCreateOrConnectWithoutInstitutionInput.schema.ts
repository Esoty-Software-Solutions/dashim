import { z } from 'zod';
import { InstitutionMedicalCeneterServiceWhereUniqueInputObjectSchema } from './InstitutionMedicalCeneterServiceWhereUniqueInput.schema';
import { InstitutionMedicalCeneterServiceCreateWithoutInstitutionInputObjectSchema } from './InstitutionMedicalCeneterServiceCreateWithoutInstitutionInput.schema';
import { InstitutionMedicalCeneterServiceUncheckedCreateWithoutInstitutionInputObjectSchema } from './InstitutionMedicalCeneterServiceUncheckedCreateWithoutInstitutionInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.InstitutionMedicalCeneterServiceCreateOrConnectWithoutInstitutionInput> =
  z
    .object({
      where: z.lazy(
        () => InstitutionMedicalCeneterServiceWhereUniqueInputObjectSchema,
      ),
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

export const InstitutionMedicalCeneterServiceCreateOrConnectWithoutInstitutionInputObjectSchema =
  Schema;
