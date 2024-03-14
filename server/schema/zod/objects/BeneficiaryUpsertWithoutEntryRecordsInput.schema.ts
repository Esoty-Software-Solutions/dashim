/* eslint-disable */
import { z } from 'zod';
import { BeneficiaryUpdateWithoutEntryRecordsInputObjectSchema } from './BeneficiaryUpdateWithoutEntryRecordsInput.schema';
import { BeneficiaryUncheckedUpdateWithoutEntryRecordsInputObjectSchema } from './BeneficiaryUncheckedUpdateWithoutEntryRecordsInput.schema';
import { BeneficiaryCreateWithoutEntryRecordsInputObjectSchema } from './BeneficiaryCreateWithoutEntryRecordsInput.schema';
import { BeneficiaryUncheckedCreateWithoutEntryRecordsInputObjectSchema } from './BeneficiaryUncheckedCreateWithoutEntryRecordsInput.schema';
import { BeneficiaryWhereInputObjectSchema } from './BeneficiaryWhereInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.BeneficiaryUpsertWithoutEntryRecordsInput>;
export const BeneficiaryUpsertWithoutEntryRecordsInputObjectSchema: SchemaType = z
    .object({
        update: z.union([
            z.lazy(() => BeneficiaryUpdateWithoutEntryRecordsInputObjectSchema),
            z.lazy(() => BeneficiaryUncheckedUpdateWithoutEntryRecordsInputObjectSchema),
        ]),
        create: z.union([
            z.lazy(() => BeneficiaryCreateWithoutEntryRecordsInputObjectSchema),
            z.lazy(() => BeneficiaryUncheckedCreateWithoutEntryRecordsInputObjectSchema),
        ]),
        where: z.lazy(() => BeneficiaryWhereInputObjectSchema).optional(),
    })
    .strict() as SchemaType;
