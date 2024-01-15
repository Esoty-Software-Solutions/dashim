import { z } from 'zod';
import { InstitutionMedicalCeneterServiceCreateWithoutInstitutionInputObjectSchema } from './InstitutionMedicalCeneterServiceCreateWithoutInstitutionInput.schema';
import { InstitutionMedicalCeneterServiceUncheckedCreateWithoutInstitutionInputObjectSchema } from './InstitutionMedicalCeneterServiceUncheckedCreateWithoutInstitutionInput.schema';
import { InstitutionMedicalCeneterServiceCreateOrConnectWithoutInstitutionInputObjectSchema } from './InstitutionMedicalCeneterServiceCreateOrConnectWithoutInstitutionInput.schema';
import { InstitutionMedicalCeneterServiceUpsertWithWhereUniqueWithoutInstitutionInputObjectSchema } from './InstitutionMedicalCeneterServiceUpsertWithWhereUniqueWithoutInstitutionInput.schema';
import { InstitutionMedicalCeneterServiceCreateManyInstitutionInputEnvelopeObjectSchema } from './InstitutionMedicalCeneterServiceCreateManyInstitutionInputEnvelope.schema';
import { InstitutionMedicalCeneterServiceWhereUniqueInputObjectSchema } from './InstitutionMedicalCeneterServiceWhereUniqueInput.schema';
import { InstitutionMedicalCeneterServiceUpdateWithWhereUniqueWithoutInstitutionInputObjectSchema } from './InstitutionMedicalCeneterServiceUpdateWithWhereUniqueWithoutInstitutionInput.schema';
import { InstitutionMedicalCeneterServiceUpdateManyWithWhereWithoutInstitutionInputObjectSchema } from './InstitutionMedicalCeneterServiceUpdateManyWithWhereWithoutInstitutionInput.schema';
import { InstitutionMedicalCeneterServiceScalarWhereInputObjectSchema } from './InstitutionMedicalCeneterServiceScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.InstitutionMedicalCeneterServiceUpdateManyWithoutInstitutionNestedInput> =
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
      upsert: z
        .union([
          z.lazy(
            () =>
              InstitutionMedicalCeneterServiceUpsertWithWhereUniqueWithoutInstitutionInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                InstitutionMedicalCeneterServiceUpsertWithWhereUniqueWithoutInstitutionInputObjectSchema,
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
      set: z
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
      disconnect: z
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
      delete: z
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
      update: z
        .union([
          z.lazy(
            () =>
              InstitutionMedicalCeneterServiceUpdateWithWhereUniqueWithoutInstitutionInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                InstitutionMedicalCeneterServiceUpdateWithWhereUniqueWithoutInstitutionInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(
            () =>
              InstitutionMedicalCeneterServiceUpdateManyWithWhereWithoutInstitutionInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                InstitutionMedicalCeneterServiceUpdateManyWithWhereWithoutInstitutionInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      deleteMany: z
        .union([
          z.lazy(
            () => InstitutionMedicalCeneterServiceScalarWhereInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                InstitutionMedicalCeneterServiceScalarWhereInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
    })
    .strict();

export const InstitutionMedicalCeneterServiceUpdateManyWithoutInstitutionNestedInputObjectSchema =
  Schema;
