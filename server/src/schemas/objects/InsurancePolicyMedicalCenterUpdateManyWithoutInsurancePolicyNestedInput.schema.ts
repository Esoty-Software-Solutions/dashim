import { z } from 'zod';
import { InsurancePolicyMedicalCenterCreateWithoutInsurancePolicyInputObjectSchema } from './InsurancePolicyMedicalCenterCreateWithoutInsurancePolicyInput.schema';
import { InsurancePolicyMedicalCenterUncheckedCreateWithoutInsurancePolicyInputObjectSchema } from './InsurancePolicyMedicalCenterUncheckedCreateWithoutInsurancePolicyInput.schema';
import { InsurancePolicyMedicalCenterCreateOrConnectWithoutInsurancePolicyInputObjectSchema } from './InsurancePolicyMedicalCenterCreateOrConnectWithoutInsurancePolicyInput.schema';
import { InsurancePolicyMedicalCenterUpsertWithWhereUniqueWithoutInsurancePolicyInputObjectSchema } from './InsurancePolicyMedicalCenterUpsertWithWhereUniqueWithoutInsurancePolicyInput.schema';
import { InsurancePolicyMedicalCenterCreateManyInsurancePolicyInputEnvelopeObjectSchema } from './InsurancePolicyMedicalCenterCreateManyInsurancePolicyInputEnvelope.schema';
import { InsurancePolicyMedicalCenterWhereUniqueInputObjectSchema } from './InsurancePolicyMedicalCenterWhereUniqueInput.schema';
import { InsurancePolicyMedicalCenterUpdateWithWhereUniqueWithoutInsurancePolicyInputObjectSchema } from './InsurancePolicyMedicalCenterUpdateWithWhereUniqueWithoutInsurancePolicyInput.schema';
import { InsurancePolicyMedicalCenterUpdateManyWithWhereWithoutInsurancePolicyInputObjectSchema } from './InsurancePolicyMedicalCenterUpdateManyWithWhereWithoutInsurancePolicyInput.schema';
import { InsurancePolicyMedicalCenterScalarWhereInputObjectSchema } from './InsurancePolicyMedicalCenterScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.InsurancePolicyMedicalCenterUpdateManyWithoutInsurancePolicyNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(
            () =>
              InsurancePolicyMedicalCenterCreateWithoutInsurancePolicyInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                InsurancePolicyMedicalCenterCreateWithoutInsurancePolicyInputObjectSchema,
            )
            .array(),
          z.lazy(
            () =>
              InsurancePolicyMedicalCenterUncheckedCreateWithoutInsurancePolicyInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                InsurancePolicyMedicalCenterUncheckedCreateWithoutInsurancePolicyInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(
            () =>
              InsurancePolicyMedicalCenterCreateOrConnectWithoutInsurancePolicyInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                InsurancePolicyMedicalCenterCreateOrConnectWithoutInsurancePolicyInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(
            () =>
              InsurancePolicyMedicalCenterUpsertWithWhereUniqueWithoutInsurancePolicyInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                InsurancePolicyMedicalCenterUpsertWithWhereUniqueWithoutInsurancePolicyInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(
          () =>
            InsurancePolicyMedicalCenterCreateManyInsurancePolicyInputEnvelopeObjectSchema,
        )
        .optional(),
      set: z
        .union([
          z.lazy(
            () => InsurancePolicyMedicalCenterWhereUniqueInputObjectSchema,
          ),
          z
            .lazy(
              () => InsurancePolicyMedicalCenterWhereUniqueInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      disconnect: z
        .union([
          z.lazy(
            () => InsurancePolicyMedicalCenterWhereUniqueInputObjectSchema,
          ),
          z
            .lazy(
              () => InsurancePolicyMedicalCenterWhereUniqueInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      delete: z
        .union([
          z.lazy(
            () => InsurancePolicyMedicalCenterWhereUniqueInputObjectSchema,
          ),
          z
            .lazy(
              () => InsurancePolicyMedicalCenterWhereUniqueInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      connect: z
        .union([
          z.lazy(
            () => InsurancePolicyMedicalCenterWhereUniqueInputObjectSchema,
          ),
          z
            .lazy(
              () => InsurancePolicyMedicalCenterWhereUniqueInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      update: z
        .union([
          z.lazy(
            () =>
              InsurancePolicyMedicalCenterUpdateWithWhereUniqueWithoutInsurancePolicyInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                InsurancePolicyMedicalCenterUpdateWithWhereUniqueWithoutInsurancePolicyInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(
            () =>
              InsurancePolicyMedicalCenterUpdateManyWithWhereWithoutInsurancePolicyInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                InsurancePolicyMedicalCenterUpdateManyWithWhereWithoutInsurancePolicyInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      deleteMany: z
        .union([
          z.lazy(
            () => InsurancePolicyMedicalCenterScalarWhereInputObjectSchema,
          ),
          z
            .lazy(
              () => InsurancePolicyMedicalCenterScalarWhereInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
    })
    .strict();

export const InsurancePolicyMedicalCenterUpdateManyWithoutInsurancePolicyNestedInputObjectSchema =
  Schema;
