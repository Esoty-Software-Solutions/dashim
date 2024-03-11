/* eslint-disable */
import { z } from 'zod';
import { EntryRecordWhereUniqueInputObjectSchema } from './EntryRecordWhereUniqueInput.schema';
import { EntryRecordUpdateWithoutFaceBiometricInputObjectSchema } from './EntryRecordUpdateWithoutFaceBiometricInput.schema';
import { EntryRecordUncheckedUpdateWithoutFaceBiometricInputObjectSchema } from './EntryRecordUncheckedUpdateWithoutFaceBiometricInput.schema';
import { EntryRecordCreateWithoutFaceBiometricInputObjectSchema } from './EntryRecordCreateWithoutFaceBiometricInput.schema';
import { EntryRecordUncheckedCreateWithoutFaceBiometricInputObjectSchema } from './EntryRecordUncheckedCreateWithoutFaceBiometricInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.EntryRecordUpsertWithWhereUniqueWithoutFaceBiometricInput>;
export const EntryRecordUpsertWithWhereUniqueWithoutFaceBiometricInputObjectSchema: SchemaType = z
    .object({
        where: z.lazy(() => EntryRecordWhereUniqueInputObjectSchema),
        update: z.union([
            z.lazy(() => EntryRecordUpdateWithoutFaceBiometricInputObjectSchema),
            z.lazy(() => EntryRecordUncheckedUpdateWithoutFaceBiometricInputObjectSchema),
        ]),
        create: z.union([
            z.lazy(() => EntryRecordCreateWithoutFaceBiometricInputObjectSchema),
            z.lazy(() => EntryRecordUncheckedCreateWithoutFaceBiometricInputObjectSchema),
        ]),
    })
    .strict() as SchemaType;
