import { z } from 'zod';
import { SubscriberUpdateWithoutBeneficiariesInputObjectSchema } from './SubscriberUpdateWithoutBeneficiariesInput.schema';
import { SubscriberUncheckedUpdateWithoutBeneficiariesInputObjectSchema } from './SubscriberUncheckedUpdateWithoutBeneficiariesInput.schema';
import { SubscriberCreateWithoutBeneficiariesInputObjectSchema } from './SubscriberCreateWithoutBeneficiariesInput.schema';
import { SubscriberUncheckedCreateWithoutBeneficiariesInputObjectSchema } from './SubscriberUncheckedCreateWithoutBeneficiariesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SubscriberUpsertWithoutBeneficiariesInput> = z
  .object({
    update: z.union([
      z.lazy(() => SubscriberUpdateWithoutBeneficiariesInputObjectSchema),
      z.lazy(
        () => SubscriberUncheckedUpdateWithoutBeneficiariesInputObjectSchema,
      ),
    ]),
    create: z.union([
      z.lazy(() => SubscriberCreateWithoutBeneficiariesInputObjectSchema),
      z.lazy(
        () => SubscriberUncheckedCreateWithoutBeneficiariesInputObjectSchema,
      ),
    ]),
  })
  .strict();

export const SubscriberUpsertWithoutBeneficiariesInputObjectSchema = Schema;
