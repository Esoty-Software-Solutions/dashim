/* eslint-disable */
import { z } from 'zod';
import { BeneficiaryCreateWithoutEntryRecordsInputObjectSchema } from './BeneficiaryCreateWithoutEntryRecordsInput.schema';
import { BeneficiaryUncheckedCreateWithoutEntryRecordsInputObjectSchema } from './BeneficiaryUncheckedCreateWithoutEntryRecordsInput.schema';
import { BeneficiaryCreateOrConnectWithoutEntryRecordsInputObjectSchema } from './BeneficiaryCreateOrConnectWithoutEntryRecordsInput.schema';
import { BeneficiaryUpsertWithoutEntryRecordsInputObjectSchema } from './BeneficiaryUpsertWithoutEntryRecordsInput.schema';
import { BeneficiaryWhereUniqueInputObjectSchema } from './BeneficiaryWhereUniqueInput.schema';
import { BeneficiaryUpdateToOneWithWhereWithoutEntryRecordsInputObjectSchema } from './BeneficiaryUpdateToOneWithWhereWithoutEntryRecordsInput.schema';
import { BeneficiaryUpdateWithoutEntryRecordsInputObjectSchema } from './BeneficiaryUpdateWithoutEntryRecordsInput.schema';
import { BeneficiaryUncheckedUpdateWithoutEntryRecordsInputObjectSchema } from './BeneficiaryUncheckedUpdateWithoutEntryRecordsInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.BeneficiaryUpdateOneRequiredWithoutEntryRecordsNestedInput>;
export const BeneficiaryUpdateOneRequiredWithoutEntryRecordsNestedInputObjectSchema: SchemaType = z
    .object({
        create: z
            .union([
                z.lazy(() => BeneficiaryCreateWithoutEntryRecordsInputObjectSchema),
                z.lazy(() => BeneficiaryUncheckedCreateWithoutEntryRecordsInputObjectSchema),
            ])
            .optional(),
        connectOrCreate: z.lazy(() => BeneficiaryCreateOrConnectWithoutEntryRecordsInputObjectSchema).optional(),
        upsert: z.lazy(() => BeneficiaryUpsertWithoutEntryRecordsInputObjectSchema).optional(),
        connect: z.lazy(() => BeneficiaryWhereUniqueInputObjectSchema).optional(),
        update: z
            .union([
                z.lazy(() => BeneficiaryUpdateToOneWithWhereWithoutEntryRecordsInputObjectSchema),
                z.lazy(() => BeneficiaryUpdateWithoutEntryRecordsInputObjectSchema),
                z.lazy(() => BeneficiaryUncheckedUpdateWithoutEntryRecordsInputObjectSchema),
            ])
            .optional(),
    })
    .strict() as SchemaType;
