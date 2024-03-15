/* eslint-disable */
import { z } from 'zod';
import { InsurancePolicyUpdateWithoutBenefitPackagesInputObjectSchema } from './InsurancePolicyUpdateWithoutBenefitPackagesInput.schema';
import { InsurancePolicyUncheckedUpdateWithoutBenefitPackagesInputObjectSchema } from './InsurancePolicyUncheckedUpdateWithoutBenefitPackagesInput.schema';
import { InsurancePolicyCreateWithoutBenefitPackagesInputObjectSchema } from './InsurancePolicyCreateWithoutBenefitPackagesInput.schema';
import { InsurancePolicyUncheckedCreateWithoutBenefitPackagesInputObjectSchema } from './InsurancePolicyUncheckedCreateWithoutBenefitPackagesInput.schema';
import { InsurancePolicyWhereInputObjectSchema } from './InsurancePolicyWhereInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.InsurancePolicyUpsertWithoutBenefitPackagesInput>;
export const InsurancePolicyUpsertWithoutBenefitPackagesInputObjectSchema: SchemaType = z
    .object({
        update: z.union([
            z.lazy(() => InsurancePolicyUpdateWithoutBenefitPackagesInputObjectSchema),
            z.lazy(() => InsurancePolicyUncheckedUpdateWithoutBenefitPackagesInputObjectSchema),
        ]),
        create: z.union([
            z.lazy(() => InsurancePolicyCreateWithoutBenefitPackagesInputObjectSchema),
            z.lazy(() => InsurancePolicyUncheckedCreateWithoutBenefitPackagesInputObjectSchema),
        ]),
        where: z.lazy(() => InsurancePolicyWhereInputObjectSchema).optional(),
    })
    .strict() as SchemaType;
