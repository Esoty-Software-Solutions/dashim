/* eslint-disable */
import { z } from 'zod';
import { InsurancePolicyWhereUniqueInputObjectSchema } from './InsurancePolicyWhereUniqueInput.schema';
import { InsurancePolicyCreateWithoutMedicalCentersInputObjectSchema } from './InsurancePolicyCreateWithoutMedicalCentersInput.schema';
import { InsurancePolicyUncheckedCreateWithoutMedicalCentersInputObjectSchema } from './InsurancePolicyUncheckedCreateWithoutMedicalCentersInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.InsurancePolicyCreateOrConnectWithoutMedicalCentersInput>;
export const InsurancePolicyCreateOrConnectWithoutMedicalCentersInputObjectSchema: SchemaType = z
    .object({
        where: z.lazy(() => InsurancePolicyWhereUniqueInputObjectSchema),
        create: z.union([
            z.lazy(() => InsurancePolicyCreateWithoutMedicalCentersInputObjectSchema),
            z.lazy(() => InsurancePolicyUncheckedCreateWithoutMedicalCentersInputObjectSchema),
        ]),
    })
    .strict() as SchemaType;
