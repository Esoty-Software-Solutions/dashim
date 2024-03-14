/* eslint-disable */
import { z } from 'zod';
import { InsurancePolicyWhereUniqueInputObjectSchema } from './InsurancePolicyWhereUniqueInput.schema';
import { InsurancePolicyCreateWithoutBeneficiaryEntitiesInputObjectSchema } from './InsurancePolicyCreateWithoutBeneficiaryEntitiesInput.schema';
import { InsurancePolicyUncheckedCreateWithoutBeneficiaryEntitiesInputObjectSchema } from './InsurancePolicyUncheckedCreateWithoutBeneficiaryEntitiesInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.InsurancePolicyCreateOrConnectWithoutBeneficiaryEntitiesInput>;
export const InsurancePolicyCreateOrConnectWithoutBeneficiaryEntitiesInputObjectSchema: SchemaType = z
    .object({
        where: z.lazy(() => InsurancePolicyWhereUniqueInputObjectSchema),
        create: z.union([
            z.lazy(() => InsurancePolicyCreateWithoutBeneficiaryEntitiesInputObjectSchema),
            z.lazy(() => InsurancePolicyUncheckedCreateWithoutBeneficiaryEntitiesInputObjectSchema),
        ]),
    })
    .strict() as SchemaType;
