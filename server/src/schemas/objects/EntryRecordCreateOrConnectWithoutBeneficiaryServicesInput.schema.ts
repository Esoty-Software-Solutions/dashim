import { z } from 'zod';
import { EntryRecordWhereUniqueInputObjectSchema } from './EntryRecordWhereUniqueInput.schema';
import { EntryRecordCreateWithoutBeneficiaryServicesInputObjectSchema } from './EntryRecordCreateWithoutBeneficiaryServicesInput.schema';
import { EntryRecordUncheckedCreateWithoutBeneficiaryServicesInputObjectSchema } from './EntryRecordUncheckedCreateWithoutBeneficiaryServicesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.EntryRecordCreateOrConnectWithoutBeneficiaryServicesInput> =
  z
    .object({
      where: z.lazy(() => EntryRecordWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(
          () => EntryRecordCreateWithoutBeneficiaryServicesInputObjectSchema,
        ),
        z.lazy(
          () =>
            EntryRecordUncheckedCreateWithoutBeneficiaryServicesInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const EntryRecordCreateOrConnectWithoutBeneficiaryServicesInputObjectSchema =
  Schema;
