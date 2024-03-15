/* eslint-disable */
import { z } from 'zod';
import { EntryRecordWhereUniqueInputObjectSchema } from './EntryRecordWhereUniqueInput.schema';
import { EntryRecordCreateWithoutMedicalCenterInputObjectSchema } from './EntryRecordCreateWithoutMedicalCenterInput.schema';
import { EntryRecordUncheckedCreateWithoutMedicalCenterInputObjectSchema } from './EntryRecordUncheckedCreateWithoutMedicalCenterInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.EntryRecordCreateOrConnectWithoutMedicalCenterInput>;
export const EntryRecordCreateOrConnectWithoutMedicalCenterInputObjectSchema: SchemaType = z
    .object({
        where: z.lazy(() => EntryRecordWhereUniqueInputObjectSchema),
        create: z.union([
            z.lazy(() => EntryRecordCreateWithoutMedicalCenterInputObjectSchema),
            z.lazy(() => EntryRecordUncheckedCreateWithoutMedicalCenterInputObjectSchema),
        ]),
    })
    .strict() as SchemaType;
