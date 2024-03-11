/* eslint-disable */
import { z } from 'zod';
import { FaceBiometricUpdateWithoutEntryRecordsInputObjectSchema } from './FaceBiometricUpdateWithoutEntryRecordsInput.schema';
import { FaceBiometricUncheckedUpdateWithoutEntryRecordsInputObjectSchema } from './FaceBiometricUncheckedUpdateWithoutEntryRecordsInput.schema';
import { FaceBiometricCreateWithoutEntryRecordsInputObjectSchema } from './FaceBiometricCreateWithoutEntryRecordsInput.schema';
import { FaceBiometricUncheckedCreateWithoutEntryRecordsInputObjectSchema } from './FaceBiometricUncheckedCreateWithoutEntryRecordsInput.schema';
import { FaceBiometricWhereInputObjectSchema } from './FaceBiometricWhereInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.FaceBiometricUpsertWithoutEntryRecordsInput>;
export const FaceBiometricUpsertWithoutEntryRecordsInputObjectSchema: SchemaType = z
    .object({
        update: z.union([
            z.lazy(() => FaceBiometricUpdateWithoutEntryRecordsInputObjectSchema),
            z.lazy(() => FaceBiometricUncheckedUpdateWithoutEntryRecordsInputObjectSchema),
        ]),
        create: z.union([
            z.lazy(() => FaceBiometricCreateWithoutEntryRecordsInputObjectSchema),
            z.lazy(() => FaceBiometricUncheckedCreateWithoutEntryRecordsInputObjectSchema),
        ]),
        where: z.lazy(() => FaceBiometricWhereInputObjectSchema).optional(),
    })
    .strict() as SchemaType;
