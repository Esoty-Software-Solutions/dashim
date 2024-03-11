import { z } from 'zod';
import { BeneficiaryServiceWhereUniqueInputObjectSchema } from './BeneficiaryServiceWhereUniqueInput.schema';
import { BeneficiaryServiceUpdateWithoutEntryRecordInputObjectSchema } from './BeneficiaryServiceUpdateWithoutEntryRecordInput.schema';
import { BeneficiaryServiceUncheckedUpdateWithoutEntryRecordInputObjectSchema } from './BeneficiaryServiceUncheckedUpdateWithoutEntryRecordInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BeneficiaryServiceUpdateWithWhereUniqueWithoutEntryRecordInput> =
  z
    .object({
      where: z.lazy(() => BeneficiaryServiceWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(
          () => BeneficiaryServiceUpdateWithoutEntryRecordInputObjectSchema,
        ),
        z.lazy(
          () =>
            BeneficiaryServiceUncheckedUpdateWithoutEntryRecordInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const BeneficiaryServiceUpdateWithWhereUniqueWithoutEntryRecordInputObjectSchema =
  Schema;
