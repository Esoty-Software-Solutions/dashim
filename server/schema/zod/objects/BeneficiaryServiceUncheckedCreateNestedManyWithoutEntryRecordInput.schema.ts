/* eslint-disable */
import { z } from 'zod';
import { BeneficiaryServiceCreateWithoutEntryRecordInputObjectSchema } from './BeneficiaryServiceCreateWithoutEntryRecordInput.schema';
import { BeneficiaryServiceUncheckedCreateWithoutEntryRecordInputObjectSchema } from './BeneficiaryServiceUncheckedCreateWithoutEntryRecordInput.schema';
import { BeneficiaryServiceCreateOrConnectWithoutEntryRecordInputObjectSchema } from './BeneficiaryServiceCreateOrConnectWithoutEntryRecordInput.schema';
import { BeneficiaryServiceCreateManyEntryRecordInputEnvelopeObjectSchema } from './BeneficiaryServiceCreateManyEntryRecordInputEnvelope.schema';
import { BeneficiaryServiceWhereUniqueInputObjectSchema } from './BeneficiaryServiceWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.BeneficiaryServiceUncheckedCreateNestedManyWithoutEntryRecordInput>;
export const BeneficiaryServiceUncheckedCreateNestedManyWithoutEntryRecordInputObjectSchema: SchemaType = z
    .object({
        create: z
            .union([
                z.lazy(() => BeneficiaryServiceCreateWithoutEntryRecordInputObjectSchema),
                z.lazy(() => BeneficiaryServiceCreateWithoutEntryRecordInputObjectSchema).array(),
                z.lazy(() => BeneficiaryServiceUncheckedCreateWithoutEntryRecordInputObjectSchema),
                z.lazy(() => BeneficiaryServiceUncheckedCreateWithoutEntryRecordInputObjectSchema).array(),
            ])
            .optional(),
        connectOrCreate: z
            .union([
                z.lazy(() => BeneficiaryServiceCreateOrConnectWithoutEntryRecordInputObjectSchema),
                z.lazy(() => BeneficiaryServiceCreateOrConnectWithoutEntryRecordInputObjectSchema).array(),
            ])
            .optional(),
        createMany: z.lazy(() => BeneficiaryServiceCreateManyEntryRecordInputEnvelopeObjectSchema).optional(),
        connect: z
            .union([
                z.lazy(() => BeneficiaryServiceWhereUniqueInputObjectSchema),
                z.lazy(() => BeneficiaryServiceWhereUniqueInputObjectSchema).array(),
            ])
            .optional(),
    })
    .strict() as SchemaType;
