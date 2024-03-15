/* eslint-disable */
import { z } from 'zod';
import { BeneficiaryBalanceCreateWithoutBeneficiaryInputObjectSchema } from './BeneficiaryBalanceCreateWithoutBeneficiaryInput.schema';
import { BeneficiaryBalanceUncheckedCreateWithoutBeneficiaryInputObjectSchema } from './BeneficiaryBalanceUncheckedCreateWithoutBeneficiaryInput.schema';
import { BeneficiaryBalanceCreateOrConnectWithoutBeneficiaryInputObjectSchema } from './BeneficiaryBalanceCreateOrConnectWithoutBeneficiaryInput.schema';
import { BeneficiaryBalanceCreateManyBeneficiaryInputEnvelopeObjectSchema } from './BeneficiaryBalanceCreateManyBeneficiaryInputEnvelope.schema';
import { BeneficiaryBalanceWhereUniqueInputObjectSchema } from './BeneficiaryBalanceWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.BeneficiaryBalanceCreateNestedManyWithoutBeneficiaryInput>;
export const BeneficiaryBalanceCreateNestedManyWithoutBeneficiaryInputObjectSchema: SchemaType = z
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
        createMany: z.lazy(() => BeneficiaryBalanceCreateManyBeneficiaryInputEnvelopeObjectSchema).optional(),
        connect: z
            .union([
                z.lazy(() => BeneficiaryBalanceWhereUniqueInputObjectSchema),
                z.lazy(() => BeneficiaryBalanceWhereUniqueInputObjectSchema).array(),
            ])
            .optional(),
    })
    .strict() as SchemaType;
