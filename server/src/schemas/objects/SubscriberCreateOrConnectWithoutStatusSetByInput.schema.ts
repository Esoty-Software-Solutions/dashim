import { z } from 'zod';
import { SubscriberWhereUniqueInputObjectSchema } from './SubscriberWhereUniqueInput.schema';
import { SubscriberCreateWithoutStatusSetByInputObjectSchema } from './SubscriberCreateWithoutStatusSetByInput.schema';
import { SubscriberUncheckedCreateWithoutStatusSetByInputObjectSchema } from './SubscriberUncheckedCreateWithoutStatusSetByInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SubscriberCreateOrConnectWithoutStatusSetByInput> =
  z
    .object({
      where: z.lazy(() => SubscriberWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => SubscriberCreateWithoutStatusSetByInputObjectSchema),
        z.lazy(
          () => SubscriberUncheckedCreateWithoutStatusSetByInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const SubscriberCreateOrConnectWithoutStatusSetByInputObjectSchema =
  Schema;
