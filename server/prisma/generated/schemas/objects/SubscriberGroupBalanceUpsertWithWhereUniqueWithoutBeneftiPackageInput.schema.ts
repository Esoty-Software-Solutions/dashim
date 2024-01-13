import { z } from 'zod';
import { SubscriberGroupBalanceWhereUniqueInputObjectSchema } from './SubscriberGroupBalanceWhereUniqueInput.schema';
import { SubscriberGroupBalanceUpdateWithoutBeneftiPackageInputObjectSchema } from './SubscriberGroupBalanceUpdateWithoutBeneftiPackageInput.schema';
import { SubscriberGroupBalanceUncheckedUpdateWithoutBeneftiPackageInputObjectSchema } from './SubscriberGroupBalanceUncheckedUpdateWithoutBeneftiPackageInput.schema';
import { SubscriberGroupBalanceCreateWithoutBeneftiPackageInputObjectSchema } from './SubscriberGroupBalanceCreateWithoutBeneftiPackageInput.schema';
import { SubscriberGroupBalanceUncheckedCreateWithoutBeneftiPackageInputObjectSchema } from './SubscriberGroupBalanceUncheckedCreateWithoutBeneftiPackageInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SubscriberGroupBalanceUpsertWithWhereUniqueWithoutBeneftiPackageInput> =
  z
    .object({
      where: z.lazy(() => SubscriberGroupBalanceWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(
          () =>
            SubscriberGroupBalanceUpdateWithoutBeneftiPackageInputObjectSchema,
        ),
        z.lazy(
          () =>
            SubscriberGroupBalanceUncheckedUpdateWithoutBeneftiPackageInputObjectSchema,
        ),
      ]),
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

export const SubscriberGroupBalanceUpsertWithWhereUniqueWithoutBeneftiPackageInputObjectSchema =
  Schema;
