/* eslint-disable */
import { z } from 'zod';
import { IDCardWhereInputObjectSchema } from './IDCardWhereInput.schema';
import { IDCardUpdateWithoutEntryRecordsInputObjectSchema } from './IDCardUpdateWithoutEntryRecordsInput.schema';
import { IDCardUncheckedUpdateWithoutEntryRecordsInputObjectSchema } from './IDCardUncheckedUpdateWithoutEntryRecordsInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.IDCardUpdateToOneWithWhereWithoutEntryRecordsInput>;
export const IDCardUpdateToOneWithWhereWithoutEntryRecordsInputObjectSchema: SchemaType = z
    .object({
        where: z.lazy(() => IDCardWhereInputObjectSchema).optional(),
        data: z.union([
            z.lazy(() => IDCardUpdateWithoutEntryRecordsInputObjectSchema),
            z.lazy(() => IDCardUncheckedUpdateWithoutEntryRecordsInputObjectSchema),
        ]),
    })
    .strict() as SchemaType;
