/* eslint-disable */
import { z } from 'zod';
import { BenefitPackageWhereUniqueInputObjectSchema } from './BenefitPackageWhereUniqueInput.schema';
import { BenefitPackageCreateWithoutInsurancePolicyInputObjectSchema } from './BenefitPackageCreateWithoutInsurancePolicyInput.schema';
import { BenefitPackageUncheckedCreateWithoutInsurancePolicyInputObjectSchema } from './BenefitPackageUncheckedCreateWithoutInsurancePolicyInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.BenefitPackageCreateOrConnectWithoutInsurancePolicyInput>;
export const BenefitPackageCreateOrConnectWithoutInsurancePolicyInputObjectSchema: SchemaType = z
    .object({
        where: z.lazy(() => BenefitPackageWhereUniqueInputObjectSchema),
        create: z.union([
            z.lazy(() => BenefitPackageCreateWithoutInsurancePolicyInputObjectSchema),
            z.lazy(() => BenefitPackageUncheckedCreateWithoutInsurancePolicyInputObjectSchema),
        ]),
    })
    .strict() as SchemaType;
