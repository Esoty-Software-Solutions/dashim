/* eslint-disable */
import { z } from 'zod';
import { InsurancePolicyCreateWithoutBenefitPackagesInputObjectSchema } from './InsurancePolicyCreateWithoutBenefitPackagesInput.schema';
import { InsurancePolicyUncheckedCreateWithoutBenefitPackagesInputObjectSchema } from './InsurancePolicyUncheckedCreateWithoutBenefitPackagesInput.schema';
import { InsurancePolicyCreateOrConnectWithoutBenefitPackagesInputObjectSchema } from './InsurancePolicyCreateOrConnectWithoutBenefitPackagesInput.schema';
import { InsurancePolicyWhereUniqueInputObjectSchema } from './InsurancePolicyWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.InsurancePolicyCreateNestedOneWithoutBenefitPackagesInput>;
export const InsurancePolicyCreateNestedOneWithoutBenefitPackagesInputObjectSchema: SchemaType = z
    .object({
        create: z
            .union([
                z.lazy(() => InsurancePolicyCreateWithoutBenefitPackagesInputObjectSchema),
                z.lazy(() => InsurancePolicyUncheckedCreateWithoutBenefitPackagesInputObjectSchema),
            ])
            .optional(),
        connectOrCreate: z.lazy(() => InsurancePolicyCreateOrConnectWithoutBenefitPackagesInputObjectSchema).optional(),
        connect: z.lazy(() => InsurancePolicyWhereUniqueInputObjectSchema).optional(),
    })
    .strict() as SchemaType;
