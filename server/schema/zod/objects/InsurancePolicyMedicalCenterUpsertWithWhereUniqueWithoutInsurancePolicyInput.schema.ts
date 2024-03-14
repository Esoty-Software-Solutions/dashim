/* eslint-disable */
import { z } from 'zod';
import { InsurancePolicyMedicalCenterWhereUniqueInputObjectSchema } from './InsurancePolicyMedicalCenterWhereUniqueInput.schema';
import { InsurancePolicyMedicalCenterUpdateWithoutInsurancePolicyInputObjectSchema } from './InsurancePolicyMedicalCenterUpdateWithoutInsurancePolicyInput.schema';
import { InsurancePolicyMedicalCenterUncheckedUpdateWithoutInsurancePolicyInputObjectSchema } from './InsurancePolicyMedicalCenterUncheckedUpdateWithoutInsurancePolicyInput.schema';
import { InsurancePolicyMedicalCenterCreateWithoutInsurancePolicyInputObjectSchema } from './InsurancePolicyMedicalCenterCreateWithoutInsurancePolicyInput.schema';
import { InsurancePolicyMedicalCenterUncheckedCreateWithoutInsurancePolicyInputObjectSchema } from './InsurancePolicyMedicalCenterUncheckedCreateWithoutInsurancePolicyInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.InsurancePolicyMedicalCenterUpsertWithWhereUniqueWithoutInsurancePolicyInput>;
export const InsurancePolicyMedicalCenterUpsertWithWhereUniqueWithoutInsurancePolicyInputObjectSchema: SchemaType = z
    .object({
        where: z.lazy(() => InsurancePolicyMedicalCenterWhereUniqueInputObjectSchema),
        update: z.union([
            z.lazy(() => InsurancePolicyMedicalCenterUpdateWithoutInsurancePolicyInputObjectSchema),
            z.lazy(() => InsurancePolicyMedicalCenterUncheckedUpdateWithoutInsurancePolicyInputObjectSchema),
        ]),
        create: z.union([
            z.lazy(() => InsurancePolicyMedicalCenterCreateWithoutInsurancePolicyInputObjectSchema),
            z.lazy(() => InsurancePolicyMedicalCenterUncheckedCreateWithoutInsurancePolicyInputObjectSchema),
        ]),
    })
    .strict() as SchemaType;
