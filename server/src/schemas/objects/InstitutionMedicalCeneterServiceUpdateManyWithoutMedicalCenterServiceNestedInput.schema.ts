import { z } from 'zod';
import { InstitutionMedicalCeneterServiceCreateWithoutMedicalCenterServiceInputObjectSchema } from './InstitutionMedicalCeneterServiceCreateWithoutMedicalCenterServiceInput.schema';
import { InstitutionMedicalCeneterServiceUncheckedCreateWithoutMedicalCenterServiceInputObjectSchema } from './InstitutionMedicalCeneterServiceUncheckedCreateWithoutMedicalCenterServiceInput.schema';
import { InstitutionMedicalCeneterServiceCreateOrConnectWithoutMedicalCenterServiceInputObjectSchema } from './InstitutionMedicalCeneterServiceCreateOrConnectWithoutMedicalCenterServiceInput.schema';
import { InstitutionMedicalCeneterServiceUpsertWithWhereUniqueWithoutMedicalCenterServiceInputObjectSchema } from './InstitutionMedicalCeneterServiceUpsertWithWhereUniqueWithoutMedicalCenterServiceInput.schema';
import { InstitutionMedicalCeneterServiceCreateManyMedicalCenterServiceInputEnvelopeObjectSchema } from './InstitutionMedicalCeneterServiceCreateManyMedicalCenterServiceInputEnvelope.schema';
import { InstitutionMedicalCeneterServiceWhereUniqueInputObjectSchema } from './InstitutionMedicalCeneterServiceWhereUniqueInput.schema';
import { InstitutionMedicalCeneterServiceUpdateWithWhereUniqueWithoutMedicalCenterServiceInputObjectSchema } from './InstitutionMedicalCeneterServiceUpdateWithWhereUniqueWithoutMedicalCenterServiceInput.schema';
import { InstitutionMedicalCeneterServiceUpdateManyWithWhereWithoutMedicalCenterServiceInputObjectSchema } from './InstitutionMedicalCeneterServiceUpdateManyWithWhereWithoutMedicalCenterServiceInput.schema';
import { InstitutionMedicalCeneterServiceScalarWhereInputObjectSchema } from './InstitutionMedicalCeneterServiceScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.InstitutionMedicalCeneterServiceUpdateManyWithoutMedicalCenterServiceNestedInput> =
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
      upsert: z
        .union([
          z.lazy(
            () =>
              InstitutionMedicalCeneterServiceUpsertWithWhereUniqueWithoutMedicalCenterServiceInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                InstitutionMedicalCeneterServiceUpsertWithWhereUniqueWithoutMedicalCenterServiceInputObjectSchema,
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
              InstitutionMedicalCeneterServiceUpdateWithWhereUniqueWithoutMedicalCenterServiceInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                InstitutionMedicalCeneterServiceUpdateWithWhereUniqueWithoutMedicalCenterServiceInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(
            () =>
              InstitutionMedicalCeneterServiceUpdateManyWithWhereWithoutMedicalCenterServiceInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                InstitutionMedicalCeneterServiceUpdateManyWithWhereWithoutMedicalCenterServiceInputObjectSchema,
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

export const InstitutionMedicalCeneterServiceUpdateManyWithoutMedicalCenterServiceNestedInputObjectSchema =
  Schema;
