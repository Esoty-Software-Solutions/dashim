import { z } from 'zod';
import { BeneficiaryCreateWithoutBeneficiaryEntityInputObjectSchema } from './BeneficiaryCreateWithoutBeneficiaryEntityInput.schema';
import { BeneficiaryUncheckedCreateWithoutBeneficiaryEntityInputObjectSchema } from './BeneficiaryUncheckedCreateWithoutBeneficiaryEntityInput.schema';
import { BeneficiaryCreateOrConnectWithoutBeneficiaryEntityInputObjectSchema } from './BeneficiaryCreateOrConnectWithoutBeneficiaryEntityInput.schema';
import { BeneficiaryCreateManyBeneficiaryEntityInputEnvelopeObjectSchema } from './BeneficiaryCreateManyBeneficiaryEntityInputEnvelope.schema';
import { BeneficiaryWhereUniqueInputObjectSchema } from './BeneficiaryWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BeneficiaryCreateNestedManyWithoutBeneficiaryEntityInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(
            () => BeneficiaryCreateWithoutBeneficiaryEntityInputObjectSchema,
          ),
          z
            .lazy(
              () => BeneficiaryCreateWithoutBeneficiaryEntityInputObjectSchema,
            )
            .array(),
          z.lazy(
            () =>
              BeneficiaryUncheckedCreateWithoutBeneficiaryEntityInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                BeneficiaryUncheckedCreateWithoutBeneficiaryEntityInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(
            () =>
              BeneficiaryCreateOrConnectWithoutBeneficiaryEntityInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                BeneficiaryCreateOrConnectWithoutBeneficiaryEntityInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(
          () => BeneficiaryCreateManyBeneficiaryEntityInputEnvelopeObjectSchema,
        )
        .optional(),
      connect: z
        .union([
          z.lazy(() => BeneficiaryWhereUniqueInputObjectSchema),
          z.lazy(() => BeneficiaryWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const BeneficiaryCreateNestedManyWithoutBeneficiaryEntityInputObjectSchema =
  Schema;
