/* eslint-disable */
import { z } from 'zod';
import { EntryRecordScalarWhereInputObjectSchema } from './EntryRecordScalarWhereInput.schema';
import { EntryRecordUpdateManyMutationInputObjectSchema } from './EntryRecordUpdateManyMutationInput.schema';
import { EntryRecordUncheckedUpdateManyWithoutFaceBiometricInputObjectSchema } from './EntryRecordUncheckedUpdateManyWithoutFaceBiometricInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.EntryRecordUpdateManyWithWhereWithoutFaceBiometricInput>;
export const EntryRecordUpdateManyWithWhereWithoutFaceBiometricInputObjectSchema: SchemaType = z
    .object({
        where: z.lazy(() => EntryRecordScalarWhereInputObjectSchema),
        data: z.union([
            z.lazy(() => EntryRecordUpdateManyMutationInputObjectSchema),
            z.lazy(() => EntryRecordUncheckedUpdateManyWithoutFaceBiometricInputObjectSchema),
        ]),
    })
    .strict() as SchemaType;
