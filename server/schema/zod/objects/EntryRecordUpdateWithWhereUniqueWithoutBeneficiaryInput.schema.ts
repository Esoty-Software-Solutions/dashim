/* eslint-disable */
import { z } from 'zod';
import { EntryRecordWhereUniqueInputObjectSchema } from './EntryRecordWhereUniqueInput.schema';
import { EntryRecordUpdateWithoutBeneficiaryInputObjectSchema } from './EntryRecordUpdateWithoutBeneficiaryInput.schema';
import { EntryRecordUncheckedUpdateWithoutBeneficiaryInputObjectSchema } from './EntryRecordUncheckedUpdateWithoutBeneficiaryInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.EntryRecordUpdateWithWhereUniqueWithoutBeneficiaryInput>;
export const EntryRecordUpdateWithWhereUniqueWithoutBeneficiaryInputObjectSchema: SchemaType = z
    .object({
        where: z.lazy(() => EntryRecordWhereUniqueInputObjectSchema),
        data: z.union([
            z.lazy(() => EntryRecordUpdateWithoutBeneficiaryInputObjectSchema),
            z.lazy(() => EntryRecordUncheckedUpdateWithoutBeneficiaryInputObjectSchema),
        ]),
    })
    .strict() as SchemaType;
