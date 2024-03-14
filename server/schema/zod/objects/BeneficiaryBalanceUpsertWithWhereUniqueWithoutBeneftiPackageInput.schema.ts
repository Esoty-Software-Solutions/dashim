/* eslint-disable */
import { z } from 'zod';
import { BeneficiaryBalanceWhereUniqueInputObjectSchema } from './BeneficiaryBalanceWhereUniqueInput.schema';
import { BeneficiaryBalanceUpdateWithoutBeneftiPackageInputObjectSchema } from './BeneficiaryBalanceUpdateWithoutBeneftiPackageInput.schema';
import { BeneficiaryBalanceUncheckedUpdateWithoutBeneftiPackageInputObjectSchema } from './BeneficiaryBalanceUncheckedUpdateWithoutBeneftiPackageInput.schema';
import { BeneficiaryBalanceCreateWithoutBeneftiPackageInputObjectSchema } from './BeneficiaryBalanceCreateWithoutBeneftiPackageInput.schema';
import { BeneficiaryBalanceUncheckedCreateWithoutBeneftiPackageInputObjectSchema } from './BeneficiaryBalanceUncheckedCreateWithoutBeneftiPackageInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.BeneficiaryBalanceUpsertWithWhereUniqueWithoutBeneftiPackageInput>;
export const BeneficiaryBalanceUpsertWithWhereUniqueWithoutBeneftiPackageInputObjectSchema: SchemaType = z
    .object({
        where: z.lazy(() => BeneficiaryBalanceWhereUniqueInputObjectSchema),
        update: z.union([
            z.lazy(() => BeneficiaryBalanceUpdateWithoutBeneftiPackageInputObjectSchema),
            z.lazy(() => BeneficiaryBalanceUncheckedUpdateWithoutBeneftiPackageInputObjectSchema),
        ]),
        create: z.union([
            z.lazy(() => BeneficiaryBalanceCreateWithoutBeneftiPackageInputObjectSchema),
            z.lazy(() => BeneficiaryBalanceUncheckedCreateWithoutBeneftiPackageInputObjectSchema),
        ]),
    })
    .strict() as SchemaType;
