import { z } from 'zod';
import { InsurancePolicyMedicalCentersCreateWithoutMedicalCenterInputObjectSchema } from './InsurancePolicyMedicalCentersCreateWithoutMedicalCenterInput.schema';
import { InsurancePolicyMedicalCentersUncheckedCreateWithoutMedicalCenterInputObjectSchema } from './InsurancePolicyMedicalCentersUncheckedCreateWithoutMedicalCenterInput.schema';
import { InsurancePolicyMedicalCentersCreateOrConnectWithoutMedicalCenterInputObjectSchema } from './InsurancePolicyMedicalCentersCreateOrConnectWithoutMedicalCenterInput.schema';
import { InsurancePolicyMedicalCentersUpsertWithWhereUniqueWithoutMedicalCenterInputObjectSchema } from './InsurancePolicyMedicalCentersUpsertWithWhereUniqueWithoutMedicalCenterInput.schema';
import { InsurancePolicyMedicalCentersCreateManyMedicalCenterInputEnvelopeObjectSchema } from './InsurancePolicyMedicalCentersCreateManyMedicalCenterInputEnvelope.schema';
import { InsurancePolicyMedicalCentersWhereUniqueInputObjectSchema } from './InsurancePolicyMedicalCentersWhereUniqueInput.schema';
import { InsurancePolicyMedicalCentersUpdateWithWhereUniqueWithoutMedicalCenterInputObjectSchema } from './InsurancePolicyMedicalCentersUpdateWithWhereUniqueWithoutMedicalCenterInput.schema';
import { InsurancePolicyMedicalCentersUpdateManyWithWhereWithoutMedicalCenterInputObjectSchema } from './InsurancePolicyMedicalCentersUpdateManyWithWhereWithoutMedicalCenterInput.schema';
import { InsurancePolicyMedicalCentersScalarWhereInputObjectSchema } from './InsurancePolicyMedicalCentersScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.InsurancePolicyMedicalCentersUpdateManyWithoutMedicalCenterNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(
            () =>
              InsurancePolicyMedicalCentersCreateWithoutMedicalCenterInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                InsurancePolicyMedicalCentersCreateWithoutMedicalCenterInputObjectSchema,
            )
            .array(),
          z.lazy(
            () =>
              InsurancePolicyMedicalCentersUncheckedCreateWithoutMedicalCenterInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                InsurancePolicyMedicalCentersUncheckedCreateWithoutMedicalCenterInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(
            () =>
              InsurancePolicyMedicalCentersCreateOrConnectWithoutMedicalCenterInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                InsurancePolicyMedicalCentersCreateOrConnectWithoutMedicalCenterInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(
            () =>
              InsurancePolicyMedicalCentersUpsertWithWhereUniqueWithoutMedicalCenterInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                InsurancePolicyMedicalCentersUpsertWithWhereUniqueWithoutMedicalCenterInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(
          () =>
            InsurancePolicyMedicalCentersCreateManyMedicalCenterInputEnvelopeObjectSchema,
        )
        .optional(),
      set: z
        .union([
          z.lazy(
            () => InsurancePolicyMedicalCentersWhereUniqueInputObjectSchema,
          ),
          z
            .lazy(
              () => InsurancePolicyMedicalCentersWhereUniqueInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      disconnect: z
        .union([
          z.lazy(
            () => InsurancePolicyMedicalCentersWhereUniqueInputObjectSchema,
          ),
          z
            .lazy(
              () => InsurancePolicyMedicalCentersWhereUniqueInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      delete: z
        .union([
          z.lazy(
            () => InsurancePolicyMedicalCentersWhereUniqueInputObjectSchema,
          ),
          z
            .lazy(
              () => InsurancePolicyMedicalCentersWhereUniqueInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      connect: z
        .union([
          z.lazy(
            () => InsurancePolicyMedicalCentersWhereUniqueInputObjectSchema,
          ),
          z
            .lazy(
              () => InsurancePolicyMedicalCentersWhereUniqueInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      update: z
        .union([
          z.lazy(
            () =>
              InsurancePolicyMedicalCentersUpdateWithWhereUniqueWithoutMedicalCenterInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                InsurancePolicyMedicalCentersUpdateWithWhereUniqueWithoutMedicalCenterInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(
            () =>
              InsurancePolicyMedicalCentersUpdateManyWithWhereWithoutMedicalCenterInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                InsurancePolicyMedicalCentersUpdateManyWithWhereWithoutMedicalCenterInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      deleteMany: z
        .union([
          z.lazy(
            () => InsurancePolicyMedicalCentersScalarWhereInputObjectSchema,
          ),
          z
            .lazy(
              () => InsurancePolicyMedicalCentersScalarWhereInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
    })
    .strict();

export const InsurancePolicyMedicalCentersUpdateManyWithoutMedicalCenterNestedInputObjectSchema =
  Schema;
