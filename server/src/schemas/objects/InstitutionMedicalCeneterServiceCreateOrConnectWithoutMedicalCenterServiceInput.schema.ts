import { z } from 'zod';
import { InstitutionMedicalCeneterServiceWhereUniqueInputObjectSchema } from './InstitutionMedicalCeneterServiceWhereUniqueInput.schema';
import { InstitutionMedicalCeneterServiceCreateWithoutMedicalCenterServiceInputObjectSchema } from './InstitutionMedicalCeneterServiceCreateWithoutMedicalCenterServiceInput.schema';
import { InstitutionMedicalCeneterServiceUncheckedCreateWithoutMedicalCenterServiceInputObjectSchema } from './InstitutionMedicalCeneterServiceUncheckedCreateWithoutMedicalCenterServiceInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.InstitutionMedicalCeneterServiceCreateOrConnectWithoutMedicalCenterServiceInput> =
  z
    .object({
      where: z.lazy(
        () => InstitutionMedicalCeneterServiceWhereUniqueInputObjectSchema,
      ),
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

export const InstitutionMedicalCeneterServiceCreateOrConnectWithoutMedicalCenterServiceInputObjectSchema =
  Schema;
