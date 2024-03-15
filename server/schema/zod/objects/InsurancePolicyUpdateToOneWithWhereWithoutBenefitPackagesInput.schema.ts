/* eslint-disable */
import { z } from 'zod';
import { InsurancePolicyWhereInputObjectSchema } from './InsurancePolicyWhereInput.schema';
import { InsurancePolicyUpdateWithoutBenefitPackagesInputObjectSchema } from './InsurancePolicyUpdateWithoutBenefitPackagesInput.schema';
import { InsurancePolicyUncheckedUpdateWithoutBenefitPackagesInputObjectSchema } from './InsurancePolicyUncheckedUpdateWithoutBenefitPackagesInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.InsurancePolicyUpdateToOneWithWhereWithoutBenefitPackagesInput>;
export const InsurancePolicyUpdateToOneWithWhereWithoutBenefitPackagesInputObjectSchema: SchemaType = z
    .object({
        where: z.lazy(() => InsurancePolicyWhereInputObjectSchema).optional(),
        data: z.union([
            z.lazy(() => InsurancePolicyUpdateWithoutBenefitPackagesInputObjectSchema),
            z.lazy(() => InsurancePolicyUncheckedUpdateWithoutBenefitPackagesInputObjectSchema),
        ]),
    })
    .strict() as SchemaType;
