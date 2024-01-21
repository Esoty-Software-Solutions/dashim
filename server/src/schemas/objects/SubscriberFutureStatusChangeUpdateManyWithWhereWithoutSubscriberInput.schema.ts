import { z } from 'zod';
import { SubscriberFutureStatusChangeScalarWhereInputObjectSchema } from './SubscriberFutureStatusChangeScalarWhereInput.schema';
import { SubscriberFutureStatusChangeUpdateManyMutationInputObjectSchema } from './SubscriberFutureStatusChangeUpdateManyMutationInput.schema';
import { SubscriberFutureStatusChangeUncheckedUpdateManyWithoutFutureStatusInputObjectSchema } from './SubscriberFutureStatusChangeUncheckedUpdateManyWithoutFutureStatusInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SubscriberFutureStatusChangeUpdateManyWithWhereWithoutSubscriberInput> =
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
            SubscriberFutureStatusChangeUncheckedUpdateManyWithoutFutureStatusInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const SubscriberFutureStatusChangeUpdateManyWithWhereWithoutSubscriberInputObjectSchema =
  Schema;
