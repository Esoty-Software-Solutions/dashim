import { z } from 'zod';
import { BeneficiaryCreateWithoutStatusSetByInputObjectSchema } from './BeneficiaryCreateWithoutStatusSetByInput.schema';
import { BeneficiaryUncheckedCreateWithoutStatusSetByInputObjectSchema } from './BeneficiaryUncheckedCreateWithoutStatusSetByInput.schema';
import { BeneficiaryCreateOrConnectWithoutStatusSetByInputObjectSchema } from './BeneficiaryCreateOrConnectWithoutStatusSetByInput.schema';
import { BeneficiaryCreateManyStatusSetByInputEnvelopeObjectSchema } from './BeneficiaryCreateManyStatusSetByInputEnvelope.schema';
import { BeneficiaryWhereUniqueInputObjectSchema } from './BeneficiaryWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BeneficiaryUncheckedCreateNestedManyWithoutStatusSetByInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => BeneficiaryCreateWithoutStatusSetByInputObjectSchema),
          z
            .lazy(() => BeneficiaryCreateWithoutStatusSetByInputObjectSchema)
            .array(),
          z.lazy(
            () => BeneficiaryUncheckedCreateWithoutStatusSetByInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                BeneficiaryUncheckedCreateWithoutStatusSetByInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(
            () => BeneficiaryCreateOrConnectWithoutStatusSetByInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                BeneficiaryCreateOrConnectWithoutStatusSetByInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => BeneficiaryCreateManyStatusSetByInputEnvelopeObjectSchema)
        .optional(),
      connect: z
        .union([
          z.lazy(() => BeneficiaryWhereUniqueInputObjectSchema),
          z.lazy(() => BeneficiaryWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const BeneficiaryUncheckedCreateNestedManyWithoutStatusSetByInputObjectSchema =
  Schema;
