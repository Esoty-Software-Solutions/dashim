/* eslint-disable */
import { z } from 'zod';
import { EntryRecordCreateWithoutBeneficiaryInputObjectSchema } from './EntryRecordCreateWithoutBeneficiaryInput.schema';
import { EntryRecordUncheckedCreateWithoutBeneficiaryInputObjectSchema } from './EntryRecordUncheckedCreateWithoutBeneficiaryInput.schema';
import { EntryRecordCreateOrConnectWithoutBeneficiaryInputObjectSchema } from './EntryRecordCreateOrConnectWithoutBeneficiaryInput.schema';
import { EntryRecordCreateManyBeneficiaryInputEnvelopeObjectSchema } from './EntryRecordCreateManyBeneficiaryInputEnvelope.schema';
import { EntryRecordWhereUniqueInputObjectSchema } from './EntryRecordWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.EntryRecordCreateNestedManyWithoutBeneficiaryInput>;
export const EntryRecordCreateNestedManyWithoutBeneficiaryInputObjectSchema: SchemaType = z
    .object({
        create: z
            .union([
                z.lazy(() => EntryRecordCreateWithoutBeneficiaryInputObjectSchema),
                z.lazy(() => EntryRecordCreateWithoutBeneficiaryInputObjectSchema).array(),
                z.lazy(() => EntryRecordUncheckedCreateWithoutBeneficiaryInputObjectSchema),
                z.lazy(() => EntryRecordUncheckedCreateWithoutBeneficiaryInputObjectSchema).array(),
            ])
            .optional(),
        connectOrCreate: z
            .union([
                z.lazy(() => EntryRecordCreateOrConnectWithoutBeneficiaryInputObjectSchema),
                z.lazy(() => EntryRecordCreateOrConnectWithoutBeneficiaryInputObjectSchema).array(),
            ])
            .optional(),
        createMany: z.lazy(() => EntryRecordCreateManyBeneficiaryInputEnvelopeObjectSchema).optional(),
        connect: z
            .union([
                z.lazy(() => EntryRecordWhereUniqueInputObjectSchema),
                z.lazy(() => EntryRecordWhereUniqueInputObjectSchema).array(),
            ])
            .optional(),
    })
    .strict() as SchemaType;
