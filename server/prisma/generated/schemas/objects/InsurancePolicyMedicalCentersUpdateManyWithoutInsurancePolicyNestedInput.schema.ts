import { z } from 'zod';
import { InsurancePolicyMedicalCentersCreateWithoutInsurancePolicyInputObjectSchema } from './InsurancePolicyMedicalCentersCreateWithoutInsurancePolicyInput.schema';
import { InsurancePolicyMedicalCentersUncheckedCreateWithoutInsurancePolicyInputObjectSchema } from './InsurancePolicyMedicalCentersUncheckedCreateWithoutInsurancePolicyInput.schema';
import { InsurancePolicyMedicalCentersCreateOrConnectWithoutInsurancePolicyInputObjectSchema } from './InsurancePolicyMedicalCentersCreateOrConnectWithoutInsurancePolicyInput.schema';
import { InsurancePolicyMedicalCentersUpsertWithWhereUniqueWithoutInsurancePolicyInputObjectSchema } from './InsurancePolicyMedicalCentersUpsertWithWhereUniqueWithoutInsurancePolicyInput.schema';
import { InsurancePolicyMedicalCentersCreateManyInsurancePolicyInputEnvelopeObjectSchema } from './InsurancePolicyMedicalCentersCreateManyInsurancePolicyInputEnvelope.schema';
import { InsurancePolicyMedicalCentersWhereUniqueInputObjectSchema } from './InsurancePolicyMedicalCentersWhereUniqueInput.schema';
import { InsurancePolicyMedicalCentersUpdateWithWhereUniqueWithoutInsurancePolicyInputObjectSchema } from './InsurancePolicyMedicalCentersUpdateWithWhereUniqueWithoutInsurancePolicyInput.schema';
import { InsurancePolicyMedicalCentersUpdateManyWithWhereWithoutInsurancePolicyInputObjectSchema } from './InsurancePolicyMedicalCentersUpdateManyWithWhereWithoutInsurancePolicyInput.schema';
import { InsurancePolicyMedicalCentersScalarWhereInputObjectSchema } from './InsurancePolicyMedicalCentersScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.InsurancePolicyMedicalCentersUpdateManyWithoutInsurancePolicyNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(
            () =>
              InsurancePolicyMedicalCentersCreateWithoutInsurancePolicyInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                InsurancePolicyMedicalCentersCreateWithoutInsurancePolicyInputObjectSchema,
            )
            .array(),
          z.lazy(
            () =>
              InsurancePolicyMedicalCentersUncheckedCreateWithoutInsurancePolicyInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                InsurancePolicyMedicalCentersUncheckedCreateWithoutInsurancePolicyInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(
            () =>
              InsurancePolicyMedicalCentersCreateOrConnectWithoutInsurancePolicyInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                InsurancePolicyMedicalCentersCreateOrConnectWithoutInsurancePolicyInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(
            () =>
              InsurancePolicyMedicalCentersUpsertWithWhereUniqueWithoutInsurancePolicyInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                InsurancePolicyMedicalCentersUpsertWithWhereUniqueWithoutInsurancePolicyInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(
          () =>
            InsurancePolicyMedicalCentersCreateManyInsurancePolicyInputEnvelopeObjectSchema,
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
              InsurancePolicyMedicalCentersUpdateWithWhereUniqueWithoutInsurancePolicyInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                InsurancePolicyMedicalCentersUpdateWithWhereUniqueWithoutInsurancePolicyInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(
            () =>
              InsurancePolicyMedicalCentersUpdateManyWithWhereWithoutInsurancePolicyInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                InsurancePolicyMedicalCentersUpdateManyWithWhereWithoutInsurancePolicyInputObjectSchema,
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

export const InsurancePolicyMedicalCentersUpdateManyWithoutInsurancePolicyNestedInputObjectSchema =
  Schema;
