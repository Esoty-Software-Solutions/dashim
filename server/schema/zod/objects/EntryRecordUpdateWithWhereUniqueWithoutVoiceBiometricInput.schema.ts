/* eslint-disable */
import { z } from 'zod';
import { EntryRecordWhereUniqueInputObjectSchema } from './EntryRecordWhereUniqueInput.schema';
import { EntryRecordUpdateWithoutVoiceBiometricInputObjectSchema } from './EntryRecordUpdateWithoutVoiceBiometricInput.schema';
import { EntryRecordUncheckedUpdateWithoutVoiceBiometricInputObjectSchema } from './EntryRecordUncheckedUpdateWithoutVoiceBiometricInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.EntryRecordUpdateWithWhereUniqueWithoutVoiceBiometricInput>;
export const EntryRecordUpdateWithWhereUniqueWithoutVoiceBiometricInputObjectSchema: SchemaType = z
    .object({
        where: z.lazy(() => EntryRecordWhereUniqueInputObjectSchema),
        data: z.union([
            z.lazy(() => EntryRecordUpdateWithoutVoiceBiometricInputObjectSchema),
            z.lazy(() => EntryRecordUncheckedUpdateWithoutVoiceBiometricInputObjectSchema),
        ]),
    })
    .strict() as SchemaType;
