import { z } from 'zod';
import { BeneficiaryCreateWithoutSubscriberInputObjectSchema } from './BeneficiaryCreateWithoutSubscriberInput.schema';
import { BeneficiaryUncheckedCreateWithoutSubscriberInputObjectSchema } from './BeneficiaryUncheckedCreateWithoutSubscriberInput.schema';
import { BeneficiaryCreateOrConnectWithoutSubscriberInputObjectSchema } from './BeneficiaryCreateOrConnectWithoutSubscriberInput.schema';
import { BeneficiaryCreateManySubscriberInputEnvelopeObjectSchema } from './BeneficiaryCreateManySubscriberInputEnvelope.schema';
import { BeneficiaryWhereUniqueInputObjectSchema } from './BeneficiaryWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BeneficiaryCreateNestedManyWithoutSubscriberInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => BeneficiaryCreateWithoutSubscriberInputObjectSchema),
          z
            .lazy(() => BeneficiaryCreateWithoutSubscriberInputObjectSchema)
            .array(),
          z.lazy(
            () => BeneficiaryUncheckedCreateWithoutSubscriberInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                BeneficiaryUncheckedCreateWithoutSubscriberInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(
            () => BeneficiaryCreateOrConnectWithoutSubscriberInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                BeneficiaryCreateOrConnectWithoutSubscriberInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => BeneficiaryCreateManySubscriberInputEnvelopeObjectSchema)
        .optional(),
      connect: z
        .union([
          z.lazy(() => BeneficiaryWhereUniqueInputObjectSchema),
          z.lazy(() => BeneficiaryWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const BeneficiaryCreateNestedManyWithoutSubscriberInputObjectSchema =
  Schema;
