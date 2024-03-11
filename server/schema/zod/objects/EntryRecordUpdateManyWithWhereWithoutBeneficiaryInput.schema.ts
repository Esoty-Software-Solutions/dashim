/* eslint-disable */
import { z } from 'zod';
import { EntryRecordScalarWhereInputObjectSchema } from './EntryRecordScalarWhereInput.schema';
import { EntryRecordUpdateManyMutationInputObjectSchema } from './EntryRecordUpdateManyMutationInput.schema';
import { EntryRecordUncheckedUpdateManyWithoutBeneficiaryInputObjectSchema } from './EntryRecordUncheckedUpdateManyWithoutBeneficiaryInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.EntryRecordUpdateManyWithWhereWithoutBeneficiaryInput>;
export const EntryRecordUpdateManyWithWhereWithoutBeneficiaryInputObjectSchema: SchemaType = z
    .object({
        where: z.lazy(() => EntryRecordScalarWhereInputObjectSchema),
        data: z.union([
            z.lazy(() => EntryRecordUpdateManyMutationInputObjectSchema),
            z.lazy(() => EntryRecordUncheckedUpdateManyWithoutBeneficiaryInputObjectSchema),
        ]),
    })
    .strict() as SchemaType;
