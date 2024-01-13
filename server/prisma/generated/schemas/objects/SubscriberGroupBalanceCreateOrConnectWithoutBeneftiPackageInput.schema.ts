import { z } from 'zod';
import { SubscriberGroupBalanceWhereUniqueInputObjectSchema } from './SubscriberGroupBalanceWhereUniqueInput.schema';
import { SubscriberGroupBalanceCreateWithoutBeneftiPackageInputObjectSchema } from './SubscriberGroupBalanceCreateWithoutBeneftiPackageInput.schema';
import { SubscriberGroupBalanceUncheckedCreateWithoutBeneftiPackageInputObjectSchema } from './SubscriberGroupBalanceUncheckedCreateWithoutBeneftiPackageInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SubscriberGroupBalanceCreateOrConnectWithoutBeneftiPackageInput> =
  z
    .object({
      where: z.lazy(() => SubscriberGroupBalanceWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(
          () =>
            SubscriberGroupBalanceCreateWithoutBeneftiPackageInputObjectSchema,
        ),
        z.lazy(
          () =>
            SubscriberGroupBalanceUncheckedCreateWithoutBeneftiPackageInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const SubscriberGroupBalanceCreateOrConnectWithoutBeneftiPackageInputObjectSchema =
  Schema;
