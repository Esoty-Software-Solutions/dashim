/* eslint-disable */
import { z } from 'zod';
import { BenefitPackageWhereUniqueInputObjectSchema } from './BenefitPackageWhereUniqueInput.schema';
import { BenefitPackageUpdateWithoutInsurancePolicyInputObjectSchema } from './BenefitPackageUpdateWithoutInsurancePolicyInput.schema';
import { BenefitPackageUncheckedUpdateWithoutInsurancePolicyInputObjectSchema } from './BenefitPackageUncheckedUpdateWithoutInsurancePolicyInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.BenefitPackageUpdateWithWhereUniqueWithoutInsurancePolicyInput>;
export const BenefitPackageUpdateWithWhereUniqueWithoutInsurancePolicyInputObjectSchema: SchemaType = z
    .object({
        where: z.lazy(() => BenefitPackageWhereUniqueInputObjectSchema),
        data: z.union([
            z.lazy(() => BenefitPackageUpdateWithoutInsurancePolicyInputObjectSchema),
            z.lazy(() => BenefitPackageUncheckedUpdateWithoutInsurancePolicyInputObjectSchema),
        ]),
    })
    .strict() as SchemaType;
