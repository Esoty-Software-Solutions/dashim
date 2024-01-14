import { z } from 'zod';
import { SubscriberCreateWithoutBeneficiaryInputObjectSchema } from './SubscriberCreateWithoutBeneficiaryInput.schema';
import { SubscriberUncheckedCreateWithoutBeneficiaryInputObjectSchema } from './SubscriberUncheckedCreateWithoutBeneficiaryInput.schema';
import { SubscriberCreateOrConnectWithoutBeneficiaryInputObjectSchema } from './SubscriberCreateOrConnectWithoutBeneficiaryInput.schema';
import { SubscriberWhereUniqueInputObjectSchema } from './SubscriberWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SubscriberCreateNestedOneWithoutBeneficiaryInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => SubscriberCreateWithoutBeneficiaryInputObjectSchema),
          z.lazy(
            () => SubscriberUncheckedCreateWithoutBeneficiaryInputObjectSchema,
          ),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(
          () => SubscriberCreateOrConnectWithoutBeneficiaryInputObjectSchema,
        )
        .optional(),
      connect: z.lazy(() => SubscriberWhereUniqueInputObjectSchema).optional(),
    })
    .strict();

export const SubscriberCreateNestedOneWithoutBeneficiaryInputObjectSchema =
  Schema;
