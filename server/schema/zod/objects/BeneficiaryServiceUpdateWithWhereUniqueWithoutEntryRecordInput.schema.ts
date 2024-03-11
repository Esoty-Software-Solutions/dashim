/* eslint-disable */
import { z } from 'zod';
import { BeneficiaryServiceWhereUniqueInputObjectSchema } from './BeneficiaryServiceWhereUniqueInput.schema';
import { BeneficiaryServiceUpdateWithoutEntryRecordInputObjectSchema } from './BeneficiaryServiceUpdateWithoutEntryRecordInput.schema';
import { BeneficiaryServiceUncheckedUpdateWithoutEntryRecordInputObjectSchema } from './BeneficiaryServiceUncheckedUpdateWithoutEntryRecordInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.BeneficiaryServiceUpdateWithWhereUniqueWithoutEntryRecordInput>;
export const BeneficiaryServiceUpdateWithWhereUniqueWithoutEntryRecordInputObjectSchema: SchemaType = z
    .object({
        where: z.lazy(() => BeneficiaryServiceWhereUniqueInputObjectSchema),
        data: z.union([
            z.lazy(() => BeneficiaryServiceUpdateWithoutEntryRecordInputObjectSchema),
            z.lazy(() => BeneficiaryServiceUncheckedUpdateWithoutEntryRecordInputObjectSchema),
        ]),
    })
    .strict() as SchemaType;
