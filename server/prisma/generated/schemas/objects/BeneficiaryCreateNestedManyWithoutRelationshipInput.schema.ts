import { z } from 'zod';
import { BeneficiaryCreateWithoutRelationshipInputObjectSchema } from './BeneficiaryCreateWithoutRelationshipInput.schema';
import { BeneficiaryUncheckedCreateWithoutRelationshipInputObjectSchema } from './BeneficiaryUncheckedCreateWithoutRelationshipInput.schema';
import { BeneficiaryCreateOrConnectWithoutRelationshipInputObjectSchema } from './BeneficiaryCreateOrConnectWithoutRelationshipInput.schema';
import { BeneficiaryCreateManyRelationshipInputEnvelopeObjectSchema } from './BeneficiaryCreateManyRelationshipInputEnvelope.schema';
import { BeneficiaryWhereUniqueInputObjectSchema } from './BeneficiaryWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BeneficiaryCreateNestedManyWithoutRelationshipInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => BeneficiaryCreateWithoutRelationshipInputObjectSchema),
          z
            .lazy(() => BeneficiaryCreateWithoutRelationshipInputObjectSchema)
            .array(),
          z.lazy(
            () =>
              BeneficiaryUncheckedCreateWithoutRelationshipInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                BeneficiaryUncheckedCreateWithoutRelationshipInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(
            () =>
              BeneficiaryCreateOrConnectWithoutRelationshipInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                BeneficiaryCreateOrConnectWithoutRelationshipInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => BeneficiaryCreateManyRelationshipInputEnvelopeObjectSchema)
        .optional(),
      connect: z
        .union([
          z.lazy(() => BeneficiaryWhereUniqueInputObjectSchema),
          z.lazy(() => BeneficiaryWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const BeneficiaryCreateNestedManyWithoutRelationshipInputObjectSchema =
  Schema;
