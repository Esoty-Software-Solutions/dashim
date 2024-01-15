import { z } from 'zod';
import { SubscriberCreateWithoutBeneficiariesInputObjectSchema } from './SubscriberCreateWithoutBeneficiariesInput.schema';
import { SubscriberUncheckedCreateWithoutBeneficiariesInputObjectSchema } from './SubscriberUncheckedCreateWithoutBeneficiariesInput.schema';
import { SubscriberCreateOrConnectWithoutBeneficiariesInputObjectSchema } from './SubscriberCreateOrConnectWithoutBeneficiariesInput.schema';
import { SubscriberWhereUniqueInputObjectSchema } from './SubscriberWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SubscriberCreateNestedOneWithoutBeneficiariesInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => SubscriberCreateWithoutBeneficiariesInputObjectSchema),
          z.lazy(
            () =>
              SubscriberUncheckedCreateWithoutBeneficiariesInputObjectSchema,
          ),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(
          () => SubscriberCreateOrConnectWithoutBeneficiariesInputObjectSchema,
        )
        .optional(),
      connect: z.lazy(() => SubscriberWhereUniqueInputObjectSchema).optional(),
    })
    .strict();

export const SubscriberCreateNestedOneWithoutBeneficiariesInputObjectSchema =
  Schema;
