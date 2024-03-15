/* eslint-disable */
import { z } from 'zod';
import { EntryRecordWhereUniqueInputObjectSchema } from './EntryRecordWhereUniqueInput.schema';
import { EntryRecordUpdateWithoutVoiceBiometricInputObjectSchema } from './EntryRecordUpdateWithoutVoiceBiometricInput.schema';
import { EntryRecordUncheckedUpdateWithoutVoiceBiometricInputObjectSchema } from './EntryRecordUncheckedUpdateWithoutVoiceBiometricInput.schema';
import { EntryRecordCreateWithoutVoiceBiometricInputObjectSchema } from './EntryRecordCreateWithoutVoiceBiometricInput.schema';
import { EntryRecordUncheckedCreateWithoutVoiceBiometricInputObjectSchema } from './EntryRecordUncheckedCreateWithoutVoiceBiometricInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.EntryRecordUpsertWithWhereUniqueWithoutVoiceBiometricInput>;
export const EntryRecordUpsertWithWhereUniqueWithoutVoiceBiometricInputObjectSchema: SchemaType = z
    .object({
        where: z.lazy(() => EntryRecordWhereUniqueInputObjectSchema),
        update: z.union([
            z.lazy(() => EntryRecordUpdateWithoutVoiceBiometricInputObjectSchema),
            z.lazy(() => EntryRecordUncheckedUpdateWithoutVoiceBiometricInputObjectSchema),
        ]),
        create: z.union([
            z.lazy(() => EntryRecordCreateWithoutVoiceBiometricInputObjectSchema),
            z.lazy(() => EntryRecordUncheckedCreateWithoutVoiceBiometricInputObjectSchema),
        ]),
    })
    .strict() as SchemaType;
