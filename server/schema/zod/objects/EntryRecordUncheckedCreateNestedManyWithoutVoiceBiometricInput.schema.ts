/* eslint-disable */
import { z } from 'zod';
import { EntryRecordCreateWithoutVoiceBiometricInputObjectSchema } from './EntryRecordCreateWithoutVoiceBiometricInput.schema';
import { EntryRecordUncheckedCreateWithoutVoiceBiometricInputObjectSchema } from './EntryRecordUncheckedCreateWithoutVoiceBiometricInput.schema';
import { EntryRecordCreateOrConnectWithoutVoiceBiometricInputObjectSchema } from './EntryRecordCreateOrConnectWithoutVoiceBiometricInput.schema';
import { EntryRecordCreateManyVoiceBiometricInputEnvelopeObjectSchema } from './EntryRecordCreateManyVoiceBiometricInputEnvelope.schema';
import { EntryRecordWhereUniqueInputObjectSchema } from './EntryRecordWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.EntryRecordUncheckedCreateNestedManyWithoutVoiceBiometricInput>;
export const EntryRecordUncheckedCreateNestedManyWithoutVoiceBiometricInputObjectSchema: SchemaType = z
    .object({
        create: z
            .union([
                z.lazy(() => EntryRecordCreateWithoutVoiceBiometricInputObjectSchema),
                z.lazy(() => EntryRecordCreateWithoutVoiceBiometricInputObjectSchema).array(),
                z.lazy(() => EntryRecordUncheckedCreateWithoutVoiceBiometricInputObjectSchema),
                z.lazy(() => EntryRecordUncheckedCreateWithoutVoiceBiometricInputObjectSchema).array(),
            ])
            .optional(),
        connectOrCreate: z
            .union([
                z.lazy(() => EntryRecordCreateOrConnectWithoutVoiceBiometricInputObjectSchema),
                z.lazy(() => EntryRecordCreateOrConnectWithoutVoiceBiometricInputObjectSchema).array(),
            ])
            .optional(),
        createMany: z.lazy(() => EntryRecordCreateManyVoiceBiometricInputEnvelopeObjectSchema).optional(),
        connect: z
            .union([
                z.lazy(() => EntryRecordWhereUniqueInputObjectSchema),
                z.lazy(() => EntryRecordWhereUniqueInputObjectSchema).array(),
            ])
            .optional(),
    })
    .strict() as SchemaType;
