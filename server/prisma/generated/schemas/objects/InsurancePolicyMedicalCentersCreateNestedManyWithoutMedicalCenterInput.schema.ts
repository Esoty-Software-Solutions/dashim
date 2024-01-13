import { z } from 'zod';
import { InsurancePolicyMedicalCentersCreateWithoutMedicalCenterInputObjectSchema } from './InsurancePolicyMedicalCentersCreateWithoutMedicalCenterInput.schema';
import { InsurancePolicyMedicalCentersUncheckedCreateWithoutMedicalCenterInputObjectSchema } from './InsurancePolicyMedicalCentersUncheckedCreateWithoutMedicalCenterInput.schema';
import { InsurancePolicyMedicalCentersCreateOrConnectWithoutMedicalCenterInputObjectSchema } from './InsurancePolicyMedicalCentersCreateOrConnectWithoutMedicalCenterInput.schema';
import { InsurancePolicyMedicalCentersCreateManyMedicalCenterInputEnvelopeObjectSchema } from './InsurancePolicyMedicalCentersCreateManyMedicalCenterInputEnvelope.schema';
import { InsurancePolicyMedicalCentersWhereUniqueInputObjectSchema } from './InsurancePolicyMedicalCentersWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.InsurancePolicyMedicalCentersCreateNestedManyWithoutMedicalCenterInput> =
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
      createMany: z
        .lazy(
          () =>
            InsurancePolicyMedicalCentersCreateManyMedicalCenterInputEnvelopeObjectSchema,
        )
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
    })
    .strict();

export const InsurancePolicyMedicalCentersCreateNestedManyWithoutMedicalCenterInputObjectSchema =
  Schema;
