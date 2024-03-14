/* eslint-disable */
import { z } from 'zod';
import { FaceBiometricWhereInputObjectSchema } from './FaceBiometricWhereInput.schema';
import { FaceBiometricUpdateWithoutEntryRecordsInputObjectSchema } from './FaceBiometricUpdateWithoutEntryRecordsInput.schema';
import { FaceBiometricUncheckedUpdateWithoutEntryRecordsInputObjectSchema } from './FaceBiometricUncheckedUpdateWithoutEntryRecordsInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.FaceBiometricUpdateToOneWithWhereWithoutEntryRecordsInput>;
export const FaceBiometricUpdateToOneWithWhereWithoutEntryRecordsInputObjectSchema: SchemaType = z
    .object({
        where: z.lazy(() => FaceBiometricWhereInputObjectSchema).optional(),
        data: z.union([
            z.lazy(() => FaceBiometricUpdateWithoutEntryRecordsInputObjectSchema),
            z.lazy(() => FaceBiometricUncheckedUpdateWithoutEntryRecordsInputObjectSchema),
        ]),
    })
    .strict() as SchemaType;
