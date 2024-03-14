/* eslint-disable */
import { z } from 'zod';
import { BeneficiaryBalanceWhereUniqueInputObjectSchema } from './BeneficiaryBalanceWhereUniqueInput.schema';
import { BeneficiaryBalanceUpdateWithoutBeneftiPackageInputObjectSchema } from './BeneficiaryBalanceUpdateWithoutBeneftiPackageInput.schema';
import { BeneficiaryBalanceUncheckedUpdateWithoutBeneftiPackageInputObjectSchema } from './BeneficiaryBalanceUncheckedUpdateWithoutBeneftiPackageInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.BeneficiaryBalanceUpdateWithWhereUniqueWithoutBeneftiPackageInput>;
export const BeneficiaryBalanceUpdateWithWhereUniqueWithoutBeneftiPackageInputObjectSchema: SchemaType = z
    .object({
        where: z.lazy(() => BeneficiaryBalanceWhereUniqueInputObjectSchema),
        data: z.union([
            z.lazy(() => BeneficiaryBalanceUpdateWithoutBeneftiPackageInputObjectSchema),
            z.lazy(() => BeneficiaryBalanceUncheckedUpdateWithoutBeneftiPackageInputObjectSchema),
        ]),
    })
    .strict() as SchemaType;
