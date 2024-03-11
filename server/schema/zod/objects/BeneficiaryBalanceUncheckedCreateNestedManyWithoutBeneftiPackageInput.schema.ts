/* eslint-disable */
import { z } from 'zod';
import { BeneficiaryBalanceCreateWithoutBeneftiPackageInputObjectSchema } from './BeneficiaryBalanceCreateWithoutBeneftiPackageInput.schema';
import { BeneficiaryBalanceUncheckedCreateWithoutBeneftiPackageInputObjectSchema } from './BeneficiaryBalanceUncheckedCreateWithoutBeneftiPackageInput.schema';
import { BeneficiaryBalanceCreateOrConnectWithoutBeneftiPackageInputObjectSchema } from './BeneficiaryBalanceCreateOrConnectWithoutBeneftiPackageInput.schema';
import { BeneficiaryBalanceCreateManyBeneftiPackageInputEnvelopeObjectSchema } from './BeneficiaryBalanceCreateManyBeneftiPackageInputEnvelope.schema';
import { BeneficiaryBalanceWhereUniqueInputObjectSchema } from './BeneficiaryBalanceWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.BeneficiaryBalanceUncheckedCreateNestedManyWithoutBeneftiPackageInput>;
export const BeneficiaryBalanceUncheckedCreateNestedManyWithoutBeneftiPackageInputObjectSchema: SchemaType = z
    .object({
        create: z
            .union([
                z.lazy(() => BeneficiaryBalanceCreateWithoutBeneftiPackageInputObjectSchema),
                z.lazy(() => BeneficiaryBalanceCreateWithoutBeneftiPackageInputObjectSchema).array(),
                z.lazy(() => BeneficiaryBalanceUncheckedCreateWithoutBeneftiPackageInputObjectSchema),
                z.lazy(() => BeneficiaryBalanceUncheckedCreateWithoutBeneftiPackageInputObjectSchema).array(),
            ])
            .optional(),
        connectOrCreate: z
            .union([
                z.lazy(() => BeneficiaryBalanceCreateOrConnectWithoutBeneftiPackageInputObjectSchema),
                z.lazy(() => BeneficiaryBalanceCreateOrConnectWithoutBeneftiPackageInputObjectSchema).array(),
            ])
            .optional(),
        createMany: z.lazy(() => BeneficiaryBalanceCreateManyBeneftiPackageInputEnvelopeObjectSchema).optional(),
        connect: z
            .union([
                z.lazy(() => BeneficiaryBalanceWhereUniqueInputObjectSchema),
                z.lazy(() => BeneficiaryBalanceWhereUniqueInputObjectSchema).array(),
            ])
            .optional(),
    })
    .strict() as SchemaType;
