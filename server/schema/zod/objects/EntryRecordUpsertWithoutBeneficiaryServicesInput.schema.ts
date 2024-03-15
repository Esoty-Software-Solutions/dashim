/* eslint-disable */
import { z } from 'zod';
import { EntryRecordUpdateWithoutBeneficiaryServicesInputObjectSchema } from './EntryRecordUpdateWithoutBeneficiaryServicesInput.schema';
import { EntryRecordUncheckedUpdateWithoutBeneficiaryServicesInputObjectSchema } from './EntryRecordUncheckedUpdateWithoutBeneficiaryServicesInput.schema';
import { EntryRecordCreateWithoutBeneficiaryServicesInputObjectSchema } from './EntryRecordCreateWithoutBeneficiaryServicesInput.schema';
import { EntryRecordUncheckedCreateWithoutBeneficiaryServicesInputObjectSchema } from './EntryRecordUncheckedCreateWithoutBeneficiaryServicesInput.schema';
import { EntryRecordWhereInputObjectSchema } from './EntryRecordWhereInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.EntryRecordUpsertWithoutBeneficiaryServicesInput>;
export const EntryRecordUpsertWithoutBeneficiaryServicesInputObjectSchema: SchemaType = z
    .object({
        update: z.union([
            z.lazy(() => EntryRecordUpdateWithoutBeneficiaryServicesInputObjectSchema),
            z.lazy(() => EntryRecordUncheckedUpdateWithoutBeneficiaryServicesInputObjectSchema),
        ]),
        create: z.union([
            z.lazy(() => EntryRecordCreateWithoutBeneficiaryServicesInputObjectSchema),
            z.lazy(() => EntryRecordUncheckedCreateWithoutBeneficiaryServicesInputObjectSchema),
        ]),
        where: z.lazy(() => EntryRecordWhereInputObjectSchema).optional(),
    })
    .strict() as SchemaType;
