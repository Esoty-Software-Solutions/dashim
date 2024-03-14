/* eslint-disable */
import { z } from 'zod';
import { MedicalCenterUpdateWithoutInsurancePolicyInputObjectSchema } from './MedicalCenterUpdateWithoutInsurancePolicyInput.schema';
import { MedicalCenterUncheckedUpdateWithoutInsurancePolicyInputObjectSchema } from './MedicalCenterUncheckedUpdateWithoutInsurancePolicyInput.schema';
import { MedicalCenterCreateWithoutInsurancePolicyInputObjectSchema } from './MedicalCenterCreateWithoutInsurancePolicyInput.schema';
import { MedicalCenterUncheckedCreateWithoutInsurancePolicyInputObjectSchema } from './MedicalCenterUncheckedCreateWithoutInsurancePolicyInput.schema';
import { MedicalCenterWhereInputObjectSchema } from './MedicalCenterWhereInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.MedicalCenterUpsertWithoutInsurancePolicyInput>;
export const MedicalCenterUpsertWithoutInsurancePolicyInputObjectSchema: SchemaType = z
    .object({
        update: z.union([
            z.lazy(() => MedicalCenterUpdateWithoutInsurancePolicyInputObjectSchema),
            z.lazy(() => MedicalCenterUncheckedUpdateWithoutInsurancePolicyInputObjectSchema),
        ]),
        create: z.union([
            z.lazy(() => MedicalCenterCreateWithoutInsurancePolicyInputObjectSchema),
            z.lazy(() => MedicalCenterUncheckedCreateWithoutInsurancePolicyInputObjectSchema),
        ]),
        where: z.lazy(() => MedicalCenterWhereInputObjectSchema).optional(),
    })
    .strict() as SchemaType;
