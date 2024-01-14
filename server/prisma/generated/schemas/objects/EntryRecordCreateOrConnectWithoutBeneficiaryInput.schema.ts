import { z } from 'zod';
import { EntryRecordWhereUniqueInputObjectSchema } from './EntryRecordWhereUniqueInput.schema';
import { EntryRecordCreateWithoutBeneficiaryInputObjectSchema } from './EntryRecordCreateWithoutBeneficiaryInput.schema';
import { EntryRecordUncheckedCreateWithoutBeneficiaryInputObjectSchema } from './EntryRecordUncheckedCreateWithoutBeneficiaryInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.EntryRecordCreateOrConnectWithoutBeneficiaryInput> =
  z
    .object({
      where: z.lazy(() => EntryRecordWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => EntryRecordCreateWithoutBeneficiaryInputObjectSchema),
        z.lazy(
          () => EntryRecordUncheckedCreateWithoutBeneficiaryInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const EntryRecordCreateOrConnectWithoutBeneficiaryInputObjectSchema =
  Schema;
