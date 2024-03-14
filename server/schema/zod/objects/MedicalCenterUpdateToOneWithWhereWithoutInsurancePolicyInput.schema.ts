/* eslint-disable */
import { z } from 'zod';
import { MedicalCenterWhereInputObjectSchema } from './MedicalCenterWhereInput.schema';
import { MedicalCenterUpdateWithoutInsurancePolicyInputObjectSchema } from './MedicalCenterUpdateWithoutInsurancePolicyInput.schema';
import { MedicalCenterUncheckedUpdateWithoutInsurancePolicyInputObjectSchema } from './MedicalCenterUncheckedUpdateWithoutInsurancePolicyInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.MedicalCenterUpdateToOneWithWhereWithoutInsurancePolicyInput>;
export const MedicalCenterUpdateToOneWithWhereWithoutInsurancePolicyInputObjectSchema: SchemaType = z
    .object({
        where: z.lazy(() => MedicalCenterWhereInputObjectSchema).optional(),
        data: z.union([
            z.lazy(() => MedicalCenterUpdateWithoutInsurancePolicyInputObjectSchema),
            z.lazy(() => MedicalCenterUncheckedUpdateWithoutInsurancePolicyInputObjectSchema),
        ]),
    })
    .strict() as SchemaType;
