/* eslint-disable */
import { z } from 'zod';
import { EntryRecordWhereUniqueInputObjectSchema } from './EntryRecordWhereUniqueInput.schema';
import { EntryRecordCreateWithoutVoiceBiometricInputObjectSchema } from './EntryRecordCreateWithoutVoiceBiometricInput.schema';
import { EntryRecordUncheckedCreateWithoutVoiceBiometricInputObjectSchema } from './EntryRecordUncheckedCreateWithoutVoiceBiometricInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.EntryRecordCreateOrConnectWithoutVoiceBiometricInput>;
export const EntryRecordCreateOrConnectWithoutVoiceBiometricInputObjectSchema: SchemaType = z
    .object({
        where: z.lazy(() => EntryRecordWhereUniqueInputObjectSchema),
        create: z.union([
            z.lazy(() => EntryRecordCreateWithoutVoiceBiometricInputObjectSchema),
            z.lazy(() => EntryRecordUncheckedCreateWithoutVoiceBiometricInputObjectSchema),
        ]),
    })
    .strict() as SchemaType;
