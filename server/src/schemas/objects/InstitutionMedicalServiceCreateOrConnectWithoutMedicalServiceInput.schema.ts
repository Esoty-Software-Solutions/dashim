import { z } from 'zod';
import { InstitutionMedicalServiceWhereUniqueInputObjectSchema } from './InstitutionMedicalServiceWhereUniqueInput.schema';
import { InstitutionMedicalServiceCreateWithoutMedicalServiceInputObjectSchema } from './InstitutionMedicalServiceCreateWithoutMedicalServiceInput.schema';
import { InstitutionMedicalServiceUncheckedCreateWithoutMedicalServiceInputObjectSchema } from './InstitutionMedicalServiceUncheckedCreateWithoutMedicalServiceInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.InstitutionMedicalServiceCreateOrConnectWithoutMedicalServiceInput> =
  z
    .object({
      where: z.lazy(
        () => InstitutionMedicalServiceWhereUniqueInputObjectSchema,
      ),
      create: z.union([
        z.lazy(
          () =>
            InstitutionMedicalServiceCreateWithoutMedicalServiceInputObjectSchema,
        ),
        z.lazy(
          () =>
            InstitutionMedicalServiceUncheckedCreateWithoutMedicalServiceInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const InstitutionMedicalServiceCreateOrConnectWithoutMedicalServiceInputObjectSchema =
  Schema;
