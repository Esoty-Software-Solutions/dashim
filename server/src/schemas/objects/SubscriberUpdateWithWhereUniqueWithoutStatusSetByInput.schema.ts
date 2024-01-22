import { z } from 'zod';
import { SubscriberWhereUniqueInputObjectSchema } from './SubscriberWhereUniqueInput.schema';
import { SubscriberUpdateWithoutStatusSetByInputObjectSchema } from './SubscriberUpdateWithoutStatusSetByInput.schema';
import { SubscriberUncheckedUpdateWithoutStatusSetByInputObjectSchema } from './SubscriberUncheckedUpdateWithoutStatusSetByInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SubscriberUpdateWithWhereUniqueWithoutStatusSetByInput> =
  z
    .object({
      where: z.lazy(() => SubscriberWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => SubscriberUpdateWithoutStatusSetByInputObjectSchema),
        z.lazy(
          () => SubscriberUncheckedUpdateWithoutStatusSetByInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const SubscriberUpdateWithWhereUniqueWithoutStatusSetByInputObjectSchema =
  Schema;
