/* eslint-disable */
import { z } from 'zod';
import { InsurancePolicyScalarWhereInputObjectSchema } from './InsurancePolicyScalarWhereInput.schema';
import { InsurancePolicyUpdateManyMutationInputObjectSchema } from './InsurancePolicyUpdateManyMutationInput.schema';
import { InsurancePolicyUncheckedUpdateManyWithoutInstitutionInputObjectSchema } from './InsurancePolicyUncheckedUpdateManyWithoutInstitutionInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.InsurancePolicyUpdateManyWithWhereWithoutInstitutionInput>;
export const InsurancePolicyUpdateManyWithWhereWithoutInstitutionInputObjectSchema: SchemaType = z
    .object({
        where: z.lazy(() => InsurancePolicyScalarWhereInputObjectSchema),
        data: z.union([
            z.lazy(() => InsurancePolicyUpdateManyMutationInputObjectSchema),
            z.lazy(() => InsurancePolicyUncheckedUpdateManyWithoutInstitutionInputObjectSchema),
        ]),
    })
    .strict() as SchemaType;
