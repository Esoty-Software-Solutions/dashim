/* eslint-disable */
import { z } from 'zod';
import { InsurancePolicyUpdateWithoutMedicalCentersInputObjectSchema } from './InsurancePolicyUpdateWithoutMedicalCentersInput.schema';
import { InsurancePolicyUncheckedUpdateWithoutMedicalCentersInputObjectSchema } from './InsurancePolicyUncheckedUpdateWithoutMedicalCentersInput.schema';
import { InsurancePolicyCreateWithoutMedicalCentersInputObjectSchema } from './InsurancePolicyCreateWithoutMedicalCentersInput.schema';
import { InsurancePolicyUncheckedCreateWithoutMedicalCentersInputObjectSchema } from './InsurancePolicyUncheckedCreateWithoutMedicalCentersInput.schema';
import { InsurancePolicyWhereInputObjectSchema } from './InsurancePolicyWhereInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.InsurancePolicyUpsertWithoutMedicalCentersInput>;
export const InsurancePolicyUpsertWithoutMedicalCentersInputObjectSchema: SchemaType = z
    .object({
        update: z.union([
            z.lazy(() => InsurancePolicyUpdateWithoutMedicalCentersInputObjectSchema),
            z.lazy(() => InsurancePolicyUncheckedUpdateWithoutMedicalCentersInputObjectSchema),
        ]),
        create: z.union([
            z.lazy(() => InsurancePolicyCreateWithoutMedicalCentersInputObjectSchema),
            z.lazy(() => InsurancePolicyUncheckedCreateWithoutMedicalCentersInputObjectSchema),
        ]),
        where: z.lazy(() => InsurancePolicyWhereInputObjectSchema).optional(),
    })
    .strict() as SchemaType;
