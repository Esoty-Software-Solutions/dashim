/* eslint-disable */
import { z } from 'zod';
import { BeneficiaryBalanceCreateWithoutBeneficiaryInputObjectSchema } from './BeneficiaryBalanceCreateWithoutBeneficiaryInput.schema';
import { BeneficiaryBalanceUncheckedCreateWithoutBeneficiaryInputObjectSchema } from './BeneficiaryBalanceUncheckedCreateWithoutBeneficiaryInput.schema';
import { BeneficiaryBalanceCreateOrConnectWithoutBeneficiaryInputObjectSchema } from './BeneficiaryBalanceCreateOrConnectWithoutBeneficiaryInput.schema';
import { BeneficiaryBalanceUpsertWithWhereUniqueWithoutBeneficiaryInputObjectSchema } from './BeneficiaryBalanceUpsertWithWhereUniqueWithoutBeneficiaryInput.schema';
import { BeneficiaryBalanceCreateManyBeneficiaryInputEnvelopeObjectSchema } from './BeneficiaryBalanceCreateManyBeneficiaryInputEnvelope.schema';
import { BeneficiaryBalanceWhereUniqueInputObjectSchema } from './BeneficiaryBalanceWhereUniqueInput.schema';
import { BeneficiaryBalanceUpdateWithWhereUniqueWithoutBeneficiaryInputObjectSchema } from './BeneficiaryBalanceUpdateWithWhereUniqueWithoutBeneficiaryInput.schema';
import { BeneficiaryBalanceUpdateManyWithWhereWithoutBeneficiaryInputObjectSchema } from './BeneficiaryBalanceUpdateManyWithWhereWithoutBeneficiaryInput.schema';
import { BeneficiaryBalanceScalarWhereInputObjectSchema } from './BeneficiaryBalanceScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.BeneficiaryBalanceUncheckedUpdateManyWithoutBeneficiaryNestedInput>;
export const BeneficiaryBalanceUncheckedUpdateManyWithoutBeneficiaryNestedInputObjectSchema: SchemaType = z
    .object({
        create: z
            .union([
                z.lazy(() => BeneficiaryBalanceCreateWithoutBeneficiaryInputObjectSchema),
                z.lazy(() => BeneficiaryBalanceCreateWithoutBeneficiaryInputObjectSchema).array(),
                z.lazy(() => BeneficiaryBalanceUncheckedCreateWithoutBeneficiaryInputObjectSchema),
                z.lazy(() => BeneficiaryBalanceUncheckedCreateWithoutBeneficiaryInputObjectSchema).array(),
            ])
            .optional(),
        connectOrCreate: z
            .union([
                z.lazy(() => BeneficiaryBalanceCreateOrConnectWithoutBeneficiaryInputObjectSchema),
                z.lazy(() => BeneficiaryBalanceCreateOrConnectWithoutBeneficiaryInputObjectSchema).array(),
            ])
            .optional(),
        upsert: z
            .union([
                z.lazy(() => BeneficiaryBalanceUpsertWithWhereUniqueWithoutBeneficiaryInputObjectSchema),
                z.lazy(() => BeneficiaryBalanceUpsertWithWhereUniqueWithoutBeneficiaryInputObjectSchema).array(),
            ])
            .optional(),
        createMany: z.lazy(() => BeneficiaryBalanceCreateManyBeneficiaryInputEnvelopeObjectSchema).optional(),
        set: z
            .union([
                z.lazy(() => BeneficiaryBalanceWhereUniqueInputObjectSchema),
                z.lazy(() => BeneficiaryBalanceWhereUniqueInputObjectSchema).array(),
            ])
            .optional(),
        disconnect: z
            .union([
                z.lazy(() => BeneficiaryBalanceWhereUniqueInputObjectSchema),
                z.lazy(() => BeneficiaryBalanceWhereUniqueInputObjectSchema).array(),
            ])
            .optional(),
        delete: z
            .union([
                z.lazy(() => BeneficiaryBalanceWhereUniqueInputObjectSchema),
                z.lazy(() => BeneficiaryBalanceWhereUniqueInputObjectSchema).array(),
            ])
            .optional(),
        connect: z
            .union([
                z.lazy(() => BeneficiaryBalanceWhereUniqueInputObjectSchema),
                z.lazy(() => BeneficiaryBalanceWhereUniqueInputObjectSchema).array(),
            ])
            .optional(),
        update: z
            .union([
                z.lazy(() => BeneficiaryBalanceUpdateWithWhereUniqueWithoutBeneficiaryInputObjectSchema),
                z.lazy(() => BeneficiaryBalanceUpdateWithWhereUniqueWithoutBeneficiaryInputObjectSchema).array(),
            ])
            .optional(),
        updateMany: z
            .union([
                z.lazy(() => BeneficiaryBalanceUpdateManyWithWhereWithoutBeneficiaryInputObjectSchema),
                z.lazy(() => BeneficiaryBalanceUpdateManyWithWhereWithoutBeneficiaryInputObjectSchema).array(),
            ])
            .optional(),
        deleteMany: z
            .union([
                z.lazy(() => BeneficiaryBalanceScalarWhereInputObjectSchema),
                z.lazy(() => BeneficiaryBalanceScalarWhereInputObjectSchema).array(),
            ])
            .optional(),
    })
    .strict() as SchemaType;
