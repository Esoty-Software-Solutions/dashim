import { z } from 'zod';
import { SubscriberCreateWithoutBeneficiaryInputObjectSchema } from './SubscriberCreateWithoutBeneficiaryInput.schema';
import { SubscriberUncheckedCreateWithoutBeneficiaryInputObjectSchema } from './SubscriberUncheckedCreateWithoutBeneficiaryInput.schema';
import { SubscriberCreateOrConnectWithoutBeneficiaryInputObjectSchema } from './SubscriberCreateOrConnectWithoutBeneficiaryInput.schema';
import { SubscriberUpsertWithoutBeneficiaryInputObjectSchema } from './SubscriberUpsertWithoutBeneficiaryInput.schema';
import { SubscriberWhereUniqueInputObjectSchema } from './SubscriberWhereUniqueInput.schema';
import { SubscriberUpdateWithoutBeneficiaryInputObjectSchema } from './SubscriberUpdateWithoutBeneficiaryInput.schema';
import { SubscriberUncheckedUpdateWithoutBeneficiaryInputObjectSchema } from './SubscriberUncheckedUpdateWithoutBeneficiaryInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SubscriberUpdateOneRequiredWithoutBeneficiaryNestedInput> =
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
      upsert: z
        .lazy(() => SubscriberUpsertWithoutBeneficiaryInputObjectSchema)
        .optional(),
      connect: z.lazy(() => SubscriberWhereUniqueInputObjectSchema).optional(),
      update: z
        .union([
          z.lazy(() => SubscriberUpdateWithoutBeneficiaryInputObjectSchema),
          z.lazy(
            () => SubscriberUncheckedUpdateWithoutBeneficiaryInputObjectSchema,
          ),
        ])
        .optional(),
    })
    .strict();

export const SubscriberUpdateOneRequiredWithoutBeneficiaryNestedInputObjectSchema =
  Schema;
