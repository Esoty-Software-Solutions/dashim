import { z } from 'zod';
import { BeneficiaryServiceWhereUniqueInputObjectSchema } from './BeneficiaryServiceWhereUniqueInput.schema';
import { BeneficiaryServiceCreateWithoutEntryRecordInputObjectSchema } from './BeneficiaryServiceCreateWithoutEntryRecordInput.schema';
import { BeneficiaryServiceUncheckedCreateWithoutEntryRecordInputObjectSchema } from './BeneficiaryServiceUncheckedCreateWithoutEntryRecordInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BeneficiaryServiceCreateOrConnectWithoutEntryRecordInput> =
  z
    .object({
      where: z.lazy(() => BeneficiaryServiceWhereUniqueInputObjectSchema),
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

export const BeneficiaryServiceCreateOrConnectWithoutEntryRecordInputObjectSchema =
  Schema;
