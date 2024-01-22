import { z } from 'zod';
import { MedicalCenterCreateWithoutEntryRecordsInputObjectSchema } from './MedicalCenterCreateWithoutEntryRecordsInput.schema';
import { MedicalCenterUncheckedCreateWithoutEntryRecordsInputObjectSchema } from './MedicalCenterUncheckedCreateWithoutEntryRecordsInput.schema';
import { MedicalCenterCreateOrConnectWithoutEntryRecordsInputObjectSchema } from './MedicalCenterCreateOrConnectWithoutEntryRecordsInput.schema';
import { MedicalCenterUpsertWithoutEntryRecordsInputObjectSchema } from './MedicalCenterUpsertWithoutEntryRecordsInput.schema';
import { MedicalCenterWhereUniqueInputObjectSchema } from './MedicalCenterWhereUniqueInput.schema';
import { MedicalCenterUpdateWithoutEntryRecordsInputObjectSchema } from './MedicalCenterUpdateWithoutEntryRecordsInput.schema';
import { MedicalCenterUncheckedUpdateWithoutEntryRecordsInputObjectSchema } from './MedicalCenterUncheckedUpdateWithoutEntryRecordsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MedicalCenterUpdateOneRequiredWithoutEntryRecordsNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => MedicalCenterCreateWithoutEntryRecordsInputObjectSchema),
          z.lazy(
            () =>
              MedicalCenterUncheckedCreateWithoutEntryRecordsInputObjectSchema,
          ),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(
          () =>
            MedicalCenterCreateOrConnectWithoutEntryRecordsInputObjectSchema,
        )
        .optional(),
      upsert: z
        .lazy(() => MedicalCenterUpsertWithoutEntryRecordsInputObjectSchema)
        .optional(),
      connect: z
        .lazy(() => MedicalCenterWhereUniqueInputObjectSchema)
        .optional(),
      update: z
        .union([
          z.lazy(() => MedicalCenterUpdateWithoutEntryRecordsInputObjectSchema),
          z.lazy(
            () =>
              MedicalCenterUncheckedUpdateWithoutEntryRecordsInputObjectSchema,
          ),
        ])
        .optional(),
    })
    .strict();

export const MedicalCenterUpdateOneRequiredWithoutEntryRecordsNestedInputObjectSchema =
  Schema;
