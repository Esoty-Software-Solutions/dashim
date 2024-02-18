import { z } from 'zod';
import { EntryRecordUpdateWithoutBeneficiaryServicesInputObjectSchema } from './EntryRecordUpdateWithoutBeneficiaryServicesInput.schema';
import { EntryRecordUncheckedUpdateWithoutBeneficiaryServicesInputObjectSchema } from './EntryRecordUncheckedUpdateWithoutBeneficiaryServicesInput.schema';
import { EntryRecordCreateWithoutBeneficiaryServicesInputObjectSchema } from './EntryRecordCreateWithoutBeneficiaryServicesInput.schema';
import { EntryRecordUncheckedCreateWithoutBeneficiaryServicesInputObjectSchema } from './EntryRecordUncheckedCreateWithoutBeneficiaryServicesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.EntryRecordUpsertWithoutBeneficiaryServicesInput> =
  z
    .object({
      update: z.union([
        z.lazy(
          () => EntryRecordUpdateWithoutBeneficiaryServicesInputObjectSchema,
        ),
        z.lazy(
          () =>
            EntryRecordUncheckedUpdateWithoutBeneficiaryServicesInputObjectSchema,
        ),
      ]),
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

export const EntryRecordUpsertWithoutBeneficiaryServicesInputObjectSchema =
  Schema;
