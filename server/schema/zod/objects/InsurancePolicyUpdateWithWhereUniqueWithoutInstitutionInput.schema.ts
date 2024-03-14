/* eslint-disable */
import { z } from 'zod';
import { InsurancePolicyWhereUniqueInputObjectSchema } from './InsurancePolicyWhereUniqueInput.schema';
import { InsurancePolicyUpdateWithoutInstitutionInputObjectSchema } from './InsurancePolicyUpdateWithoutInstitutionInput.schema';
import { InsurancePolicyUncheckedUpdateWithoutInstitutionInputObjectSchema } from './InsurancePolicyUncheckedUpdateWithoutInstitutionInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.InsurancePolicyUpdateWithWhereUniqueWithoutInstitutionInput>;
export const InsurancePolicyUpdateWithWhereUniqueWithoutInstitutionInputObjectSchema: SchemaType = z
    .object({
        where: z.lazy(() => InsurancePolicyWhereUniqueInputObjectSchema),
        data: z.union([
            z.lazy(() => InsurancePolicyUpdateWithoutInstitutionInputObjectSchema),
            z.lazy(() => InsurancePolicyUncheckedUpdateWithoutInstitutionInputObjectSchema),
        ]),
    })
    .strict() as SchemaType;
