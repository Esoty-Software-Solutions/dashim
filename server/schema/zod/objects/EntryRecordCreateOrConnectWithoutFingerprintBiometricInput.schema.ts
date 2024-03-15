/* eslint-disable */
import { z } from 'zod';
import { EntryRecordWhereUniqueInputObjectSchema } from './EntryRecordWhereUniqueInput.schema';
import { EntryRecordCreateWithoutFingerprintBiometricInputObjectSchema } from './EntryRecordCreateWithoutFingerprintBiometricInput.schema';
import { EntryRecordUncheckedCreateWithoutFingerprintBiometricInputObjectSchema } from './EntryRecordUncheckedCreateWithoutFingerprintBiometricInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.EntryRecordCreateOrConnectWithoutFingerprintBiometricInput>;
export const EntryRecordCreateOrConnectWithoutFingerprintBiometricInputObjectSchema: SchemaType = z
    .object({
        where: z.lazy(() => EntryRecordWhereUniqueInputObjectSchema),
        create: z.union([
            z.lazy(() => EntryRecordCreateWithoutFingerprintBiometricInputObjectSchema),
            z.lazy(() => EntryRecordUncheckedCreateWithoutFingerprintBiometricInputObjectSchema),
        ]),
    })
    .strict() as SchemaType;
