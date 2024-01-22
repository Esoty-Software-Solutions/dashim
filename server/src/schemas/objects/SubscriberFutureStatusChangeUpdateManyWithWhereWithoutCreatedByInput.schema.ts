import { z } from 'zod';
import { SubscriberFutureStatusChangeScalarWhereInputObjectSchema } from './SubscriberFutureStatusChangeScalarWhereInput.schema';
import { SubscriberFutureStatusChangeUpdateManyMutationInputObjectSchema } from './SubscriberFutureStatusChangeUpdateManyMutationInput.schema';
import { SubscriberFutureStatusChangeUncheckedUpdateManyWithoutSubscriberFutureStatusCreationsInputObjectSchema } from './SubscriberFutureStatusChangeUncheckedUpdateManyWithoutSubscriberFutureStatusCreationsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SubscriberFutureStatusChangeUpdateManyWithWhereWithoutCreatedByInput> =
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
            SubscriberFutureStatusChangeUncheckedUpdateManyWithoutSubscriberFutureStatusCreationsInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const SubscriberFutureStatusChangeUpdateManyWithWhereWithoutCreatedByInputObjectSchema =
  Schema;
