import { z } from 'zod';
import { EntryRecordCreateWithoutBeneficiaryServicesInputObjectSchema } from './EntryRecordCreateWithoutBeneficiaryServicesInput.schema';
import { EntryRecordUncheckedCreateWithoutBeneficiaryServicesInputObjectSchema } from './EntryRecordUncheckedCreateWithoutBeneficiaryServicesInput.schema';
import { EntryRecordCreateOrConnectWithoutBeneficiaryServicesInputObjectSchema } from './EntryRecordCreateOrConnectWithoutBeneficiaryServicesInput.schema';
import { EntryRecordWhereUniqueInputObjectSchema } from './EntryRecordWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.EntryRecordCreateNestedOneWithoutBeneficiaryServicesInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(
            () => EntryRecordCreateWithoutBeneficiaryServicesInputObjectSchema,
          ),
          z.lazy(
            () =>
              EntryRecordUncheckedCreateWithoutBeneficiaryServicesInputObjectSchema,
          ),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(
          () =>
            EntryRecordCreateOrConnectWithoutBeneficiaryServicesInputObjectSchema,
        )
        .optional(),
      connect: z.lazy(() => EntryRecordWhereUniqueInputObjectSchema).optional(),
    })
    .strict();

export const EntryRecordCreateNestedOneWithoutBeneficiaryServicesInputObjectSchema =
  Schema;
