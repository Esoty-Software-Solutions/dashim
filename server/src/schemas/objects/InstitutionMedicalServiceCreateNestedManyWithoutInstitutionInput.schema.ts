import { z } from 'zod';
import { InstitutionMedicalServiceCreateWithoutInstitutionInputObjectSchema } from './InstitutionMedicalServiceCreateWithoutInstitutionInput.schema';
import { InstitutionMedicalServiceUncheckedCreateWithoutInstitutionInputObjectSchema } from './InstitutionMedicalServiceUncheckedCreateWithoutInstitutionInput.schema';
import { InstitutionMedicalServiceCreateOrConnectWithoutInstitutionInputObjectSchema } from './InstitutionMedicalServiceCreateOrConnectWithoutInstitutionInput.schema';
import { InstitutionMedicalServiceCreateManyInstitutionInputEnvelopeObjectSchema } from './InstitutionMedicalServiceCreateManyInstitutionInputEnvelope.schema';
import { InstitutionMedicalServiceWhereUniqueInputObjectSchema } from './InstitutionMedicalServiceWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.InstitutionMedicalServiceCreateNestedManyWithoutInstitutionInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(
            () =>
              InstitutionMedicalServiceCreateWithoutInstitutionInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                InstitutionMedicalServiceCreateWithoutInstitutionInputObjectSchema,
            )
            .array(),
          z.lazy(
            () =>
              InstitutionMedicalServiceUncheckedCreateWithoutInstitutionInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                InstitutionMedicalServiceUncheckedCreateWithoutInstitutionInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(
            () =>
              InstitutionMedicalServiceCreateOrConnectWithoutInstitutionInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                InstitutionMedicalServiceCreateOrConnectWithoutInstitutionInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(
          () =>
            InstitutionMedicalServiceCreateManyInstitutionInputEnvelopeObjectSchema,
        )
        .optional(),
      connect: z
        .union([
          z.lazy(() => InstitutionMedicalServiceWhereUniqueInputObjectSchema),
          z
            .lazy(() => InstitutionMedicalServiceWhereUniqueInputObjectSchema)
            .array(),
        ])
        .optional(),
    })
    .strict();

export const InstitutionMedicalServiceCreateNestedManyWithoutInstitutionInputObjectSchema =
  Schema;
