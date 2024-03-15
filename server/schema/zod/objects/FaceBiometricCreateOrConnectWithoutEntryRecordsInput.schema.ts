/* eslint-disable */
import { z } from 'zod';
import { FaceBiometricWhereUniqueInputObjectSchema } from './FaceBiometricWhereUniqueInput.schema';
import { FaceBiometricCreateWithoutEntryRecordsInputObjectSchema } from './FaceBiometricCreateWithoutEntryRecordsInput.schema';
import { FaceBiometricUncheckedCreateWithoutEntryRecordsInputObjectSchema } from './FaceBiometricUncheckedCreateWithoutEntryRecordsInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.FaceBiometricCreateOrConnectWithoutEntryRecordsInput>;
export const FaceBiometricCreateOrConnectWithoutEntryRecordsInputObjectSchema: SchemaType = z
    .object({
        where: z.lazy(() => FaceBiometricWhereUniqueInputObjectSchema),
        create: z.union([
            z.lazy(() => FaceBiometricCreateWithoutEntryRecordsInputObjectSchema),
            z.lazy(() => FaceBiometricUncheckedCreateWithoutEntryRecordsInputObjectSchema),
        ]),
    })
    .strict() as SchemaType;
