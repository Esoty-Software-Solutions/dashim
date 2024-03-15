/* eslint-disable */
import { z } from 'zod';
import { BenefitPackageCreateWithoutBeneficiaryBalancesInputObjectSchema } from './BenefitPackageCreateWithoutBeneficiaryBalancesInput.schema';
import { BenefitPackageUncheckedCreateWithoutBeneficiaryBalancesInputObjectSchema } from './BenefitPackageUncheckedCreateWithoutBeneficiaryBalancesInput.schema';
import { BenefitPackageCreateOrConnectWithoutBeneficiaryBalancesInputObjectSchema } from './BenefitPackageCreateOrConnectWithoutBeneficiaryBalancesInput.schema';
import { BenefitPackageWhereUniqueInputObjectSchema } from './BenefitPackageWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.BenefitPackageCreateNestedOneWithoutBeneficiaryBalancesInput>;
export const BenefitPackageCreateNestedOneWithoutBeneficiaryBalancesInputObjectSchema: SchemaType = z
    .object({
        create: z
            .union([
                z.lazy(() => BenefitPackageCreateWithoutBeneficiaryBalancesInputObjectSchema),
                z.lazy(() => BenefitPackageUncheckedCreateWithoutBeneficiaryBalancesInputObjectSchema),
            ])
            .optional(),
        connectOrCreate: z
            .lazy(() => BenefitPackageCreateOrConnectWithoutBeneficiaryBalancesInputObjectSchema)
            .optional(),
        connect: z.lazy(() => BenefitPackageWhereUniqueInputObjectSchema).optional(),
    })
    .strict() as SchemaType;
