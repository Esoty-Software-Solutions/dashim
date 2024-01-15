import { z } from 'zod';
import { InstitutionMedicalCeneterServiceCreateWithoutInstitutionInputObjectSchema } from './InstitutionMedicalCeneterServiceCreateWithoutInstitutionInput.schema';
import { InstitutionMedicalCeneterServiceUncheckedCreateWithoutInstitutionInputObjectSchema } from './InstitutionMedicalCeneterServiceUncheckedCreateWithoutInstitutionInput.schema';
import { InstitutionMedicalCeneterServiceCreateOrConnectWithoutInstitutionInputObjectSchema } from './InstitutionMedicalCeneterServiceCreateOrConnectWithoutInstitutionInput.schema';
import { InstitutionMedicalCeneterServiceCreateManyInstitutionInputEnvelopeObjectSchema } from './InstitutionMedicalCeneterServiceCreateManyInstitutionInputEnvelope.schema';
import { InstitutionMedicalCeneterServiceWhereUniqueInputObjectSchema } from './InstitutionMedicalCeneterServiceWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.InstitutionMedicalCeneterServiceCreateNestedManyWithoutInstitutionInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(
            () =>
              InstitutionMedicalCeneterServiceCreateWithoutInstitutionInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                InstitutionMedicalCeneterServiceCreateWithoutInstitutionInputObjectSchema,
            )
            .array(),
          z.lazy(
            () =>
              InstitutionMedicalCeneterServiceUncheckedCreateWithoutInstitutionInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                InstitutionMedicalCeneterServiceUncheckedCreateWithoutInstitutionInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(
            () =>
              InstitutionMedicalCeneterServiceCreateOrConnectWithoutInstitutionInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                InstitutionMedicalCeneterServiceCreateOrConnectWithoutInstitutionInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(
          () =>
            InstitutionMedicalCeneterServiceCreateManyInstitutionInputEnvelopeObjectSchema,
        )
        .optional(),
      connect: z
        .union([
          z.lazy(
            () => InstitutionMedicalCeneterServiceWhereUniqueInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                InstitutionMedicalCeneterServiceWhereUniqueInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
    })
    .strict();

export const InstitutionMedicalCeneterServiceCreateNestedManyWithoutInstitutionInputObjectSchema =
  Schema;
