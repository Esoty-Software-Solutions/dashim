/* eslint-disable */
import { z } from 'zod';
import { EntryRecordWhereUniqueInputObjectSchema } from './EntryRecordWhereUniqueInput.schema';
import { EntryRecordUpdateWithoutFingerprintBiometricInputObjectSchema } from './EntryRecordUpdateWithoutFingerprintBiometricInput.schema';
import { EntryRecordUncheckedUpdateWithoutFingerprintBiometricInputObjectSchema } from './EntryRecordUncheckedUpdateWithoutFingerprintBiometricInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.EntryRecordUpdateWithWhereUniqueWithoutFingerprintBiometricInput>;
export const EntryRecordUpdateWithWhereUniqueWithoutFingerprintBiometricInputObjectSchema: SchemaType = z
    .object({
        where: z.lazy(() => EntryRecordWhereUniqueInputObjectSchema),
        data: z.union([
            z.lazy(() => EntryRecordUpdateWithoutFingerprintBiometricInputObjectSchema),
            z.lazy(() => EntryRecordUncheckedUpdateWithoutFingerprintBiometricInputObjectSchema),
        ]),
    })
    .strict() as SchemaType;
