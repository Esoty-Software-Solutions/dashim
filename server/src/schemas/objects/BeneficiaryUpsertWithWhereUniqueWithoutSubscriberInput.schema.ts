import { z } from 'zod';
import { BeneficiaryWhereUniqueInputObjectSchema } from './BeneficiaryWhereUniqueInput.schema';
import { BeneficiaryUpdateWithoutSubscriberInputObjectSchema } from './BeneficiaryUpdateWithoutSubscriberInput.schema';
import { BeneficiaryUncheckedUpdateWithoutSubscriberInputObjectSchema } from './BeneficiaryUncheckedUpdateWithoutSubscriberInput.schema';
import { BeneficiaryCreateWithoutSubscriberInputObjectSchema } from './BeneficiaryCreateWithoutSubscriberInput.schema';
import { BeneficiaryUncheckedCreateWithoutSubscriberInputObjectSchema } from './BeneficiaryUncheckedCreateWithoutSubscriberInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BeneficiaryUpsertWithWhereUniqueWithoutSubscriberInput> =
  z
    .object({
      where: z.lazy(() => BeneficiaryWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => BeneficiaryUpdateWithoutSubscriberInputObjectSchema),
        z.lazy(
          () => BeneficiaryUncheckedUpdateWithoutSubscriberInputObjectSchema,
        ),
      ]),
      create: z.union([
        z.lazy(() => BeneficiaryCreateWithoutSubscriberInputObjectSchema),
        z.lazy(
          () => BeneficiaryUncheckedCreateWithoutSubscriberInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const BeneficiaryUpsertWithWhereUniqueWithoutSubscriberInputObjectSchema =
  Schema;
