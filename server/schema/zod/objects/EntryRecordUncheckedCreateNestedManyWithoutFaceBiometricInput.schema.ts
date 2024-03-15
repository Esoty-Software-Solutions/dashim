/* eslint-disable */
import { z } from 'zod';
import { EntryRecordCreateWithoutFaceBiometricInputObjectSchema } from './EntryRecordCreateWithoutFaceBiometricInput.schema';
import { EntryRecordUncheckedCreateWithoutFaceBiometricInputObjectSchema } from './EntryRecordUncheckedCreateWithoutFaceBiometricInput.schema';
import { EntryRecordCreateOrConnectWithoutFaceBiometricInputObjectSchema } from './EntryRecordCreateOrConnectWithoutFaceBiometricInput.schema';
import { EntryRecordCreateManyFaceBiometricInputEnvelopeObjectSchema } from './EntryRecordCreateManyFaceBiometricInputEnvelope.schema';
import { EntryRecordWhereUniqueInputObjectSchema } from './EntryRecordWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.EntryRecordUncheckedCreateNestedManyWithoutFaceBiometricInput>;
export const EntryRecordUncheckedCreateNestedManyWithoutFaceBiometricInputObjectSchema: SchemaType = z
    .object({
        create: z
            .union([
                z.lazy(() => EntryRecordCreateWithoutFaceBiometricInputObjectSchema),
                z.lazy(() => EntryRecordCreateWithoutFaceBiometricInputObjectSchema).array(),
                z.lazy(() => EntryRecordUncheckedCreateWithoutFaceBiometricInputObjectSchema),
                z.lazy(() => EntryRecordUncheckedCreateWithoutFaceBiometricInputObjectSchema).array(),
            ])
            .optional(),
        connectOrCreate: z
            .union([
                z.lazy(() => EntryRecordCreateOrConnectWithoutFaceBiometricInputObjectSchema),
                z.lazy(() => EntryRecordCreateOrConnectWithoutFaceBiometricInputObjectSchema).array(),
            ])
            .optional(),
        createMany: z.lazy(() => EntryRecordCreateManyFaceBiometricInputEnvelopeObjectSchema).optional(),
        connect: z
            .union([
                z.lazy(() => EntryRecordWhereUniqueInputObjectSchema),
                z.lazy(() => EntryRecordWhereUniqueInputObjectSchema).array(),
            ])
            .optional(),
    })
    .strict() as SchemaType;
