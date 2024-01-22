import { z } from 'zod';
import { SubscriberCreateWithoutBeneficiariesInputObjectSchema } from './SubscriberCreateWithoutBeneficiariesInput.schema';
import { SubscriberUncheckedCreateWithoutBeneficiariesInputObjectSchema } from './SubscriberUncheckedCreateWithoutBeneficiariesInput.schema';
import { SubscriberCreateOrConnectWithoutBeneficiariesInputObjectSchema } from './SubscriberCreateOrConnectWithoutBeneficiariesInput.schema';
import { SubscriberUpsertWithoutBeneficiariesInputObjectSchema } from './SubscriberUpsertWithoutBeneficiariesInput.schema';
import { SubscriberWhereUniqueInputObjectSchema } from './SubscriberWhereUniqueInput.schema';
import { SubscriberUpdateWithoutBeneficiariesInputObjectSchema } from './SubscriberUpdateWithoutBeneficiariesInput.schema';
import { SubscriberUncheckedUpdateWithoutBeneficiariesInputObjectSchema } from './SubscriberUncheckedUpdateWithoutBeneficiariesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SubscriberUpdateOneRequiredWithoutBeneficiariesNestedInput> =
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
      upsert: z
        .lazy(() => SubscriberUpsertWithoutBeneficiariesInputObjectSchema)
        .optional(),
      connect: z.lazy(() => SubscriberWhereUniqueInputObjectSchema).optional(),
      update: z
        .union([
          z.lazy(() => SubscriberUpdateWithoutBeneficiariesInputObjectSchema),
          z.lazy(
            () =>
              SubscriberUncheckedUpdateWithoutBeneficiariesInputObjectSchema,
          ),
        ])
        .optional(),
    })
    .strict();

export const SubscriberUpdateOneRequiredWithoutBeneficiariesNestedInputObjectSchema =
  Schema;
