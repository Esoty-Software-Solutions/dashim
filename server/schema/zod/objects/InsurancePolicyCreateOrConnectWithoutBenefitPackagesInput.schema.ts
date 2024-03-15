/* eslint-disable */
import { z } from 'zod';
import { InsurancePolicyWhereUniqueInputObjectSchema } from './InsurancePolicyWhereUniqueInput.schema';
import { InsurancePolicyCreateWithoutBenefitPackagesInputObjectSchema } from './InsurancePolicyCreateWithoutBenefitPackagesInput.schema';
import { InsurancePolicyUncheckedCreateWithoutBenefitPackagesInputObjectSchema } from './InsurancePolicyUncheckedCreateWithoutBenefitPackagesInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.InsurancePolicyCreateOrConnectWithoutBenefitPackagesInput>;
export const InsurancePolicyCreateOrConnectWithoutBenefitPackagesInputObjectSchema: SchemaType = z
    .object({
        where: z.lazy(() => InsurancePolicyWhereUniqueInputObjectSchema),
        create: z.union([
            z.lazy(() => InsurancePolicyCreateWithoutBenefitPackagesInputObjectSchema),
            z.lazy(() => InsurancePolicyUncheckedCreateWithoutBenefitPackagesInputObjectSchema),
        ]),
    })
    .strict() as SchemaType;
