/* eslint-disable */
import { z } from 'zod';
import { InsurancePolicyMedicalCenterScalarWhereInputObjectSchema } from './InsurancePolicyMedicalCenterScalarWhereInput.schema';
import { InsurancePolicyMedicalCenterUpdateManyMutationInputObjectSchema } from './InsurancePolicyMedicalCenterUpdateManyMutationInput.schema';
import { InsurancePolicyMedicalCenterUncheckedUpdateManyWithoutInsurancePolicyInputObjectSchema } from './InsurancePolicyMedicalCenterUncheckedUpdateManyWithoutInsurancePolicyInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.InsurancePolicyMedicalCenterUpdateManyWithWhereWithoutInsurancePolicyInput>;
export const InsurancePolicyMedicalCenterUpdateManyWithWhereWithoutInsurancePolicyInputObjectSchema: SchemaType = z
    .object({
        where: z.lazy(() => InsurancePolicyMedicalCenterScalarWhereInputObjectSchema),
        data: z.union([
            z.lazy(() => InsurancePolicyMedicalCenterUpdateManyMutationInputObjectSchema),
            z.lazy(() => InsurancePolicyMedicalCenterUncheckedUpdateManyWithoutInsurancePolicyInputObjectSchema),
        ]),
    })
    .strict() as SchemaType;
