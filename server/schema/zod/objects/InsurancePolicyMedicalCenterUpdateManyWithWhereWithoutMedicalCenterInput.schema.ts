/* eslint-disable */
import { z } from 'zod';
import { InsurancePolicyMedicalCenterScalarWhereInputObjectSchema } from './InsurancePolicyMedicalCenterScalarWhereInput.schema';
import { InsurancePolicyMedicalCenterUpdateManyMutationInputObjectSchema } from './InsurancePolicyMedicalCenterUpdateManyMutationInput.schema';
import { InsurancePolicyMedicalCenterUncheckedUpdateManyWithoutMedicalCenterInputObjectSchema } from './InsurancePolicyMedicalCenterUncheckedUpdateManyWithoutMedicalCenterInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.InsurancePolicyMedicalCenterUpdateManyWithWhereWithoutMedicalCenterInput>;
export const InsurancePolicyMedicalCenterUpdateManyWithWhereWithoutMedicalCenterInputObjectSchema: SchemaType = z
    .object({
        where: z.lazy(() => InsurancePolicyMedicalCenterScalarWhereInputObjectSchema),
        data: z.union([
            z.lazy(() => InsurancePolicyMedicalCenterUpdateManyMutationInputObjectSchema),
            z.lazy(() => InsurancePolicyMedicalCenterUncheckedUpdateManyWithoutMedicalCenterInputObjectSchema),
        ]),
    })
    .strict() as SchemaType;
