import { z } from 'zod';
import { EntryRecordCreateWithoutBeneficiaryServicesInputObjectSchema } from './EntryRecordCreateWithoutBeneficiaryServicesInput.schema';
import { EntryRecordUncheckedCreateWithoutBeneficiaryServicesInputObjectSchema } from './EntryRecordUncheckedCreateWithoutBeneficiaryServicesInput.schema';
import { EntryRecordCreateOrConnectWithoutBeneficiaryServicesInputObjectSchema } from './EntryRecordCreateOrConnectWithoutBeneficiaryServicesInput.schema';
import { EntryRecordUpsertWithoutBeneficiaryServicesInputObjectSchema } from './EntryRecordUpsertWithoutBeneficiaryServicesInput.schema';
import { EntryRecordWhereUniqueInputObjectSchema } from './EntryRecordWhereUniqueInput.schema';
import { EntryRecordUpdateWithoutBeneficiaryServicesInputObjectSchema } from './EntryRecordUpdateWithoutBeneficiaryServicesInput.schema';
import { EntryRecordUncheckedUpdateWithoutBeneficiaryServicesInputObjectSchema } from './EntryRecordUncheckedUpdateWithoutBeneficiaryServicesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.EntryRecordUpdateOneRequiredWithoutBeneficiaryServicesNestedInput> =
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
      upsert: z
        .lazy(
          () => EntryRecordUpsertWithoutBeneficiaryServicesInputObjectSchema,
        )
        .optional(),
      connect: z.lazy(() => EntryRecordWhereUniqueInputObjectSchema).optional(),
      update: z
        .union([
          z.lazy(
            () => EntryRecordUpdateWithoutBeneficiaryServicesInputObjectSchema,
          ),
          z.lazy(
            () =>
              EntryRecordUncheckedUpdateWithoutBeneficiaryServicesInputObjectSchema,
          ),
        ])
        .optional(),
    })
    .strict();

export const EntryRecordUpdateOneRequiredWithoutBeneficiaryServicesNestedInputObjectSchema =
  Schema;
