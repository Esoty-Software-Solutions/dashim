/* eslint-disable */
import { z } from 'zod';
import { EntryRecordScalarWhereInputObjectSchema } from './EntryRecordScalarWhereInput.schema';
import { EntryRecordUpdateManyMutationInputObjectSchema } from './EntryRecordUpdateManyMutationInput.schema';
import { EntryRecordUncheckedUpdateManyWithoutIdCardBiometricInputObjectSchema } from './EntryRecordUncheckedUpdateManyWithoutIdCardBiometricInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.EntryRecordUpdateManyWithWhereWithoutIdCardBiometricInput>;
export const EntryRecordUpdateManyWithWhereWithoutIdCardBiometricInputObjectSchema: SchemaType = z
    .object({
        where: z.lazy(() => EntryRecordScalarWhereInputObjectSchema),
        data: z.union([
            z.lazy(() => EntryRecordUpdateManyMutationInputObjectSchema),
            z.lazy(() => EntryRecordUncheckedUpdateManyWithoutIdCardBiometricInputObjectSchema),
        ]),
    })
    .strict() as SchemaType;
