import { z } from 'zod';
import { EntryRecordWhereUniqueInputObjectSchema } from './EntryRecordWhereUniqueInput.schema';
import { EntryRecordUpdateWithoutBeneficiaryInputObjectSchema } from './EntryRecordUpdateWithoutBeneficiaryInput.schema';
import { EntryRecordUncheckedUpdateWithoutBeneficiaryInputObjectSchema } from './EntryRecordUncheckedUpdateWithoutBeneficiaryInput.schema';
import { EntryRecordCreateWithoutBeneficiaryInputObjectSchema } from './EntryRecordCreateWithoutBeneficiaryInput.schema';
import { EntryRecordUncheckedCreateWithoutBeneficiaryInputObjectSchema } from './EntryRecordUncheckedCreateWithoutBeneficiaryInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.EntryRecordUpsertWithWhereUniqueWithoutBeneficiaryInput> =
  z
    .object({
      where: z.lazy(() => EntryRecordWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => EntryRecordUpdateWithoutBeneficiaryInputObjectSchema),
        z.lazy(
          () => EntryRecordUncheckedUpdateWithoutBeneficiaryInputObjectSchema,
        ),
      ]),
      create: z.union([
        z.lazy(() => EntryRecordCreateWithoutBeneficiaryInputObjectSchema),
        z.lazy(
          () => EntryRecordUncheckedCreateWithoutBeneficiaryInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const EntryRecordUpsertWithWhereUniqueWithoutBeneficiaryInputObjectSchema =
  Schema;
