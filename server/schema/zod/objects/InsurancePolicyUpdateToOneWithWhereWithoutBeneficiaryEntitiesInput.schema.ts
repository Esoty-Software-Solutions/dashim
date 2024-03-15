/* eslint-disable */
import { z } from 'zod';
import { InsurancePolicyWhereInputObjectSchema } from './InsurancePolicyWhereInput.schema';
import { InsurancePolicyUpdateWithoutBeneficiaryEntitiesInputObjectSchema } from './InsurancePolicyUpdateWithoutBeneficiaryEntitiesInput.schema';
import { InsurancePolicyUncheckedUpdateWithoutBeneficiaryEntitiesInputObjectSchema } from './InsurancePolicyUncheckedUpdateWithoutBeneficiaryEntitiesInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.InsurancePolicyUpdateToOneWithWhereWithoutBeneficiaryEntitiesInput>;
export const InsurancePolicyUpdateToOneWithWhereWithoutBeneficiaryEntitiesInputObjectSchema: SchemaType = z
    .object({
        where: z.lazy(() => InsurancePolicyWhereInputObjectSchema).optional(),
        data: z.union([
            z.lazy(() => InsurancePolicyUpdateWithoutBeneficiaryEntitiesInputObjectSchema),
            z.lazy(() => InsurancePolicyUncheckedUpdateWithoutBeneficiaryEntitiesInputObjectSchema),
        ]),
    })
    .strict() as SchemaType;
