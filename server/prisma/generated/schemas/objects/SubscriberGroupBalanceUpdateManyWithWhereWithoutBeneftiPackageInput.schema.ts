import { z } from 'zod';
import { SubscriberGroupBalanceScalarWhereInputObjectSchema } from './SubscriberGroupBalanceScalarWhereInput.schema';
import { SubscriberGroupBalanceUpdateManyMutationInputObjectSchema } from './SubscriberGroupBalanceUpdateManyMutationInput.schema';
import { SubscriberGroupBalanceUncheckedUpdateManyWithoutSpentsInputObjectSchema } from './SubscriberGroupBalanceUncheckedUpdateManyWithoutSpentsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SubscriberGroupBalanceUpdateManyWithWhereWithoutBeneftiPackageInput> =
  z
    .object({
      where: z.lazy(() => SubscriberGroupBalanceScalarWhereInputObjectSchema),
      data: z.union([
        z.lazy(() => SubscriberGroupBalanceUpdateManyMutationInputObjectSchema),
        z.lazy(
          () =>
            SubscriberGroupBalanceUncheckedUpdateManyWithoutSpentsInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const SubscriberGroupBalanceUpdateManyWithWhereWithoutBeneftiPackageInputObjectSchema =
  Schema;
