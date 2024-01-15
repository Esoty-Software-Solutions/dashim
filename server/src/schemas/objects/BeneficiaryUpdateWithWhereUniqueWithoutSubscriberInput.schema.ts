import { z } from 'zod';
import { BeneficiaryWhereUniqueInputObjectSchema } from './BeneficiaryWhereUniqueInput.schema';
import { BeneficiaryUpdateWithoutSubscriberInputObjectSchema } from './BeneficiaryUpdateWithoutSubscriberInput.schema';
import { BeneficiaryUncheckedUpdateWithoutSubscriberInputObjectSchema } from './BeneficiaryUncheckedUpdateWithoutSubscriberInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BeneficiaryUpdateWithWhereUniqueWithoutSubscriberInput> =
  z
    .object({
      where: z.lazy(() => BeneficiaryWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => BeneficiaryUpdateWithoutSubscriberInputObjectSchema),
        z.lazy(
          () => BeneficiaryUncheckedUpdateWithoutSubscriberInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const BeneficiaryUpdateWithWhereUniqueWithoutSubscriberInputObjectSchema =
  Schema;
