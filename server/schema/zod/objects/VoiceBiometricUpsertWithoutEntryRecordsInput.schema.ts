/* eslint-disable */
import { z } from 'zod';
import { VoiceBiometricUpdateWithoutEntryRecordsInputObjectSchema } from './VoiceBiometricUpdateWithoutEntryRecordsInput.schema';
import { VoiceBiometricUncheckedUpdateWithoutEntryRecordsInputObjectSchema } from './VoiceBiometricUncheckedUpdateWithoutEntryRecordsInput.schema';
import { VoiceBiometricCreateWithoutEntryRecordsInputObjectSchema } from './VoiceBiometricCreateWithoutEntryRecordsInput.schema';
import { VoiceBiometricUncheckedCreateWithoutEntryRecordsInputObjectSchema } from './VoiceBiometricUncheckedCreateWithoutEntryRecordsInput.schema';
import { VoiceBiometricWhereInputObjectSchema } from './VoiceBiometricWhereInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.VoiceBiometricUpsertWithoutEntryRecordsInput>;
export const VoiceBiometricUpsertWithoutEntryRecordsInputObjectSchema: SchemaType = z
    .object({
        update: z.union([
            z.lazy(() => VoiceBiometricUpdateWithoutEntryRecordsInputObjectSchema),
            z.lazy(() => VoiceBiometricUncheckedUpdateWithoutEntryRecordsInputObjectSchema),
        ]),
        create: z.union([
            z.lazy(() => VoiceBiometricCreateWithoutEntryRecordsInputObjectSchema),
            z.lazy(() => VoiceBiometricUncheckedCreateWithoutEntryRecordsInputObjectSchema),
        ]),
        where: z.lazy(() => VoiceBiometricWhereInputObjectSchema).optional(),
    })
    .strict() as SchemaType;
