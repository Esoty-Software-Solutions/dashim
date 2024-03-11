import { z } from 'zod';
import { BeneficiaryWhereUniqueInputObjectSchema } from './BeneficiaryWhereUniqueInput.schema';
import { BeneficiaryCreateWithoutEntryRecordsInputObjectSchema } from './BeneficiaryCreateWithoutEntryRecordsInput.schema';
import { BeneficiaryUncheckedCreateWithoutEntryRecordsInputObjectSchema } from './BeneficiaryUncheckedCreateWithoutEntryRecordsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BeneficiaryCreateOrConnectWithoutEntryRecordsInput> =
  z
    .object({
      where: z.lazy(() => BeneficiaryWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => BeneficiaryCreateWithoutEntryRecordsInputObjectSchema),
        z.lazy(
          () => BeneficiaryUncheckedCreateWithoutEntryRecordsInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const BeneficiaryCreateOrConnectWithoutEntryRecordsInputObjectSchema =
  Schema;
