import { z } from 'zod';
import { BeneficiaryEntityCreateWithoutCityInputObjectSchema } from './BeneficiaryEntityCreateWithoutCityInput.schema';
import { BeneficiaryEntityUncheckedCreateWithoutCityInputObjectSchema } from './BeneficiaryEntityUncheckedCreateWithoutCityInput.schema';
import { BeneficiaryEntityCreateOrConnectWithoutCityInputObjectSchema } from './BeneficiaryEntityCreateOrConnectWithoutCityInput.schema';
import { BeneficiaryEntityCreateManyCityInputEnvelopeObjectSchema } from './BeneficiaryEntityCreateManyCityInputEnvelope.schema';
import { BeneficiaryEntityWhereUniqueInputObjectSchema } from './BeneficiaryEntityWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BeneficiaryEntityCreateNestedManyWithoutCityInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => BeneficiaryEntityCreateWithoutCityInputObjectSchema),
          z
            .lazy(() => BeneficiaryEntityCreateWithoutCityInputObjectSchema)
            .array(),
          z.lazy(
            () => BeneficiaryEntityUncheckedCreateWithoutCityInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                BeneficiaryEntityUncheckedCreateWithoutCityInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(
            () => BeneficiaryEntityCreateOrConnectWithoutCityInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                BeneficiaryEntityCreateOrConnectWithoutCityInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => BeneficiaryEntityCreateManyCityInputEnvelopeObjectSchema)
        .optional(),
      connect: z
        .union([
          z.lazy(() => BeneficiaryEntityWhereUniqueInputObjectSchema),
          z.lazy(() => BeneficiaryEntityWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const BeneficiaryEntityCreateNestedManyWithoutCityInputObjectSchema =
  Schema;
