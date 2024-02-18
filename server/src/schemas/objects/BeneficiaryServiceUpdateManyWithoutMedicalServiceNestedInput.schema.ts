import { z } from 'zod';
import { BeneficiaryServiceCreateWithoutMedicalServiceInputObjectSchema } from './BeneficiaryServiceCreateWithoutMedicalServiceInput.schema';
import { BeneficiaryServiceUncheckedCreateWithoutMedicalServiceInputObjectSchema } from './BeneficiaryServiceUncheckedCreateWithoutMedicalServiceInput.schema';
import { BeneficiaryServiceCreateOrConnectWithoutMedicalServiceInputObjectSchema } from './BeneficiaryServiceCreateOrConnectWithoutMedicalServiceInput.schema';
import { BeneficiaryServiceUpsertWithWhereUniqueWithoutMedicalServiceInputObjectSchema } from './BeneficiaryServiceUpsertWithWhereUniqueWithoutMedicalServiceInput.schema';
import { BeneficiaryServiceCreateManyMedicalServiceInputEnvelopeObjectSchema } from './BeneficiaryServiceCreateManyMedicalServiceInputEnvelope.schema';
import { BeneficiaryServiceWhereUniqueInputObjectSchema } from './BeneficiaryServiceWhereUniqueInput.schema';
import { BeneficiaryServiceUpdateWithWhereUniqueWithoutMedicalServiceInputObjectSchema } from './BeneficiaryServiceUpdateWithWhereUniqueWithoutMedicalServiceInput.schema';
import { BeneficiaryServiceUpdateManyWithWhereWithoutMedicalServiceInputObjectSchema } from './BeneficiaryServiceUpdateManyWithWhereWithoutMedicalServiceInput.schema';
import { BeneficiaryServiceScalarWhereInputObjectSchema } from './BeneficiaryServiceScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BeneficiaryServiceUpdateManyWithoutMedicalServiceNestedInput> =
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
      upsert: z
        .union([
          z.lazy(
            () =>
              BeneficiaryServiceUpsertWithWhereUniqueWithoutMedicalServiceInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                BeneficiaryServiceUpsertWithWhereUniqueWithoutMedicalServiceInputObjectSchema,
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
      set: z
        .union([
          z.lazy(() => BeneficiaryServiceWhereUniqueInputObjectSchema),
          z.lazy(() => BeneficiaryServiceWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      disconnect: z
        .union([
          z.lazy(() => BeneficiaryServiceWhereUniqueInputObjectSchema),
          z.lazy(() => BeneficiaryServiceWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      delete: z
        .union([
          z.lazy(() => BeneficiaryServiceWhereUniqueInputObjectSchema),
          z.lazy(() => BeneficiaryServiceWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      connect: z
        .union([
          z.lazy(() => BeneficiaryServiceWhereUniqueInputObjectSchema),
          z.lazy(() => BeneficiaryServiceWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      update: z
        .union([
          z.lazy(
            () =>
              BeneficiaryServiceUpdateWithWhereUniqueWithoutMedicalServiceInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                BeneficiaryServiceUpdateWithWhereUniqueWithoutMedicalServiceInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(
            () =>
              BeneficiaryServiceUpdateManyWithWhereWithoutMedicalServiceInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                BeneficiaryServiceUpdateManyWithWhereWithoutMedicalServiceInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      deleteMany: z
        .union([
          z.lazy(() => BeneficiaryServiceScalarWhereInputObjectSchema),
          z.lazy(() => BeneficiaryServiceScalarWhereInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const BeneficiaryServiceUpdateManyWithoutMedicalServiceNestedInputObjectSchema =
  Schema;
