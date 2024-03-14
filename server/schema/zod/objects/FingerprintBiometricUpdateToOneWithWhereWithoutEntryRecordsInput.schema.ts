/* eslint-disable */
import { z } from 'zod';
import { FingerprintBiometricWhereInputObjectSchema } from './FingerprintBiometricWhereInput.schema';
import { FingerprintBiometricUpdateWithoutEntryRecordsInputObjectSchema } from './FingerprintBiometricUpdateWithoutEntryRecordsInput.schema';
import { FingerprintBiometricUncheckedUpdateWithoutEntryRecordsInputObjectSchema } from './FingerprintBiometricUncheckedUpdateWithoutEntryRecordsInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.FingerprintBiometricUpdateToOneWithWhereWithoutEntryRecordsInput>;
export const FingerprintBiometricUpdateToOneWithWhereWithoutEntryRecordsInputObjectSchema: SchemaType = z
    .object({
        where: z.lazy(() => FingerprintBiometricWhereInputObjectSchema).optional(),
        data: z.union([
            z.lazy(() => FingerprintBiometricUpdateWithoutEntryRecordsInputObjectSchema),
            z.lazy(() => FingerprintBiometricUncheckedUpdateWithoutEntryRecordsInputObjectSchema),
        ]),
    })
    .strict() as SchemaType;
