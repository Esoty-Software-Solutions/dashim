/* eslint-disable */
import { z } from 'zod';
import { EntryRecordWhereUniqueInputObjectSchema } from './EntryRecordWhereUniqueInput.schema';
import { EntryRecordUpdateWithoutMedicalCenterInputObjectSchema } from './EntryRecordUpdateWithoutMedicalCenterInput.schema';
import { EntryRecordUncheckedUpdateWithoutMedicalCenterInputObjectSchema } from './EntryRecordUncheckedUpdateWithoutMedicalCenterInput.schema';
import { EntryRecordCreateWithoutMedicalCenterInputObjectSchema } from './EntryRecordCreateWithoutMedicalCenterInput.schema';
import { EntryRecordUncheckedCreateWithoutMedicalCenterInputObjectSchema } from './EntryRecordUncheckedCreateWithoutMedicalCenterInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.EntryRecordUpsertWithWhereUniqueWithoutMedicalCenterInput>;
export const EntryRecordUpsertWithWhereUniqueWithoutMedicalCenterInputObjectSchema: SchemaType = z
    .object({
        where: z.lazy(() => EntryRecordWhereUniqueInputObjectSchema),
        update: z.union([
            z.lazy(() => EntryRecordUpdateWithoutMedicalCenterInputObjectSchema),
            z.lazy(() => EntryRecordUncheckedUpdateWithoutMedicalCenterInputObjectSchema),
        ]),
        create: z.union([
            z.lazy(() => EntryRecordCreateWithoutMedicalCenterInputObjectSchema),
            z.lazy(() => EntryRecordUncheckedCreateWithoutMedicalCenterInputObjectSchema),
        ]),
    })
    .strict() as SchemaType;
