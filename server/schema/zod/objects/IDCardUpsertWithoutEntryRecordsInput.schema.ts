/* eslint-disable */
import { z } from 'zod';
import { IDCardUpdateWithoutEntryRecordsInputObjectSchema } from './IDCardUpdateWithoutEntryRecordsInput.schema';
import { IDCardUncheckedUpdateWithoutEntryRecordsInputObjectSchema } from './IDCardUncheckedUpdateWithoutEntryRecordsInput.schema';
import { IDCardCreateWithoutEntryRecordsInputObjectSchema } from './IDCardCreateWithoutEntryRecordsInput.schema';
import { IDCardUncheckedCreateWithoutEntryRecordsInputObjectSchema } from './IDCardUncheckedCreateWithoutEntryRecordsInput.schema';
import { IDCardWhereInputObjectSchema } from './IDCardWhereInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.IDCardUpsertWithoutEntryRecordsInput>;
export const IDCardUpsertWithoutEntryRecordsInputObjectSchema: SchemaType = z
    .object({
        update: z.union([
            z.lazy(() => IDCardUpdateWithoutEntryRecordsInputObjectSchema),
            z.lazy(() => IDCardUncheckedUpdateWithoutEntryRecordsInputObjectSchema),
        ]),
        create: z.union([
            z.lazy(() => IDCardCreateWithoutEntryRecordsInputObjectSchema),
            z.lazy(() => IDCardUncheckedCreateWithoutEntryRecordsInputObjectSchema),
        ]),
        where: z.lazy(() => IDCardWhereInputObjectSchema).optional(),
    })
    .strict() as SchemaType;
