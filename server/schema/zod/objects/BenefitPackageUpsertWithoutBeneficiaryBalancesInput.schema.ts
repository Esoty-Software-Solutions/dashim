/* eslint-disable */
import { z } from 'zod';
import { BenefitPackageUpdateWithoutBeneficiaryBalancesInputObjectSchema } from './BenefitPackageUpdateWithoutBeneficiaryBalancesInput.schema';
import { BenefitPackageUncheckedUpdateWithoutBeneficiaryBalancesInputObjectSchema } from './BenefitPackageUncheckedUpdateWithoutBeneficiaryBalancesInput.schema';
import { BenefitPackageCreateWithoutBeneficiaryBalancesInputObjectSchema } from './BenefitPackageCreateWithoutBeneficiaryBalancesInput.schema';
import { BenefitPackageUncheckedCreateWithoutBeneficiaryBalancesInputObjectSchema } from './BenefitPackageUncheckedCreateWithoutBeneficiaryBalancesInput.schema';
import { BenefitPackageWhereInputObjectSchema } from './BenefitPackageWhereInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.BenefitPackageUpsertWithoutBeneficiaryBalancesInput>;
export const BenefitPackageUpsertWithoutBeneficiaryBalancesInputObjectSchema: SchemaType = z
    .object({
        update: z.union([
            z.lazy(() => BenefitPackageUpdateWithoutBeneficiaryBalancesInputObjectSchema),
            z.lazy(() => BenefitPackageUncheckedUpdateWithoutBeneficiaryBalancesInputObjectSchema),
        ]),
        create: z.union([
            z.lazy(() => BenefitPackageCreateWithoutBeneficiaryBalancesInputObjectSchema),
            z.lazy(() => BenefitPackageUncheckedCreateWithoutBeneficiaryBalancesInputObjectSchema),
        ]),
        where: z.lazy(() => BenefitPackageWhereInputObjectSchema).optional(),
    })
    .strict() as SchemaType;
