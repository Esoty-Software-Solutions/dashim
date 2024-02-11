import { z } from 'zod';
import { BeneficiaryEntityCreateWithoutInsurancePolicyInputObjectSchema } from './BeneficiaryEntityCreateWithoutInsurancePolicyInput.schema';
import { BeneficiaryEntityUncheckedCreateWithoutInsurancePolicyInputObjectSchema } from './BeneficiaryEntityUncheckedCreateWithoutInsurancePolicyInput.schema';
import { BeneficiaryEntityCreateOrConnectWithoutInsurancePolicyInputObjectSchema } from './BeneficiaryEntityCreateOrConnectWithoutInsurancePolicyInput.schema';
import { BeneficiaryEntityUpsertWithWhereUniqueWithoutInsurancePolicyInputObjectSchema } from './BeneficiaryEntityUpsertWithWhereUniqueWithoutInsurancePolicyInput.schema';
import { BeneficiaryEntityCreateManyInsurancePolicyInputEnvelopeObjectSchema } from './BeneficiaryEntityCreateManyInsurancePolicyInputEnvelope.schema';
import { BeneficiaryEntityWhereUniqueInputObjectSchema } from './BeneficiaryEntityWhereUniqueInput.schema';
import { BeneficiaryEntityUpdateWithWhereUniqueWithoutInsurancePolicyInputObjectSchema } from './BeneficiaryEntityUpdateWithWhereUniqueWithoutInsurancePolicyInput.schema';
import { BeneficiaryEntityUpdateManyWithWhereWithoutInsurancePolicyInputObjectSchema } from './BeneficiaryEntityUpdateManyWithWhereWithoutInsurancePolicyInput.schema';
import { BeneficiaryEntityScalarWhereInputObjectSchema } from './BeneficiaryEntityScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BeneficiaryEntityUpdateManyWithoutInsurancePolicyNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(
            () =>
              BeneficiaryEntityCreateWithoutInsurancePolicyInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                BeneficiaryEntityCreateWithoutInsurancePolicyInputObjectSchema,
            )
            .array(),
          z.lazy(
            () =>
              BeneficiaryEntityUncheckedCreateWithoutInsurancePolicyInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                BeneficiaryEntityUncheckedCreateWithoutInsurancePolicyInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(
            () =>
              BeneficiaryEntityCreateOrConnectWithoutInsurancePolicyInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                BeneficiaryEntityCreateOrConnectWithoutInsurancePolicyInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(
            () =>
              BeneficiaryEntityUpsertWithWhereUniqueWithoutInsurancePolicyInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                BeneficiaryEntityUpsertWithWhereUniqueWithoutInsurancePolicyInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(
          () =>
            BeneficiaryEntityCreateManyInsurancePolicyInputEnvelopeObjectSchema,
        )
        .optional(),
      set: z
        .union([
          z.lazy(() => BeneficiaryEntityWhereUniqueInputObjectSchema),
          z.lazy(() => BeneficiaryEntityWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      disconnect: z
        .union([
          z.lazy(() => BeneficiaryEntityWhereUniqueInputObjectSchema),
          z.lazy(() => BeneficiaryEntityWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      delete: z
        .union([
          z.lazy(() => BeneficiaryEntityWhereUniqueInputObjectSchema),
          z.lazy(() => BeneficiaryEntityWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      connect: z
        .union([
          z.lazy(() => BeneficiaryEntityWhereUniqueInputObjectSchema),
          z.lazy(() => BeneficiaryEntityWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      update: z
        .union([
          z.lazy(
            () =>
              BeneficiaryEntityUpdateWithWhereUniqueWithoutInsurancePolicyInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                BeneficiaryEntityUpdateWithWhereUniqueWithoutInsurancePolicyInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(
            () =>
              BeneficiaryEntityUpdateManyWithWhereWithoutInsurancePolicyInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                BeneficiaryEntityUpdateManyWithWhereWithoutInsurancePolicyInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      deleteMany: z
        .union([
          z.lazy(() => BeneficiaryEntityScalarWhereInputObjectSchema),
          z.lazy(() => BeneficiaryEntityScalarWhereInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const BeneficiaryEntityUpdateManyWithoutInsurancePolicyNestedInputObjectSchema =
  Schema;
