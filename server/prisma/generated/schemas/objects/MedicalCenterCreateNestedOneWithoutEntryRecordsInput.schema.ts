import { z } from 'zod';
import { MedicalCenterCreateWithoutEntryRecordsInputObjectSchema } from './MedicalCenterCreateWithoutEntryRecordsInput.schema';
import { MedicalCenterUncheckedCreateWithoutEntryRecordsInputObjectSchema } from './MedicalCenterUncheckedCreateWithoutEntryRecordsInput.schema';
import { MedicalCenterCreateOrConnectWithoutEntryRecordsInputObjectSchema } from './MedicalCenterCreateOrConnectWithoutEntryRecordsInput.schema';
import { MedicalCenterWhereUniqueInputObjectSchema } from './MedicalCenterWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MedicalCenterCreateNestedOneWithoutEntryRecordsInput> =
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
      connect: z
        .lazy(() => MedicalCenterWhereUniqueInputObjectSchema)
        .optional(),
    })
    .strict();

export const MedicalCenterCreateNestedOneWithoutEntryRecordsInputObjectSchema =
  Schema;
