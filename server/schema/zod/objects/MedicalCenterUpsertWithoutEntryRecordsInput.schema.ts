/* eslint-disable */
import { z } from 'zod';
import { MedicalCenterUpdateWithoutEntryRecordsInputObjectSchema } from './MedicalCenterUpdateWithoutEntryRecordsInput.schema';
import { MedicalCenterUncheckedUpdateWithoutEntryRecordsInputObjectSchema } from './MedicalCenterUncheckedUpdateWithoutEntryRecordsInput.schema';
import { MedicalCenterCreateWithoutEntryRecordsInputObjectSchema } from './MedicalCenterCreateWithoutEntryRecordsInput.schema';
import { MedicalCenterUncheckedCreateWithoutEntryRecordsInputObjectSchema } from './MedicalCenterUncheckedCreateWithoutEntryRecordsInput.schema';
import { MedicalCenterWhereInputObjectSchema } from './MedicalCenterWhereInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.MedicalCenterUpsertWithoutEntryRecordsInput>;
export const MedicalCenterUpsertWithoutEntryRecordsInputObjectSchema: SchemaType = z
    .object({
        update: z.union([
            z.lazy(() => MedicalCenterUpdateWithoutEntryRecordsInputObjectSchema),
            z.lazy(() => MedicalCenterUncheckedUpdateWithoutEntryRecordsInputObjectSchema),
        ]),
        create: z.union([
            z.lazy(() => MedicalCenterCreateWithoutEntryRecordsInputObjectSchema),
            z.lazy(() => MedicalCenterUncheckedCreateWithoutEntryRecordsInputObjectSchema),
        ]),
        where: z.lazy(() => MedicalCenterWhereInputObjectSchema).optional(),
    })
    .strict() as SchemaType;
