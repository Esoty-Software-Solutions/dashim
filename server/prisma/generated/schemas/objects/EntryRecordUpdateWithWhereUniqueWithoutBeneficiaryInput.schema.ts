import { z } from 'zod';
import { EntryRecordWhereUniqueInputObjectSchema } from './EntryRecordWhereUniqueInput.schema';
import { EntryRecordUpdateWithoutBeneficiaryInputObjectSchema } from './EntryRecordUpdateWithoutBeneficiaryInput.schema';
import { EntryRecordUncheckedUpdateWithoutBeneficiaryInputObjectSchema } from './EntryRecordUncheckedUpdateWithoutBeneficiaryInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.EntryRecordUpdateWithWhereUniqueWithoutBeneficiaryInput> =
  z
    .object({
      where: z.lazy(() => EntryRecordWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => EntryRecordUpdateWithoutBeneficiaryInputObjectSchema),
        z.lazy(
          () => EntryRecordUncheckedUpdateWithoutBeneficiaryInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const EntryRecordUpdateWithWhereUniqueWithoutBeneficiaryInputObjectSchema =
  Schema;
