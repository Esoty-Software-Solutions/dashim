/* eslint-disable */
import { z } from 'zod';
import { MedicalCenterCreateWithoutInsurancePolicyInputObjectSchema } from './MedicalCenterCreateWithoutInsurancePolicyInput.schema';
import { MedicalCenterUncheckedCreateWithoutInsurancePolicyInputObjectSchema } from './MedicalCenterUncheckedCreateWithoutInsurancePolicyInput.schema';
import { MedicalCenterCreateOrConnectWithoutInsurancePolicyInputObjectSchema } from './MedicalCenterCreateOrConnectWithoutInsurancePolicyInput.schema';
import { MedicalCenterUpsertWithoutInsurancePolicyInputObjectSchema } from './MedicalCenterUpsertWithoutInsurancePolicyInput.schema';
import { MedicalCenterWhereUniqueInputObjectSchema } from './MedicalCenterWhereUniqueInput.schema';
import { MedicalCenterUpdateToOneWithWhereWithoutInsurancePolicyInputObjectSchema } from './MedicalCenterUpdateToOneWithWhereWithoutInsurancePolicyInput.schema';
import { MedicalCenterUpdateWithoutInsurancePolicyInputObjectSchema } from './MedicalCenterUpdateWithoutInsurancePolicyInput.schema';
import { MedicalCenterUncheckedUpdateWithoutInsurancePolicyInputObjectSchema } from './MedicalCenterUncheckedUpdateWithoutInsurancePolicyInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.MedicalCenterUpdateOneRequiredWithoutInsurancePolicyNestedInput>;
export const MedicalCenterUpdateOneRequiredWithoutInsurancePolicyNestedInputObjectSchema: SchemaType = z
    .object({
        create: z
            .union([
                z.lazy(() => MedicalCenterCreateWithoutInsurancePolicyInputObjectSchema),
                z.lazy(() => MedicalCenterUncheckedCreateWithoutInsurancePolicyInputObjectSchema),
            ])
            .optional(),
        connectOrCreate: z.lazy(() => MedicalCenterCreateOrConnectWithoutInsurancePolicyInputObjectSchema).optional(),
        upsert: z.lazy(() => MedicalCenterUpsertWithoutInsurancePolicyInputObjectSchema).optional(),
        connect: z.lazy(() => MedicalCenterWhereUniqueInputObjectSchema).optional(),
        update: z
            .union([
                z.lazy(() => MedicalCenterUpdateToOneWithWhereWithoutInsurancePolicyInputObjectSchema),
                z.lazy(() => MedicalCenterUpdateWithoutInsurancePolicyInputObjectSchema),
                z.lazy(() => MedicalCenterUncheckedUpdateWithoutInsurancePolicyInputObjectSchema),
            ])
            .optional(),
    })
    .strict() as SchemaType;
