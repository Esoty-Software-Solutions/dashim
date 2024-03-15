/* eslint-disable */
import { z } from 'zod';
import { MedicalCenterCreateWithoutEntryRecordsInputObjectSchema } from './MedicalCenterCreateWithoutEntryRecordsInput.schema';
import { MedicalCenterUncheckedCreateWithoutEntryRecordsInputObjectSchema } from './MedicalCenterUncheckedCreateWithoutEntryRecordsInput.schema';
import { MedicalCenterCreateOrConnectWithoutEntryRecordsInputObjectSchema } from './MedicalCenterCreateOrConnectWithoutEntryRecordsInput.schema';
import { MedicalCenterWhereUniqueInputObjectSchema } from './MedicalCenterWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.MedicalCenterCreateNestedOneWithoutEntryRecordsInput>;
export const MedicalCenterCreateNestedOneWithoutEntryRecordsInputObjectSchema: SchemaType = z
    .object({
        create: z
            .union([
                z.lazy(() => MedicalCenterCreateWithoutEntryRecordsInputObjectSchema),
                z.lazy(() => MedicalCenterUncheckedCreateWithoutEntryRecordsInputObjectSchema),
            ])
            .optional(),
        connectOrCreate: z.lazy(() => MedicalCenterCreateOrConnectWithoutEntryRecordsInputObjectSchema).optional(),
        connect: z.lazy(() => MedicalCenterWhereUniqueInputObjectSchema).optional(),
    })
    .strict() as SchemaType;
