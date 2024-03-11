/* eslint-disable */
import { z } from 'zod';
import { BeneficiaryBalanceWhereUniqueInputObjectSchema } from './BeneficiaryBalanceWhereUniqueInput.schema';
import { BeneficiaryBalanceCreateWithoutBeneftiPackageInputObjectSchema } from './BeneficiaryBalanceCreateWithoutBeneftiPackageInput.schema';
import { BeneficiaryBalanceUncheckedCreateWithoutBeneftiPackageInputObjectSchema } from './BeneficiaryBalanceUncheckedCreateWithoutBeneftiPackageInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.BeneficiaryBalanceCreateOrConnectWithoutBeneftiPackageInput>;
export const BeneficiaryBalanceCreateOrConnectWithoutBeneftiPackageInputObjectSchema: SchemaType = z
    .object({
        where: z.lazy(() => BeneficiaryBalanceWhereUniqueInputObjectSchema),
        create: z.union([
            z.lazy(() => BeneficiaryBalanceCreateWithoutBeneftiPackageInputObjectSchema),
            z.lazy(() => BeneficiaryBalanceUncheckedCreateWithoutBeneftiPackageInputObjectSchema),
        ]),
    })
    .strict() as SchemaType;
