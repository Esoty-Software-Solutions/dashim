import { z } from 'zod';
import { InstitutionMedicalServiceCreateWithoutInstitutionInputObjectSchema } from './InstitutionMedicalServiceCreateWithoutInstitutionInput.schema';
import { InstitutionMedicalServiceUncheckedCreateWithoutInstitutionInputObjectSchema } from './InstitutionMedicalServiceUncheckedCreateWithoutInstitutionInput.schema';
import { InstitutionMedicalServiceCreateOrConnectWithoutInstitutionInputObjectSchema } from './InstitutionMedicalServiceCreateOrConnectWithoutInstitutionInput.schema';
import { InstitutionMedicalServiceUpsertWithWhereUniqueWithoutInstitutionInputObjectSchema } from './InstitutionMedicalServiceUpsertWithWhereUniqueWithoutInstitutionInput.schema';
import { InstitutionMedicalServiceCreateManyInstitutionInputEnvelopeObjectSchema } from './InstitutionMedicalServiceCreateManyInstitutionInputEnvelope.schema';
import { InstitutionMedicalServiceWhereUniqueInputObjectSchema } from './InstitutionMedicalServiceWhereUniqueInput.schema';
import { InstitutionMedicalServiceUpdateWithWhereUniqueWithoutInstitutionInputObjectSchema } from './InstitutionMedicalServiceUpdateWithWhereUniqueWithoutInstitutionInput.schema';
import { InstitutionMedicalServiceUpdateManyWithWhereWithoutInstitutionInputObjectSchema } from './InstitutionMedicalServiceUpdateManyWithWhereWithoutInstitutionInput.schema';
import { InstitutionMedicalServiceScalarWhereInputObjectSchema } from './InstitutionMedicalServiceScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.InstitutionMedicalServiceUpdateManyWithoutInstitutionNestedInput> =
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
      upsert: z
        .union([
          z.lazy(
            () =>
              InstitutionMedicalServiceUpsertWithWhereUniqueWithoutInstitutionInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                InstitutionMedicalServiceUpsertWithWhereUniqueWithoutInstitutionInputObjectSchema,
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
      set: z
        .union([
          z.lazy(() => InstitutionMedicalServiceWhereUniqueInputObjectSchema),
          z
            .lazy(() => InstitutionMedicalServiceWhereUniqueInputObjectSchema)
            .array(),
        ])
        .optional(),
      disconnect: z
        .union([
          z.lazy(() => InstitutionMedicalServiceWhereUniqueInputObjectSchema),
          z
            .lazy(() => InstitutionMedicalServiceWhereUniqueInputObjectSchema)
            .array(),
        ])
        .optional(),
      delete: z
        .union([
          z.lazy(() => InstitutionMedicalServiceWhereUniqueInputObjectSchema),
          z
            .lazy(() => InstitutionMedicalServiceWhereUniqueInputObjectSchema)
            .array(),
        ])
        .optional(),
      connect: z
        .union([
          z.lazy(() => InstitutionMedicalServiceWhereUniqueInputObjectSchema),
          z
            .lazy(() => InstitutionMedicalServiceWhereUniqueInputObjectSchema)
            .array(),
        ])
        .optional(),
      update: z
        .union([
          z.lazy(
            () =>
              InstitutionMedicalServiceUpdateWithWhereUniqueWithoutInstitutionInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                InstitutionMedicalServiceUpdateWithWhereUniqueWithoutInstitutionInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(
            () =>
              InstitutionMedicalServiceUpdateManyWithWhereWithoutInstitutionInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                InstitutionMedicalServiceUpdateManyWithWhereWithoutInstitutionInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      deleteMany: z
        .union([
          z.lazy(() => InstitutionMedicalServiceScalarWhereInputObjectSchema),
          z
            .lazy(() => InstitutionMedicalServiceScalarWhereInputObjectSchema)
            .array(),
        ])
        .optional(),
    })
    .strict();

export const InstitutionMedicalServiceUpdateManyWithoutInstitutionNestedInputObjectSchema =
  Schema;
