import { z } from 'zod';
import { SubscriberFutureStatusChangeScalarWhereInputObjectSchema } from './SubscriberFutureStatusChangeScalarWhereInput.schema';
import { SubscriberFutureStatusChangeUpdateManyMutationInputObjectSchema } from './SubscriberFutureStatusChangeUpdateManyMutationInput.schema';
import { SubscriberFutureStatusChangeUncheckedUpdateManyWithoutSubscriberFutureStatusChangesInputObjectSchema } from './SubscriberFutureStatusChangeUncheckedUpdateManyWithoutSubscriberFutureStatusChangesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SubscriberFutureStatusChangeUpdateManyWithWhereWithoutUpdatedByInput> =
  z
    .object({
      where: z.lazy(
        () => SubscriberFutureStatusChangeScalarWhereInputObjectSchema,
      ),
      data: z.union([
        z.lazy(
          () => SubscriberFutureStatusChangeUpdateManyMutationInputObjectSchema,
        ),
        z.lazy(
          () =>
            SubscriberFutureStatusChangeUncheckedUpdateManyWithoutSubscriberFutureStatusChangesInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const SubscriberFutureStatusChangeUpdateManyWithWhereWithoutUpdatedByInputObjectSchema =
  Schema;
