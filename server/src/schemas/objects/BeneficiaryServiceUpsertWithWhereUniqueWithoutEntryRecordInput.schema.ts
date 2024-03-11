import { z } from 'zod';
import { BeneficiaryServiceWhereUniqueInputObjectSchema } from './BeneficiaryServiceWhereUniqueInput.schema';
import { BeneficiaryServiceUpdateWithoutEntryRecordInputObjectSchema } from './BeneficiaryServiceUpdateWithoutEntryRecordInput.schema';
import { BeneficiaryServiceUncheckedUpdateWithoutEntryRecordInputObjectSchema } from './BeneficiaryServiceUncheckedUpdateWithoutEntryRecordInput.schema';
import { BeneficiaryServiceCreateWithoutEntryRecordInputObjectSchema } from './BeneficiaryServiceCreateWithoutEntryRecordInput.schema';
import { BeneficiaryServiceUncheckedCreateWithoutEntryRecordInputObjectSchema } from './BeneficiaryServiceUncheckedCreateWithoutEntryRecordInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BeneficiaryServiceUpsertWithWhereUniqueWithoutEntryRecordInput> =
  z
    .object({
      where: z.lazy(() => BeneficiaryServiceWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(
          () => BeneficiaryServiceUpdateWithoutEntryRecordInputObjectSchema,
        ),
        z.lazy(
          () =>
            BeneficiaryServiceUncheckedUpdateWithoutEntryRecordInputObjectSchema,
        ),
      ]),
      create: z.union([
        z.lazy(
          () => BeneficiaryServiceCreateWithoutEntryRecordInputObjectSchema,
        ),
        z.lazy(
          () =>
            BeneficiaryServiceUncheckedCreateWithoutEntryRecordInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const BeneficiaryServiceUpsertWithWhereUniqueWithoutEntryRecordInputObjectSchema =
  Schema;
