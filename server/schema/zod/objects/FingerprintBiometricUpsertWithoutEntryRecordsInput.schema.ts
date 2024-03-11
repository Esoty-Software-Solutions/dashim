/* eslint-disable */
import { z } from 'zod';
import { FingerprintBiometricUpdateWithoutEntryRecordsInputObjectSchema } from './FingerprintBiometricUpdateWithoutEntryRecordsInput.schema';
import { FingerprintBiometricUncheckedUpdateWithoutEntryRecordsInputObjectSchema } from './FingerprintBiometricUncheckedUpdateWithoutEntryRecordsInput.schema';
import { FingerprintBiometricCreateWithoutEntryRecordsInputObjectSchema } from './FingerprintBiometricCreateWithoutEntryRecordsInput.schema';
import { FingerprintBiometricUncheckedCreateWithoutEntryRecordsInputObjectSchema } from './FingerprintBiometricUncheckedCreateWithoutEntryRecordsInput.schema';
import { FingerprintBiometricWhereInputObjectSchema } from './FingerprintBiometricWhereInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.FingerprintBiometricUpsertWithoutEntryRecordsInput>;
export const FingerprintBiometricUpsertWithoutEntryRecordsInputObjectSchema: SchemaType = z
    .object({
        update: z.union([
            z.lazy(() => FingerprintBiometricUpdateWithoutEntryRecordsInputObjectSchema),
            z.lazy(() => FingerprintBiometricUncheckedUpdateWithoutEntryRecordsInputObjectSchema),
        ]),
        create: z.union([
            z.lazy(() => FingerprintBiometricCreateWithoutEntryRecordsInputObjectSchema),
            z.lazy(() => FingerprintBiometricUncheckedCreateWithoutEntryRecordsInputObjectSchema),
        ]),
        where: z.lazy(() => FingerprintBiometricWhereInputObjectSchema).optional(),
    })
    .strict() as SchemaType;
