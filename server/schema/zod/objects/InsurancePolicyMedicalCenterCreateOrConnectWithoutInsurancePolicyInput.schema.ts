/* eslint-disable */
import { z } from 'zod';
import { InsurancePolicyMedicalCenterWhereUniqueInputObjectSchema } from './InsurancePolicyMedicalCenterWhereUniqueInput.schema';
import { InsurancePolicyMedicalCenterCreateWithoutInsurancePolicyInputObjectSchema } from './InsurancePolicyMedicalCenterCreateWithoutInsurancePolicyInput.schema';
import { InsurancePolicyMedicalCenterUncheckedCreateWithoutInsurancePolicyInputObjectSchema } from './InsurancePolicyMedicalCenterUncheckedCreateWithoutInsurancePolicyInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.InsurancePolicyMedicalCenterCreateOrConnectWithoutInsurancePolicyInput>;
export const InsurancePolicyMedicalCenterCreateOrConnectWithoutInsurancePolicyInputObjectSchema: SchemaType = z
    .object({
        where: z.lazy(() => InsurancePolicyMedicalCenterWhereUniqueInputObjectSchema),
        create: z.union([
            z.lazy(() => InsurancePolicyMedicalCenterCreateWithoutInsurancePolicyInputObjectSchema),
            z.lazy(() => InsurancePolicyMedicalCenterUncheckedCreateWithoutInsurancePolicyInputObjectSchema),
        ]),
    })
    .strict() as SchemaType;
