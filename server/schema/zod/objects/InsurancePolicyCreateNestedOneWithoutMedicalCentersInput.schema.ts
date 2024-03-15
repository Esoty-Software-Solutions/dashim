/* eslint-disable */
import { z } from 'zod';
import { InsurancePolicyCreateWithoutMedicalCentersInputObjectSchema } from './InsurancePolicyCreateWithoutMedicalCentersInput.schema';
import { InsurancePolicyUncheckedCreateWithoutMedicalCentersInputObjectSchema } from './InsurancePolicyUncheckedCreateWithoutMedicalCentersInput.schema';
import { InsurancePolicyCreateOrConnectWithoutMedicalCentersInputObjectSchema } from './InsurancePolicyCreateOrConnectWithoutMedicalCentersInput.schema';
import { InsurancePolicyWhereUniqueInputObjectSchema } from './InsurancePolicyWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.InsurancePolicyCreateNestedOneWithoutMedicalCentersInput>;
export const InsurancePolicyCreateNestedOneWithoutMedicalCentersInputObjectSchema: SchemaType = z
    .object({
        create: z
            .union([
                z.lazy(() => InsurancePolicyCreateWithoutMedicalCentersInputObjectSchema),
                z.lazy(() => InsurancePolicyUncheckedCreateWithoutMedicalCentersInputObjectSchema),
            ])
            .optional(),
        connectOrCreate: z.lazy(() => InsurancePolicyCreateOrConnectWithoutMedicalCentersInputObjectSchema).optional(),
        connect: z.lazy(() => InsurancePolicyWhereUniqueInputObjectSchema).optional(),
    })
    .strict() as SchemaType;
