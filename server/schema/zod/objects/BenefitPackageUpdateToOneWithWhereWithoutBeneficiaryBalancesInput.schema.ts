/* eslint-disable */
import { z } from 'zod';
import { BenefitPackageWhereInputObjectSchema } from './BenefitPackageWhereInput.schema';
import { BenefitPackageUpdateWithoutBeneficiaryBalancesInputObjectSchema } from './BenefitPackageUpdateWithoutBeneficiaryBalancesInput.schema';
import { BenefitPackageUncheckedUpdateWithoutBeneficiaryBalancesInputObjectSchema } from './BenefitPackageUncheckedUpdateWithoutBeneficiaryBalancesInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.BenefitPackageUpdateToOneWithWhereWithoutBeneficiaryBalancesInput>;
export const BenefitPackageUpdateToOneWithWhereWithoutBeneficiaryBalancesInputObjectSchema: SchemaType = z
    .object({
        where: z.lazy(() => BenefitPackageWhereInputObjectSchema).optional(),
        data: z.union([
            z.lazy(() => BenefitPackageUpdateWithoutBeneficiaryBalancesInputObjectSchema),
            z.lazy(() => BenefitPackageUncheckedUpdateWithoutBeneficiaryBalancesInputObjectSchema),
        ]),
    })
    .strict() as SchemaType;
