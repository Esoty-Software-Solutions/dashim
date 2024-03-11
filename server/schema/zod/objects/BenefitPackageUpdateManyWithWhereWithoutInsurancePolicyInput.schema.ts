/* eslint-disable */
import { z } from 'zod';
import { BenefitPackageScalarWhereInputObjectSchema } from './BenefitPackageScalarWhereInput.schema';
import { BenefitPackageUpdateManyMutationInputObjectSchema } from './BenefitPackageUpdateManyMutationInput.schema';
import { BenefitPackageUncheckedUpdateManyWithoutInsurancePolicyInputObjectSchema } from './BenefitPackageUncheckedUpdateManyWithoutInsurancePolicyInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.BenefitPackageUpdateManyWithWhereWithoutInsurancePolicyInput>;
export const BenefitPackageUpdateManyWithWhereWithoutInsurancePolicyInputObjectSchema: SchemaType = z
    .object({
        where: z.lazy(() => BenefitPackageScalarWhereInputObjectSchema),
        data: z.union([
            z.lazy(() => BenefitPackageUpdateManyMutationInputObjectSchema),
            z.lazy(() => BenefitPackageUncheckedUpdateManyWithoutInsurancePolicyInputObjectSchema),
        ]),
    })
    .strict() as SchemaType;
