/* eslint-disable */
import { z } from 'zod';
import { EntryRecordCreateWithoutBeneficiaryServicesInputObjectSchema } from './EntryRecordCreateWithoutBeneficiaryServicesInput.schema';
import { EntryRecordUncheckedCreateWithoutBeneficiaryServicesInputObjectSchema } from './EntryRecordUncheckedCreateWithoutBeneficiaryServicesInput.schema';
import { EntryRecordCreateOrConnectWithoutBeneficiaryServicesInputObjectSchema } from './EntryRecordCreateOrConnectWithoutBeneficiaryServicesInput.schema';
import { EntryRecordWhereUniqueInputObjectSchema } from './EntryRecordWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.EntryRecordCreateNestedOneWithoutBeneficiaryServicesInput>;
export const EntryRecordCreateNestedOneWithoutBeneficiaryServicesInputObjectSchema: SchemaType = z
    .object({
        create: z
            .union([
                z.lazy(() => EntryRecordCreateWithoutBeneficiaryServicesInputObjectSchema),
                z.lazy(() => EntryRecordUncheckedCreateWithoutBeneficiaryServicesInputObjectSchema),
            ])
            .optional(),
        connectOrCreate: z.lazy(() => EntryRecordCreateOrConnectWithoutBeneficiaryServicesInputObjectSchema).optional(),
        connect: z.lazy(() => EntryRecordWhereUniqueInputObjectSchema).optional(),
    })
    .strict() as SchemaType;
