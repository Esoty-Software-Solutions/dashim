import { z } from 'zod';
import { SubscriberWhereUniqueInputObjectSchema } from './SubscriberWhereUniqueInput.schema';
import { SubscriberUpdateWithoutStatusSetByInputObjectSchema } from './SubscriberUpdateWithoutStatusSetByInput.schema';
import { SubscriberUncheckedUpdateWithoutStatusSetByInputObjectSchema } from './SubscriberUncheckedUpdateWithoutStatusSetByInput.schema';
import { SubscriberCreateWithoutStatusSetByInputObjectSchema } from './SubscriberCreateWithoutStatusSetByInput.schema';
import { SubscriberUncheckedCreateWithoutStatusSetByInputObjectSchema } from './SubscriberUncheckedCreateWithoutStatusSetByInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SubscriberUpsertWithWhereUniqueWithoutStatusSetByInput> =
  z
    .object({
      where: z.lazy(() => SubscriberWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => SubscriberUpdateWithoutStatusSetByInputObjectSchema),
        z.lazy(
          () => SubscriberUncheckedUpdateWithoutStatusSetByInputObjectSchema,
        ),
      ]),
      create: z.union([
        z.lazy(() => SubscriberCreateWithoutStatusSetByInputObjectSchema),
        z.lazy(
          () => SubscriberUncheckedCreateWithoutStatusSetByInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const SubscriberUpsertWithWhereUniqueWithoutStatusSetByInputObjectSchema =
  Schema;
