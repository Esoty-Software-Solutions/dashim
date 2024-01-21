import { z } from 'zod';
import { SubscriberFutureStatusChangeWhereUniqueInputObjectSchema } from './SubscriberFutureStatusChangeWhereUniqueInput.schema';
import { SubscriberFutureStatusChangeUpdateWithoutCreatedByInputObjectSchema } from './SubscriberFutureStatusChangeUpdateWithoutCreatedByInput.schema';
import { SubscriberFutureStatusChangeUncheckedUpdateWithoutCreatedByInputObjectSchema } from './SubscriberFutureStatusChangeUncheckedUpdateWithoutCreatedByInput.schema';
import { SubscriberFutureStatusChangeCreateWithoutCreatedByInputObjectSchema } from './SubscriberFutureStatusChangeCreateWithoutCreatedByInput.schema';
import { SubscriberFutureStatusChangeUncheckedCreateWithoutCreatedByInputObjectSchema } from './SubscriberFutureStatusChangeUncheckedCreateWithoutCreatedByInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SubscriberFutureStatusChangeUpsertWithWhereUniqueWithoutCreatedByInput> =
  z
    .object({
      where: z.lazy(
        () => SubscriberFutureStatusChangeWhereUniqueInputObjectSchema,
      ),
      update: z.union([
        z.lazy(
          () =>
            SubscriberFutureStatusChangeUpdateWithoutCreatedByInputObjectSchema,
        ),
        z.lazy(
          () =>
            SubscriberFutureStatusChangeUncheckedUpdateWithoutCreatedByInputObjectSchema,
        ),
      ]),
      create: z.union([
        z.lazy(
          () =>
            SubscriberFutureStatusChangeCreateWithoutCreatedByInputObjectSchema,
        ),
        z.lazy(
          () =>
            SubscriberFutureStatusChangeUncheckedCreateWithoutCreatedByInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const SubscriberFutureStatusChangeUpsertWithWhereUniqueWithoutCreatedByInputObjectSchema =
  Schema;
