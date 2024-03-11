/* eslint-disable */
import { z } from 'zod';
import { EntryRecordCreateWithoutBeneficiaryInputObjectSchema } from './EntryRecordCreateWithoutBeneficiaryInput.schema';
import { EntryRecordUncheckedCreateWithoutBeneficiaryInputObjectSchema } from './EntryRecordUncheckedCreateWithoutBeneficiaryInput.schema';
import { EntryRecordCreateOrConnectWithoutBeneficiaryInputObjectSchema } from './EntryRecordCreateOrConnectWithoutBeneficiaryInput.schema';
import { EntryRecordUpsertWithWhereUniqueWithoutBeneficiaryInputObjectSchema } from './EntryRecordUpsertWithWhereUniqueWithoutBeneficiaryInput.schema';
import { EntryRecordCreateManyBeneficiaryInputEnvelopeObjectSchema } from './EntryRecordCreateManyBeneficiaryInputEnvelope.schema';
import { EntryRecordWhereUniqueInputObjectSchema } from './EntryRecordWhereUniqueInput.schema';
import { EntryRecordUpdateWithWhereUniqueWithoutBeneficiaryInputObjectSchema } from './EntryRecordUpdateWithWhereUniqueWithoutBeneficiaryInput.schema';
import { EntryRecordUpdateManyWithWhereWithoutBeneficiaryInputObjectSchema } from './EntryRecordUpdateManyWithWhereWithoutBeneficiaryInput.schema';
import { EntryRecordScalarWhereInputObjectSchema } from './EntryRecordScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.EntryRecordUpdateManyWithoutBeneficiaryNestedInput>;
export const EntryRecordUpdateManyWithoutBeneficiaryNestedInputObjectSchema: SchemaType = z
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
        upsert: z
            .union([
                z.lazy(() => EntryRecordUpsertWithWhereUniqueWithoutBeneficiaryInputObjectSchema),
                z.lazy(() => EntryRecordUpsertWithWhereUniqueWithoutBeneficiaryInputObjectSchema).array(),
            ])
            .optional(),
        createMany: z.lazy(() => EntryRecordCreateManyBeneficiaryInputEnvelopeObjectSchema).optional(),
        set: z
            .union([
                z.lazy(() => EntryRecordWhereUniqueInputObjectSchema),
                z.lazy(() => EntryRecordWhereUniqueInputObjectSchema).array(),
            ])
            .optional(),
        disconnect: z
            .union([
                z.lazy(() => EntryRecordWhereUniqueInputObjectSchema),
                z.lazy(() => EntryRecordWhereUniqueInputObjectSchema).array(),
            ])
            .optional(),
        delete: z
            .union([
                z.lazy(() => EntryRecordWhereUniqueInputObjectSchema),
                z.lazy(() => EntryRecordWhereUniqueInputObjectSchema).array(),
            ])
            .optional(),
        connect: z
            .union([
                z.lazy(() => EntryRecordWhereUniqueInputObjectSchema),
                z.lazy(() => EntryRecordWhereUniqueInputObjectSchema).array(),
            ])
            .optional(),
        update: z
            .union([
                z.lazy(() => EntryRecordUpdateWithWhereUniqueWithoutBeneficiaryInputObjectSchema),
                z.lazy(() => EntryRecordUpdateWithWhereUniqueWithoutBeneficiaryInputObjectSchema).array(),
            ])
            .optional(),
        updateMany: z
            .union([
                z.lazy(() => EntryRecordUpdateManyWithWhereWithoutBeneficiaryInputObjectSchema),
                z.lazy(() => EntryRecordUpdateManyWithWhereWithoutBeneficiaryInputObjectSchema).array(),
            ])
            .optional(),
        deleteMany: z
            .union([
                z.lazy(() => EntryRecordScalarWhereInputObjectSchema),
                z.lazy(() => EntryRecordScalarWhereInputObjectSchema).array(),
            ])
            .optional(),
    })
    .strict() as SchemaType;
