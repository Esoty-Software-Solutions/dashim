import { z } from 'zod';
import { BeneficiaryServiceCreateWithoutMedicalServiceInputObjectSchema } from './BeneficiaryServiceCreateWithoutMedicalServiceInput.schema';
import { BeneficiaryServiceUncheckedCreateWithoutMedicalServiceInputObjectSchema } from './BeneficiaryServiceUncheckedCreateWithoutMedicalServiceInput.schema';
import { BeneficiaryServiceCreateOrConnectWithoutMedicalServiceInputObjectSchema } from './BeneficiaryServiceCreateOrConnectWithoutMedicalServiceInput.schema';
import { BeneficiaryServiceCreateManyMedicalServiceInputEnvelopeObjectSchema } from './BeneficiaryServiceCreateManyMedicalServiceInputEnvelope.schema';
import { BeneficiaryServiceWhereUniqueInputObjectSchema } from './BeneficiaryServiceWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BeneficiaryServiceUncheckedCreateNestedManyWithoutMedicalServiceInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(
            () =>
              BeneficiaryServiceCreateWithoutMedicalServiceInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                BeneficiaryServiceCreateWithoutMedicalServiceInputObjectSchema,
            )
            .array(),
          z.lazy(
            () =>
              BeneficiaryServiceUncheckedCreateWithoutMedicalServiceInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                BeneficiaryServiceUncheckedCreateWithoutMedicalServiceInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(
            () =>
              BeneficiaryServiceCreateOrConnectWithoutMedicalServiceInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                BeneficiaryServiceCreateOrConnectWithoutMedicalServiceInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(
          () =>
            BeneficiaryServiceCreateManyMedicalServiceInputEnvelopeObjectSchema,
        )
        .optional(),
      connect: z
        .union([
          z.lazy(() => BeneficiaryServiceWhereUniqueInputObjectSchema),
          z.lazy(() => BeneficiaryServiceWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const BeneficiaryServiceUncheckedCreateNestedManyWithoutMedicalServiceInputObjectSchema =
  Schema;
