/* eslint-disable */
import { z } from 'zod';
import { InsurancePolicyUpdateWithoutBeneficiaryEntitiesInputObjectSchema } from './InsurancePolicyUpdateWithoutBeneficiaryEntitiesInput.schema';
import { InsurancePolicyUncheckedUpdateWithoutBeneficiaryEntitiesInputObjectSchema } from './InsurancePolicyUncheckedUpdateWithoutBeneficiaryEntitiesInput.schema';
import { InsurancePolicyCreateWithoutBeneficiaryEntitiesInputObjectSchema } from './InsurancePolicyCreateWithoutBeneficiaryEntitiesInput.schema';
import { InsurancePolicyUncheckedCreateWithoutBeneficiaryEntitiesInputObjectSchema } from './InsurancePolicyUncheckedCreateWithoutBeneficiaryEntitiesInput.schema';
import { InsurancePolicyWhereInputObjectSchema } from './InsurancePolicyWhereInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.InsurancePolicyUpsertWithoutBeneficiaryEntitiesInput>;
export const InsurancePolicyUpsertWithoutBeneficiaryEntitiesInputObjectSchema: SchemaType = z
    .object({
        update: z.union([
            z.lazy(() => InsurancePolicyUpdateWithoutBeneficiaryEntitiesInputObjectSchema),
            z.lazy(() => InsurancePolicyUncheckedUpdateWithoutBeneficiaryEntitiesInputObjectSchema),
        ]),
        create: z.union([
            z.lazy(() => InsurancePolicyCreateWithoutBeneficiaryEntitiesInputObjectSchema),
            z.lazy(() => InsurancePolicyUncheckedCreateWithoutBeneficiaryEntitiesInputObjectSchema),
        ]),
        where: z.lazy(() => InsurancePolicyWhereInputObjectSchema).optional(),
    })
    .strict() as SchemaType;
