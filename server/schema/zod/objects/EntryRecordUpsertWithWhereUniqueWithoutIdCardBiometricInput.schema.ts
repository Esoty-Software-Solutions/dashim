/* eslint-disable */
import { z } from 'zod';
import { EntryRecordWhereUniqueInputObjectSchema } from './EntryRecordWhereUniqueInput.schema';
import { EntryRecordUpdateWithoutIdCardBiometricInputObjectSchema } from './EntryRecordUpdateWithoutIdCardBiometricInput.schema';
import { EntryRecordUncheckedUpdateWithoutIdCardBiometricInputObjectSchema } from './EntryRecordUncheckedUpdateWithoutIdCardBiometricInput.schema';
import { EntryRecordCreateWithoutIdCardBiometricInputObjectSchema } from './EntryRecordCreateWithoutIdCardBiometricInput.schema';
import { EntryRecordUncheckedCreateWithoutIdCardBiometricInputObjectSchema } from './EntryRecordUncheckedCreateWithoutIdCardBiometricInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.EntryRecordUpsertWithWhereUniqueWithoutIdCardBiometricInput>;
export const EntryRecordUpsertWithWhereUniqueWithoutIdCardBiometricInputObjectSchema: SchemaType = z
    .object({
        where: z.lazy(() => EntryRecordWhereUniqueInputObjectSchema),
        update: z.union([
            z.lazy(() => EntryRecordUpdateWithoutIdCardBiometricInputObjectSchema),
            z.lazy(() => EntryRecordUncheckedUpdateWithoutIdCardBiometricInputObjectSchema),
        ]),
        create: z.union([
            z.lazy(() => EntryRecordCreateWithoutIdCardBiometricInputObjectSchema),
            z.lazy(() => EntryRecordUncheckedCreateWithoutIdCardBiometricInputObjectSchema),
        ]),
    })
    .strict() as SchemaType;
