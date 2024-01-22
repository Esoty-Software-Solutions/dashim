import { z } from 'zod';
import { SubscriberCreateWithoutStatusSetByInputObjectSchema } from './SubscriberCreateWithoutStatusSetByInput.schema';
import { SubscriberUncheckedCreateWithoutStatusSetByInputObjectSchema } from './SubscriberUncheckedCreateWithoutStatusSetByInput.schema';
import { SubscriberCreateOrConnectWithoutStatusSetByInputObjectSchema } from './SubscriberCreateOrConnectWithoutStatusSetByInput.schema';
import { SubscriberCreateManyStatusSetByInputEnvelopeObjectSchema } from './SubscriberCreateManyStatusSetByInputEnvelope.schema';
import { SubscriberWhereUniqueInputObjectSchema } from './SubscriberWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SubscriberCreateNestedManyWithoutStatusSetByInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => SubscriberCreateWithoutStatusSetByInputObjectSchema),
          z
            .lazy(() => SubscriberCreateWithoutStatusSetByInputObjectSchema)
            .array(),
          z.lazy(
            () => SubscriberUncheckedCreateWithoutStatusSetByInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                SubscriberUncheckedCreateWithoutStatusSetByInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(
            () => SubscriberCreateOrConnectWithoutStatusSetByInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                SubscriberCreateOrConnectWithoutStatusSetByInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => SubscriberCreateManyStatusSetByInputEnvelopeObjectSchema)
        .optional(),
      connect: z
        .union([
          z.lazy(() => SubscriberWhereUniqueInputObjectSchema),
          z.lazy(() => SubscriberWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const SubscriberCreateNestedManyWithoutStatusSetByInputObjectSchema =
  Schema;
