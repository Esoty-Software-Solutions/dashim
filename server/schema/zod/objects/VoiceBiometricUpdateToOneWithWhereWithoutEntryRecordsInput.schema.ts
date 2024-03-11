/* eslint-disable */
import { z } from 'zod';
import { VoiceBiometricWhereInputObjectSchema } from './VoiceBiometricWhereInput.schema';
import { VoiceBiometricUpdateWithoutEntryRecordsInputObjectSchema } from './VoiceBiometricUpdateWithoutEntryRecordsInput.schema';
import { VoiceBiometricUncheckedUpdateWithoutEntryRecordsInputObjectSchema } from './VoiceBiometricUncheckedUpdateWithoutEntryRecordsInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.VoiceBiometricUpdateToOneWithWhereWithoutEntryRecordsInput>;
export const VoiceBiometricUpdateToOneWithWhereWithoutEntryRecordsInputObjectSchema: SchemaType = z
    .object({
        where: z.lazy(() => VoiceBiometricWhereInputObjectSchema).optional(),
        data: z.union([
            z.lazy(() => VoiceBiometricUpdateWithoutEntryRecordsInputObjectSchema),
            z.lazy(() => VoiceBiometricUncheckedUpdateWithoutEntryRecordsInputObjectSchema),
        ]),
    })
    .strict() as SchemaType;
