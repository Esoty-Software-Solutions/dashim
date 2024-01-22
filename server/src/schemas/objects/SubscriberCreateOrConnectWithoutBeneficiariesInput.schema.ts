import { z } from 'zod';
import { SubscriberWhereUniqueInputObjectSchema } from './SubscriberWhereUniqueInput.schema';
import { SubscriberCreateWithoutBeneficiariesInputObjectSchema } from './SubscriberCreateWithoutBeneficiariesInput.schema';
import { SubscriberUncheckedCreateWithoutBeneficiariesInputObjectSchema } from './SubscriberUncheckedCreateWithoutBeneficiariesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SubscriberCreateOrConnectWithoutBeneficiariesInput> =
  z
    .object({
      where: z.lazy(() => SubscriberWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => SubscriberCreateWithoutBeneficiariesInputObjectSchema),
        z.lazy(
          () => SubscriberUncheckedCreateWithoutBeneficiariesInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const SubscriberCreateOrConnectWithoutBeneficiariesInputObjectSchema =
  Schema;
