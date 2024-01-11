import { z } from 'zod';
import { InsurancePolicyMedicalCentersCreateWithoutInsurancePolicyInputObjectSchema } from './InsurancePolicyMedicalCentersCreateWithoutInsurancePolicyInput.schema';
import { InsurancePolicyMedicalCentersUncheckedCreateWithoutInsurancePolicyInputObjectSchema } from './InsurancePolicyMedicalCentersUncheckedCreateWithoutInsurancePolicyInput.schema';
import { InsurancePolicyMedicalCentersCreateOrConnectWithoutInsurancePolicyInputObjectSchema } from './InsurancePolicyMedicalCentersCreateOrConnectWithoutInsurancePolicyInput.schema';
import { InsurancePolicyMedicalCentersCreateManyInsurancePolicyInputEnvelopeObjectSchema } from './InsurancePolicyMedicalCentersCreateManyInsurancePolicyInputEnvelope.schema';
import { InsurancePolicyMedicalCentersWhereUniqueInputObjectSchema } from './InsurancePolicyMedicalCentersWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.InsurancePolicyMedicalCentersUncheckedCreateNestedManyWithoutInsurancePolicyInput> =
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
      createMany: z
        .lazy(
          () =>
            InsurancePolicyMedicalCentersCreateManyInsurancePolicyInputEnvelopeObjectSchema,
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

export const InsurancePolicyMedicalCentersUncheckedCreateNestedManyWithoutInsurancePolicyInputObjectSchema =
  Schema;
