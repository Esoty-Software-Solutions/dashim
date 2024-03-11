/* eslint-disable */
import { z } from 'zod';
import { InsurancePolicyWhereInputObjectSchema } from './InsurancePolicyWhereInput.schema';
import { InsurancePolicyUpdateWithoutMedicalCentersInputObjectSchema } from './InsurancePolicyUpdateWithoutMedicalCentersInput.schema';
import { InsurancePolicyUncheckedUpdateWithoutMedicalCentersInputObjectSchema } from './InsurancePolicyUncheckedUpdateWithoutMedicalCentersInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.InsurancePolicyUpdateToOneWithWhereWithoutMedicalCentersInput>;
export const InsurancePolicyUpdateToOneWithWhereWithoutMedicalCentersInputObjectSchema: SchemaType = z
    .object({
        where: z.lazy(() => InsurancePolicyWhereInputObjectSchema).optional(),
        data: z.union([
            z.lazy(() => InsurancePolicyUpdateWithoutMedicalCentersInputObjectSchema),
            z.lazy(() => InsurancePolicyUncheckedUpdateWithoutMedicalCentersInputObjectSchema),
        ]),
    })
    .strict() as SchemaType;
