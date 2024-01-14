import { z } from 'zod';
import { BeneficiaryWhereUniqueInputObjectSchema } from './BeneficiaryWhereUniqueInput.schema';
import { BeneficiaryCreateWithoutSubscriberInputObjectSchema } from './BeneficiaryCreateWithoutSubscriberInput.schema';
import { BeneficiaryUncheckedCreateWithoutSubscriberInputObjectSchema } from './BeneficiaryUncheckedCreateWithoutSubscriberInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BeneficiaryCreateOrConnectWithoutSubscriberInput> =
  z
    .object({
      where: z.lazy(() => BeneficiaryWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => BeneficiaryCreateWithoutSubscriberInputObjectSchema),
        z.lazy(
          () => BeneficiaryUncheckedCreateWithoutSubscriberInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const BeneficiaryCreateOrConnectWithoutSubscriberInputObjectSchema =
  Schema;
