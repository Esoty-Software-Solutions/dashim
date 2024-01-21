import { z } from 'zod';
import { SubscriberFutureStatusChangeWhereUniqueInputObjectSchema } from './SubscriberFutureStatusChangeWhereUniqueInput.schema';
import { SubscriberFutureStatusChangeUpdateWithoutUpdatedByInputObjectSchema } from './SubscriberFutureStatusChangeUpdateWithoutUpdatedByInput.schema';
import { SubscriberFutureStatusChangeUncheckedUpdateWithoutUpdatedByInputObjectSchema } from './SubscriberFutureStatusChangeUncheckedUpdateWithoutUpdatedByInput.schema';
import { SubscriberFutureStatusChangeCreateWithoutUpdatedByInputObjectSchema } from './SubscriberFutureStatusChangeCreateWithoutUpdatedByInput.schema';
import { SubscriberFutureStatusChangeUncheckedCreateWithoutUpdatedByInputObjectSchema } from './SubscriberFutureStatusChangeUncheckedCreateWithoutUpdatedByInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SubscriberFutureStatusChangeUpsertWithWhereUniqueWithoutUpdatedByInput> =
  z
    .object({
      where: z.lazy(
        () => SubscriberFutureStatusChangeWhereUniqueInputObjectSchema,
      ),
      update: z.union([
        z.lazy(
          () =>
            SubscriberFutureStatusChangeUpdateWithoutUpdatedByInputObjectSchema,
        ),
        z.lazy(
          () =>
            SubscriberFutureStatusChangeUncheckedUpdateWithoutUpdatedByInputObjectSchema,
        ),
      ]),
      create: z.union([
        z.lazy(
          () =>
            SubscriberFutureStatusChangeCreateWithoutUpdatedByInputObjectSchema,
        ),
        z.lazy(
          () =>
            SubscriberFutureStatusChangeUncheckedCreateWithoutUpdatedByInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const SubscriberFutureStatusChangeUpsertWithWhereUniqueWithoutUpdatedByInputObjectSchema =
  Schema;
