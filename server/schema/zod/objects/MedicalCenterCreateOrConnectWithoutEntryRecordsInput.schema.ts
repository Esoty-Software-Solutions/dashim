/* eslint-disable */
import { z } from 'zod';
import { MedicalCenterWhereUniqueInputObjectSchema } from './MedicalCenterWhereUniqueInput.schema';
import { MedicalCenterCreateWithoutEntryRecordsInputObjectSchema } from './MedicalCenterCreateWithoutEntryRecordsInput.schema';
import { MedicalCenterUncheckedCreateWithoutEntryRecordsInputObjectSchema } from './MedicalCenterUncheckedCreateWithoutEntryRecordsInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.MedicalCenterCreateOrConnectWithoutEntryRecordsInput>;
export const MedicalCenterCreateOrConnectWithoutEntryRecordsInputObjectSchema: SchemaType = z
    .object({
        where: z.lazy(() => MedicalCenterWhereUniqueInputObjectSchema),
        create: z.union([
            z.lazy(() => MedicalCenterCreateWithoutEntryRecordsInputObjectSchema),
            z.lazy(() => MedicalCenterUncheckedCreateWithoutEntryRecordsInputObjectSchema),
        ]),
    })
    .strict() as SchemaType;
