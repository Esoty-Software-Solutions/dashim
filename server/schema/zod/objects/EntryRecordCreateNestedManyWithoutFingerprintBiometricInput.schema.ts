/* eslint-disable */
import { z } from 'zod';
import { EntryRecordCreateWithoutFingerprintBiometricInputObjectSchema } from './EntryRecordCreateWithoutFingerprintBiometricInput.schema';
import { EntryRecordUncheckedCreateWithoutFingerprintBiometricInputObjectSchema } from './EntryRecordUncheckedCreateWithoutFingerprintBiometricInput.schema';
import { EntryRecordCreateOrConnectWithoutFingerprintBiometricInputObjectSchema } from './EntryRecordCreateOrConnectWithoutFingerprintBiometricInput.schema';
import { EntryRecordCreateManyFingerprintBiometricInputEnvelopeObjectSchema } from './EntryRecordCreateManyFingerprintBiometricInputEnvelope.schema';
import { EntryRecordWhereUniqueInputObjectSchema } from './EntryRecordWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.EntryRecordCreateNestedManyWithoutFingerprintBiometricInput>;
export const EntryRecordCreateNestedManyWithoutFingerprintBiometricInputObjectSchema: SchemaType = z
    .object({
        create: z
            .union([
                z.lazy(() => EntryRecordCreateWithoutFingerprintBiometricInputObjectSchema),
                z.lazy(() => EntryRecordCreateWithoutFingerprintBiometricInputObjectSchema).array(),
                z.lazy(() => EntryRecordUncheckedCreateWithoutFingerprintBiometricInputObjectSchema),
                z.lazy(() => EntryRecordUncheckedCreateWithoutFingerprintBiometricInputObjectSchema).array(),
            ])
            .optional(),
        connectOrCreate: z
            .union([
                z.lazy(() => EntryRecordCreateOrConnectWithoutFingerprintBiometricInputObjectSchema),
                z.lazy(() => EntryRecordCreateOrConnectWithoutFingerprintBiometricInputObjectSchema).array(),
            ])
            .optional(),
        createMany: z.lazy(() => EntryRecordCreateManyFingerprintBiometricInputEnvelopeObjectSchema).optional(),
        connect: z
            .union([
                z.lazy(() => EntryRecordWhereUniqueInputObjectSchema),
                z.lazy(() => EntryRecordWhereUniqueInputObjectSchema).array(),
            ])
            .optional(),
    })
    .strict() as SchemaType;
