/* eslint-disable */
import { z } from 'zod';
import { EntryRecordWhereUniqueInputObjectSchema } from './EntryRecordWhereUniqueInput.schema';
import { EntryRecordCreateWithoutBeneficiaryInputObjectSchema } from './EntryRecordCreateWithoutBeneficiaryInput.schema';
import { EntryRecordUncheckedCreateWithoutBeneficiaryInputObjectSchema } from './EntryRecordUncheckedCreateWithoutBeneficiaryInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.EntryRecordCreateOrConnectWithoutBeneficiaryInput>;
export const EntryRecordCreateOrConnectWithoutBeneficiaryInputObjectSchema: SchemaType = z
    .object({
        where: z.lazy(() => EntryRecordWhereUniqueInputObjectSchema),
        create: z.union([
            z.lazy(() => EntryRecordCreateWithoutBeneficiaryInputObjectSchema),
            z.lazy(() => EntryRecordUncheckedCreateWithoutBeneficiaryInputObjectSchema),
        ]),
    })
    .strict() as SchemaType;
