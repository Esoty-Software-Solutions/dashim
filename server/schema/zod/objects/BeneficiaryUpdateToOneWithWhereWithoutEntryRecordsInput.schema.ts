/* eslint-disable */
import { z } from 'zod';
import { BeneficiaryWhereInputObjectSchema } from './BeneficiaryWhereInput.schema';
import { BeneficiaryUpdateWithoutEntryRecordsInputObjectSchema } from './BeneficiaryUpdateWithoutEntryRecordsInput.schema';
import { BeneficiaryUncheckedUpdateWithoutEntryRecordsInputObjectSchema } from './BeneficiaryUncheckedUpdateWithoutEntryRecordsInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.BeneficiaryUpdateToOneWithWhereWithoutEntryRecordsInput>;
export const BeneficiaryUpdateToOneWithWhereWithoutEntryRecordsInputObjectSchema: SchemaType = z
    .object({
        where: z.lazy(() => BeneficiaryWhereInputObjectSchema).optional(),
        data: z.union([
            z.lazy(() => BeneficiaryUpdateWithoutEntryRecordsInputObjectSchema),
            z.lazy(() => BeneficiaryUncheckedUpdateWithoutEntryRecordsInputObjectSchema),
        ]),
    })
    .strict() as SchemaType;
