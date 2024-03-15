/* eslint-disable */
import { z } from 'zod';
import { BenefitPackageWhereUniqueInputObjectSchema } from './BenefitPackageWhereUniqueInput.schema';
import { BenefitPackageCreateWithoutBeneficiaryBalancesInputObjectSchema } from './BenefitPackageCreateWithoutBeneficiaryBalancesInput.schema';
import { BenefitPackageUncheckedCreateWithoutBeneficiaryBalancesInputObjectSchema } from './BenefitPackageUncheckedCreateWithoutBeneficiaryBalancesInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.BenefitPackageCreateOrConnectWithoutBeneficiaryBalancesInput>;
export const BenefitPackageCreateOrConnectWithoutBeneficiaryBalancesInputObjectSchema: SchemaType = z
    .object({
        where: z.lazy(() => BenefitPackageWhereUniqueInputObjectSchema),
        create: z.union([
            z.lazy(() => BenefitPackageCreateWithoutBeneficiaryBalancesInputObjectSchema),
            z.lazy(() => BenefitPackageUncheckedCreateWithoutBeneficiaryBalancesInputObjectSchema),
        ]),
    })
    .strict() as SchemaType;
