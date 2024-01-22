import { z } from 'zod';
import { EntryRecordCreateWithoutMedicalCenterInputObjectSchema } from './EntryRecordCreateWithoutMedicalCenterInput.schema';
import { EntryRecordUncheckedCreateWithoutMedicalCenterInputObjectSchema } from './EntryRecordUncheckedCreateWithoutMedicalCenterInput.schema';
import { EntryRecordCreateOrConnectWithoutMedicalCenterInputObjectSchema } from './EntryRecordCreateOrConnectWithoutMedicalCenterInput.schema';
import { EntryRecordCreateManyMedicalCenterInputEnvelopeObjectSchema } from './EntryRecordCreateManyMedicalCenterInputEnvelope.schema';
import { EntryRecordWhereUniqueInputObjectSchema } from './EntryRecordWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.EntryRecordUncheckedCreateNestedManyWithoutMedicalCenterInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => EntryRecordCreateWithoutMedicalCenterInputObjectSchema),
          z
            .lazy(() => EntryRecordCreateWithoutMedicalCenterInputObjectSchema)
            .array(),
          z.lazy(
            () =>
              EntryRecordUncheckedCreateWithoutMedicalCenterInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                EntryRecordUncheckedCreateWithoutMedicalCenterInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(
            () =>
              EntryRecordCreateOrConnectWithoutMedicalCenterInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                EntryRecordCreateOrConnectWithoutMedicalCenterInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => EntryRecordCreateManyMedicalCenterInputEnvelopeObjectSchema)
        .optional(),
      connect: z
        .union([
          z.lazy(() => EntryRecordWhereUniqueInputObjectSchema),
          z.lazy(() => EntryRecordWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const EntryRecordUncheckedCreateNestedManyWithoutMedicalCenterInputObjectSchema =
  Schema;
