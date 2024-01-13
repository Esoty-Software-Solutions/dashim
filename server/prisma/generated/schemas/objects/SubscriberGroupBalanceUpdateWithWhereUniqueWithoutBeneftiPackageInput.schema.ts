import { z } from 'zod';
import { SubscriberGroupBalanceWhereUniqueInputObjectSchema } from './SubscriberGroupBalanceWhereUniqueInput.schema';
import { SubscriberGroupBalanceUpdateWithoutBeneftiPackageInputObjectSchema } from './SubscriberGroupBalanceUpdateWithoutBeneftiPackageInput.schema';
import { SubscriberGroupBalanceUncheckedUpdateWithoutBeneftiPackageInputObjectSchema } from './SubscriberGroupBalanceUncheckedUpdateWithoutBeneftiPackageInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SubscriberGroupBalanceUpdateWithWhereUniqueWithoutBeneftiPackageInput> =
  z
    .object({
      where: z.lazy(() => SubscriberGroupBalanceWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(
          () =>
            SubscriberGroupBalanceUpdateWithoutBeneftiPackageInputObjectSchema,
        ),
        z.lazy(
          () =>
            SubscriberGroupBalanceUncheckedUpdateWithoutBeneftiPackageInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const SubscriberGroupBalanceUpdateWithWhereUniqueWithoutBeneftiPackageInputObjectSchema =
  Schema;
