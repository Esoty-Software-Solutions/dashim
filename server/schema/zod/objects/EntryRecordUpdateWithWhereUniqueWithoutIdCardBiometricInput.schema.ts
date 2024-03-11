/* eslint-disable */
import { z } from 'zod';
import { EntryRecordWhereUniqueInputObjectSchema } from './EntryRecordWhereUniqueInput.schema';
import { EntryRecordUpdateWithoutIdCardBiometricInputObjectSchema } from './EntryRecordUpdateWithoutIdCardBiometricInput.schema';
import { EntryRecordUncheckedUpdateWithoutIdCardBiometricInputObjectSchema } from './EntryRecordUncheckedUpdateWithoutIdCardBiometricInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.EntryRecordUpdateWithWhereUniqueWithoutIdCardBiometricInput>;
export const EntryRecordUpdateWithWhereUniqueWithoutIdCardBiometricInputObjectSchema: SchemaType = z
    .object({
        where: z.lazy(() => EntryRecordWhereUniqueInputObjectSchema),
        data: z.union([
            z.lazy(() => EntryRecordUpdateWithoutIdCardBiometricInputObjectSchema),
            z.lazy(() => EntryRecordUncheckedUpdateWithoutIdCardBiometricInputObjectSchema),
        ]),
    })
    .strict() as SchemaType;
