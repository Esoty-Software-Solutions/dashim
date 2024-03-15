/* eslint-disable */
import { z } from 'zod';
import { EntryRecordWhereUniqueInputObjectSchema } from './EntryRecordWhereUniqueInput.schema';
import { EntryRecordUpdateWithoutFaceBiometricInputObjectSchema } from './EntryRecordUpdateWithoutFaceBiometricInput.schema';
import { EntryRecordUncheckedUpdateWithoutFaceBiometricInputObjectSchema } from './EntryRecordUncheckedUpdateWithoutFaceBiometricInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.EntryRecordUpdateWithWhereUniqueWithoutFaceBiometricInput>;
export const EntryRecordUpdateWithWhereUniqueWithoutFaceBiometricInputObjectSchema: SchemaType = z
    .object({
        where: z.lazy(() => EntryRecordWhereUniqueInputObjectSchema),
        data: z.union([
            z.lazy(() => EntryRecordUpdateWithoutFaceBiometricInputObjectSchema),
            z.lazy(() => EntryRecordUncheckedUpdateWithoutFaceBiometricInputObjectSchema),
        ]),
    })
    .strict() as SchemaType;
