import { z } from 'zod';
import { BeneficiaryCreateWithoutEntryRecordsInputObjectSchema } from './BeneficiaryCreateWithoutEntryRecordsInput.schema';
import { BeneficiaryUncheckedCreateWithoutEntryRecordsInputObjectSchema } from './BeneficiaryUncheckedCreateWithoutEntryRecordsInput.schema';
import { BeneficiaryCreateOrConnectWithoutEntryRecordsInputObjectSchema } from './BeneficiaryCreateOrConnectWithoutEntryRecordsInput.schema';
import { BeneficiaryWhereUniqueInputObjectSchema } from './BeneficiaryWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BeneficiaryCreateNestedOneWithoutEntryRecordsInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => BeneficiaryCreateWithoutEntryRecordsInputObjectSchema),
          z.lazy(
            () =>
              BeneficiaryUncheckedCreateWithoutEntryRecordsInputObjectSchema,
          ),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(
          () => BeneficiaryCreateOrConnectWithoutEntryRecordsInputObjectSchema,
        )
        .optional(),
      connect: z.lazy(() => BeneficiaryWhereUniqueInputObjectSchema).optional(),
    })
    .strict();

export const BeneficiaryCreateNestedOneWithoutEntryRecordsInputObjectSchema =
  Schema;
