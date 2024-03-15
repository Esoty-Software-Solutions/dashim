/* eslint-disable */
import { z } from 'zod';
import { InsurancePolicyMedicalCenterWhereUniqueInputObjectSchema } from './InsurancePolicyMedicalCenterWhereUniqueInput.schema';
import { InsurancePolicyMedicalCenterUpdateWithoutInsurancePolicyInputObjectSchema } from './InsurancePolicyMedicalCenterUpdateWithoutInsurancePolicyInput.schema';
import { InsurancePolicyMedicalCenterUncheckedUpdateWithoutInsurancePolicyInputObjectSchema } from './InsurancePolicyMedicalCenterUncheckedUpdateWithoutInsurancePolicyInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.InsurancePolicyMedicalCenterUpdateWithWhereUniqueWithoutInsurancePolicyInput>;
export const InsurancePolicyMedicalCenterUpdateWithWhereUniqueWithoutInsurancePolicyInputObjectSchema: SchemaType = z
    .object({
        where: z.lazy(() => InsurancePolicyMedicalCenterWhereUniqueInputObjectSchema),
        data: z.union([
            z.lazy(() => InsurancePolicyMedicalCenterUpdateWithoutInsurancePolicyInputObjectSchema),
            z.lazy(() => InsurancePolicyMedicalCenterUncheckedUpdateWithoutInsurancePolicyInputObjectSchema),
        ]),
    })
    .strict() as SchemaType;
