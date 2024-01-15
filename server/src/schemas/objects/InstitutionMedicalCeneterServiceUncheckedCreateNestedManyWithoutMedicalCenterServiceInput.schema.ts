import { z } from 'zod';
import { InstitutionMedicalCeneterServiceCreateWithoutMedicalCenterServiceInputObjectSchema } from './InstitutionMedicalCeneterServiceCreateWithoutMedicalCenterServiceInput.schema';
import { InstitutionMedicalCeneterServiceUncheckedCreateWithoutMedicalCenterServiceInputObjectSchema } from './InstitutionMedicalCeneterServiceUncheckedCreateWithoutMedicalCenterServiceInput.schema';
import { InstitutionMedicalCeneterServiceCreateOrConnectWithoutMedicalCenterServiceInputObjectSchema } from './InstitutionMedicalCeneterServiceCreateOrConnectWithoutMedicalCenterServiceInput.schema';
import { InstitutionMedicalCeneterServiceCreateManyMedicalCenterServiceInputEnvelopeObjectSchema } from './InstitutionMedicalCeneterServiceCreateManyMedicalCenterServiceInputEnvelope.schema';
import { InstitutionMedicalCeneterServiceWhereUniqueInputObjectSchema } from './InstitutionMedicalCeneterServiceWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.InstitutionMedicalCeneterServiceUncheckedCreateNestedManyWithoutMedicalCenterServiceInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(
            () =>
              InstitutionMedicalCeneterServiceCreateWithoutMedicalCenterServiceInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                InstitutionMedicalCeneterServiceCreateWithoutMedicalCenterServiceInputObjectSchema,
            )
            .array(),
          z.lazy(
            () =>
              InstitutionMedicalCeneterServiceUncheckedCreateWithoutMedicalCenterServiceInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                InstitutionMedicalCeneterServiceUncheckedCreateWithoutMedicalCenterServiceInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(
            () =>
              InstitutionMedicalCeneterServiceCreateOrConnectWithoutMedicalCenterServiceInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                InstitutionMedicalCeneterServiceCreateOrConnectWithoutMedicalCenterServiceInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(
          () =>
            InstitutionMedicalCeneterServiceCreateManyMedicalCenterServiceInputEnvelopeObjectSchema,
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

export const InstitutionMedicalCeneterServiceUncheckedCreateNestedManyWithoutMedicalCenterServiceInputObjectSchema =
  Schema;
