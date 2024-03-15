/* eslint-disable */
import { z } from 'zod';
import { EntryRecordWhereUniqueInputObjectSchema } from './EntryRecordWhereUniqueInput.schema';
import { EntryRecordCreateWithoutIdCardBiometricInputObjectSchema } from './EntryRecordCreateWithoutIdCardBiometricInput.schema';
import { EntryRecordUncheckedCreateWithoutIdCardBiometricInputObjectSchema } from './EntryRecordUncheckedCreateWithoutIdCardBiometricInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.EntryRecordCreateOrConnectWithoutIdCardBiometricInput>;
export const EntryRecordCreateOrConnectWithoutIdCardBiometricInputObjectSchema: SchemaType = z
    .object({
        where: z.lazy(() => EntryRecordWhereUniqueInputObjectSchema),
        create: z.union([
            z.lazy(() => EntryRecordCreateWithoutIdCardBiometricInputObjectSchema),
            z.lazy(() => EntryRecordUncheckedCreateWithoutIdCardBiometricInputObjectSchema),
        ]),
    })
    .strict() as SchemaType;
