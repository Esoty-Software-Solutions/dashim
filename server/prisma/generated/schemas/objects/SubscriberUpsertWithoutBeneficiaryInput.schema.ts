import { z } from 'zod';
import { SubscriberUpdateWithoutBeneficiaryInputObjectSchema } from './SubscriberUpdateWithoutBeneficiaryInput.schema';
import { SubscriberUncheckedUpdateWithoutBeneficiaryInputObjectSchema } from './SubscriberUncheckedUpdateWithoutBeneficiaryInput.schema';
import { SubscriberCreateWithoutBeneficiaryInputObjectSchema } from './SubscriberCreateWithoutBeneficiaryInput.schema';
import { SubscriberUncheckedCreateWithoutBeneficiaryInputObjectSchema } from './SubscriberUncheckedCreateWithoutBeneficiaryInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SubscriberUpsertWithoutBeneficiaryInput> = z
  .object({
    update: z.union([
      z.lazy(() => SubscriberUpdateWithoutBeneficiaryInputObjectSchema),
      z.lazy(
        () => SubscriberUncheckedUpdateWithoutBeneficiaryInputObjectSchema,
      ),
    ]),
    create: z.union([
      z.lazy(() => SubscriberCreateWithoutBeneficiaryInputObjectSchema),
      z.lazy(
        () => SubscriberUncheckedCreateWithoutBeneficiaryInputObjectSchema,
      ),
    ]),
  })
  .strict();

export const SubscriberUpsertWithoutBeneficiaryInputObjectSchema = Schema;
