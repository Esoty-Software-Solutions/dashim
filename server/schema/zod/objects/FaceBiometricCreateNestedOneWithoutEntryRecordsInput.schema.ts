/* eslint-disable */
import { z } from 'zod';
import { FaceBiometricCreateWithoutEntryRecordsInputObjectSchema } from './FaceBiometricCreateWithoutEntryRecordsInput.schema';
import { FaceBiometricUncheckedCreateWithoutEntryRecordsInputObjectSchema } from './FaceBiometricUncheckedCreateWithoutEntryRecordsInput.schema';
import { FaceBiometricCreateOrConnectWithoutEntryRecordsInputObjectSchema } from './FaceBiometricCreateOrConnectWithoutEntryRecordsInput.schema';
import { FaceBiometricWhereUniqueInputObjectSchema } from './FaceBiometricWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.FaceBiometricCreateNestedOneWithoutEntryRecordsInput>;
export const FaceBiometricCreateNestedOneWithoutEntryRecordsInputObjectSchema: SchemaType = z
    .object({
        create: z
            .union([
                z.lazy(() => FaceBiometricCreateWithoutEntryRecordsInputObjectSchema),
                z.lazy(() => FaceBiometricUncheckedCreateWithoutEntryRecordsInputObjectSchema),
            ])
            .optional(),
        connectOrCreate: z.lazy(() => FaceBiometricCreateOrConnectWithoutEntryRecordsInputObjectSchema).optional(),
        connect: z.lazy(() => FaceBiometricWhereUniqueInputObjectSchema).optional(),
    })
    .strict() as SchemaType;
