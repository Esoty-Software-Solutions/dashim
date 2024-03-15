/* eslint-disable */
import { z } from 'zod';
import { BeneficiaryCreateWithoutEntryRecordsInputObjectSchema } from './BeneficiaryCreateWithoutEntryRecordsInput.schema';
import { BeneficiaryUncheckedCreateWithoutEntryRecordsInputObjectSchema } from './BeneficiaryUncheckedCreateWithoutEntryRecordsInput.schema';
import { BeneficiaryCreateOrConnectWithoutEntryRecordsInputObjectSchema } from './BeneficiaryCreateOrConnectWithoutEntryRecordsInput.schema';
import { BeneficiaryWhereUniqueInputObjectSchema } from './BeneficiaryWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.BeneficiaryCreateNestedOneWithoutEntryRecordsInput>;
export const BeneficiaryCreateNestedOneWithoutEntryRecordsInputObjectSchema: SchemaType = z
    .object({
        create: z
            .union([
                z.lazy(() => BeneficiaryCreateWithoutEntryRecordsInputObjectSchema),
                z.lazy(() => BeneficiaryUncheckedCreateWithoutEntryRecordsInputObjectSchema),
            ])
            .optional(),
        connectOrCreate: z.lazy(() => BeneficiaryCreateOrConnectWithoutEntryRecordsInputObjectSchema).optional(),
        connect: z.lazy(() => BeneficiaryWhereUniqueInputObjectSchema).optional(),
    })
    .strict() as SchemaType;
