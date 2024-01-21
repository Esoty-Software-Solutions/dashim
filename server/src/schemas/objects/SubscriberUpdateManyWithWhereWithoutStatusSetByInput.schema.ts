import { z } from 'zod';
import { SubscriberScalarWhereInputObjectSchema } from './SubscriberScalarWhereInput.schema';
import { SubscriberUpdateManyMutationInputObjectSchema } from './SubscriberUpdateManyMutationInput.schema';
import { SubscriberUncheckedUpdateManyWithoutSubscriberStatusChangesInputObjectSchema } from './SubscriberUncheckedUpdateManyWithoutSubscriberStatusChangesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SubscriberUpdateManyWithWhereWithoutStatusSetByInput> =
  z
    .object({
      where: z.lazy(() => SubscriberScalarWhereInputObjectSchema),
      data: z.union([
        z.lazy(() => SubscriberUpdateManyMutationInputObjectSchema),
        z.lazy(
          () =>
            SubscriberUncheckedUpdateManyWithoutSubscriberStatusChangesInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const SubscriberUpdateManyWithWhereWithoutStatusSetByInputObjectSchema =
  Schema;
