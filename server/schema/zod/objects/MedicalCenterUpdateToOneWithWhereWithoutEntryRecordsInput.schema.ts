/* eslint-disable */
import { z } from 'zod';
import { MedicalCenterWhereInputObjectSchema } from './MedicalCenterWhereInput.schema';
import { MedicalCenterUpdateWithoutEntryRecordsInputObjectSchema } from './MedicalCenterUpdateWithoutEntryRecordsInput.schema';
import { MedicalCenterUncheckedUpdateWithoutEntryRecordsInputObjectSchema } from './MedicalCenterUncheckedUpdateWithoutEntryRecordsInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.MedicalCenterUpdateToOneWithWhereWithoutEntryRecordsInput>;
export const MedicalCenterUpdateToOneWithWhereWithoutEntryRecordsInputObjectSchema: SchemaType = z
    .object({
        where: z.lazy(() => MedicalCenterWhereInputObjectSchema).optional(),
        data: z.union([
            z.lazy(() => MedicalCenterUpdateWithoutEntryRecordsInputObjectSchema),
            z.lazy(() => MedicalCenterUncheckedUpdateWithoutEntryRecordsInputObjectSchema),
        ]),
    })
    .strict() as SchemaType;
