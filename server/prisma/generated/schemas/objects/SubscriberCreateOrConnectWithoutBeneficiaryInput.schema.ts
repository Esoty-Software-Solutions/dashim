import { z } from 'zod';
import { SubscriberWhereUniqueInputObjectSchema } from './SubscriberWhereUniqueInput.schema';
import { SubscriberCreateWithoutBeneficiaryInputObjectSchema } from './SubscriberCreateWithoutBeneficiaryInput.schema';
import { SubscriberUncheckedCreateWithoutBeneficiaryInputObjectSchema } from './SubscriberUncheckedCreateWithoutBeneficiaryInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SubscriberCreateOrConnectWithoutBeneficiaryInput> =
  z
    .object({
      where: z.lazy(() => SubscriberWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => SubscriberCreateWithoutBeneficiaryInputObjectSchema),
        z.lazy(
          () => SubscriberUncheckedCreateWithoutBeneficiaryInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const SubscriberCreateOrConnectWithoutBeneficiaryInputObjectSchema =
  Schema;
