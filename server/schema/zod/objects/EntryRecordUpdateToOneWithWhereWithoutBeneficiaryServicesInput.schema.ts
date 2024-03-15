/* eslint-disable */
import { z } from 'zod';
import { EntryRecordWhereInputObjectSchema } from './EntryRecordWhereInput.schema';
import { EntryRecordUpdateWithoutBeneficiaryServicesInputObjectSchema } from './EntryRecordUpdateWithoutBeneficiaryServicesInput.schema';
import { EntryRecordUncheckedUpdateWithoutBeneficiaryServicesInputObjectSchema } from './EntryRecordUncheckedUpdateWithoutBeneficiaryServicesInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.EntryRecordUpdateToOneWithWhereWithoutBeneficiaryServicesInput>;
export const EntryRecordUpdateToOneWithWhereWithoutBeneficiaryServicesInputObjectSchema: SchemaType = z
    .object({
        where: z.lazy(() => EntryRecordWhereInputObjectSchema).optional(),
        data: z.union([
            z.lazy(() => EntryRecordUpdateWithoutBeneficiaryServicesInputObjectSchema),
            z.lazy(() => EntryRecordUncheckedUpdateWithoutBeneficiaryServicesInputObjectSchema),
        ]),
    })
    .strict() as SchemaType;
