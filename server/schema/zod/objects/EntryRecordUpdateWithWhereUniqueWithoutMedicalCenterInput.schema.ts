/* eslint-disable */
import { z } from 'zod';
import { EntryRecordWhereUniqueInputObjectSchema } from './EntryRecordWhereUniqueInput.schema';
import { EntryRecordUpdateWithoutMedicalCenterInputObjectSchema } from './EntryRecordUpdateWithoutMedicalCenterInput.schema';
import { EntryRecordUncheckedUpdateWithoutMedicalCenterInputObjectSchema } from './EntryRecordUncheckedUpdateWithoutMedicalCenterInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.EntryRecordUpdateWithWhereUniqueWithoutMedicalCenterInput>;
export const EntryRecordUpdateWithWhereUniqueWithoutMedicalCenterInputObjectSchema: SchemaType = z
    .object({
        where: z.lazy(() => EntryRecordWhereUniqueInputObjectSchema),
        data: z.union([
            z.lazy(() => EntryRecordUpdateWithoutMedicalCenterInputObjectSchema),
            z.lazy(() => EntryRecordUncheckedUpdateWithoutMedicalCenterInputObjectSchema),
        ]),
    })
    .strict() as SchemaType;
