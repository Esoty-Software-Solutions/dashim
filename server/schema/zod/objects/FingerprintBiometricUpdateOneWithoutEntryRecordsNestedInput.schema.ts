/* eslint-disable */
import { z } from 'zod';
import { FingerprintBiometricCreateWithoutEntryRecordsInputObjectSchema } from './FingerprintBiometricCreateWithoutEntryRecordsInput.schema';
import { FingerprintBiometricUncheckedCreateWithoutEntryRecordsInputObjectSchema } from './FingerprintBiometricUncheckedCreateWithoutEntryRecordsInput.schema';
import { FingerprintBiometricCreateOrConnectWithoutEntryRecordsInputObjectSchema } from './FingerprintBiometricCreateOrConnectWithoutEntryRecordsInput.schema';
import { FingerprintBiometricUpsertWithoutEntryRecordsInputObjectSchema } from './FingerprintBiometricUpsertWithoutEntryRecordsInput.schema';
import { FingerprintBiometricWhereInputObjectSchema } from './FingerprintBiometricWhereInput.schema';
import { FingerprintBiometricWhereUniqueInputObjectSchema } from './FingerprintBiometricWhereUniqueInput.schema';
import { FingerprintBiometricUpdateToOneWithWhereWithoutEntryRecordsInputObjectSchema } from './FingerprintBiometricUpdateToOneWithWhereWithoutEntryRecordsInput.schema';
import { FingerprintBiometricUpdateWithoutEntryRecordsInputObjectSchema } from './FingerprintBiometricUpdateWithoutEntryRecordsInput.schema';
import { FingerprintBiometricUncheckedUpdateWithoutEntryRecordsInputObjectSchema } from './FingerprintBiometricUncheckedUpdateWithoutEntryRecordsInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.FingerprintBiometricUpdateOneWithoutEntryRecordsNestedInput>;
export const FingerprintBiometricUpdateOneWithoutEntryRecordsNestedInputObjectSchema: SchemaType = z
    .object({
        create: z
            .union([
                z.lazy(() => FingerprintBiometricCreateWithoutEntryRecordsInputObjectSchema),
                z.lazy(() => FingerprintBiometricUncheckedCreateWithoutEntryRecordsInputObjectSchema),
            ])
            .optional(),
        connectOrCreate: z
            .lazy(() => FingerprintBiometricCreateOrConnectWithoutEntryRecordsInputObjectSchema)
            .optional(),
        upsert: z.lazy(() => FingerprintBiometricUpsertWithoutEntryRecordsInputObjectSchema).optional(),
        disconnect: z.union([z.boolean(), z.lazy(() => FingerprintBiometricWhereInputObjectSchema)]).optional(),
        delete: z.union([z.boolean(), z.lazy(() => FingerprintBiometricWhereInputObjectSchema)]).optional(),
        connect: z.lazy(() => FingerprintBiometricWhereUniqueInputObjectSchema).optional(),
        update: z
            .union([
                z.lazy(() => FingerprintBiometricUpdateToOneWithWhereWithoutEntryRecordsInputObjectSchema),
                z.lazy(() => FingerprintBiometricUpdateWithoutEntryRecordsInputObjectSchema),
                z.lazy(() => FingerprintBiometricUncheckedUpdateWithoutEntryRecordsInputObjectSchema),
            ])
            .optional(),
    })
    .strict() as SchemaType;
