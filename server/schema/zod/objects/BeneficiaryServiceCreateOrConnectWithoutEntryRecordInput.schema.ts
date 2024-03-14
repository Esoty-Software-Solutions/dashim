/* eslint-disable */
import { z } from 'zod';
import { BeneficiaryServiceWhereUniqueInputObjectSchema } from './BeneficiaryServiceWhereUniqueInput.schema';
import { BeneficiaryServiceCreateWithoutEntryRecordInputObjectSchema } from './BeneficiaryServiceCreateWithoutEntryRecordInput.schema';
import { BeneficiaryServiceUncheckedCreateWithoutEntryRecordInputObjectSchema } from './BeneficiaryServiceUncheckedCreateWithoutEntryRecordInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.BeneficiaryServiceCreateOrConnectWithoutEntryRecordInput>;
export const BeneficiaryServiceCreateOrConnectWithoutEntryRecordInputObjectSchema: SchemaType = z
    .object({
        where: z.lazy(() => BeneficiaryServiceWhereUniqueInputObjectSchema),
        create: z.union([
            z.lazy(() => BeneficiaryServiceCreateWithoutEntryRecordInputObjectSchema),
            z.lazy(() => BeneficiaryServiceUncheckedCreateWithoutEntryRecordInputObjectSchema),
        ]),
    })
    .strict() as SchemaType;
