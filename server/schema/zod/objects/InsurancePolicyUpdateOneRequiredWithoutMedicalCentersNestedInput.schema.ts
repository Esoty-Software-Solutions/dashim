/* eslint-disable */
import { z } from 'zod';
import { InsurancePolicyCreateWithoutMedicalCentersInputObjectSchema } from './InsurancePolicyCreateWithoutMedicalCentersInput.schema';
import { InsurancePolicyUncheckedCreateWithoutMedicalCentersInputObjectSchema } from './InsurancePolicyUncheckedCreateWithoutMedicalCentersInput.schema';
import { InsurancePolicyCreateOrConnectWithoutMedicalCentersInputObjectSchema } from './InsurancePolicyCreateOrConnectWithoutMedicalCentersInput.schema';
import { InsurancePolicyUpsertWithoutMedicalCentersInputObjectSchema } from './InsurancePolicyUpsertWithoutMedicalCentersInput.schema';
import { InsurancePolicyWhereUniqueInputObjectSchema } from './InsurancePolicyWhereUniqueInput.schema';
import { InsurancePolicyUpdateToOneWithWhereWithoutMedicalCentersInputObjectSchema } from './InsurancePolicyUpdateToOneWithWhereWithoutMedicalCentersInput.schema';
import { InsurancePolicyUpdateWithoutMedicalCentersInputObjectSchema } from './InsurancePolicyUpdateWithoutMedicalCentersInput.schema';
import { InsurancePolicyUncheckedUpdateWithoutMedicalCentersInputObjectSchema } from './InsurancePolicyUncheckedUpdateWithoutMedicalCentersInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.InsurancePolicyUpdateOneRequiredWithoutMedicalCentersNestedInput>;
export const InsurancePolicyUpdateOneRequiredWithoutMedicalCentersNestedInputObjectSchema: SchemaType = z
    .object({
        create: z
            .union([
                z.lazy(() => InsurancePolicyCreateWithoutMedicalCentersInputObjectSchema),
                z.lazy(() => InsurancePolicyUncheckedCreateWithoutMedicalCentersInputObjectSchema),
            ])
            .optional(),
        connectOrCreate: z.lazy(() => InsurancePolicyCreateOrConnectWithoutMedicalCentersInputObjectSchema).optional(),
        upsert: z.lazy(() => InsurancePolicyUpsertWithoutMedicalCentersInputObjectSchema).optional(),
        connect: z.lazy(() => InsurancePolicyWhereUniqueInputObjectSchema).optional(),
        update: z
            .union([
                z.lazy(() => InsurancePolicyUpdateToOneWithWhereWithoutMedicalCentersInputObjectSchema),
                z.lazy(() => InsurancePolicyUpdateWithoutMedicalCentersInputObjectSchema),
                z.lazy(() => InsurancePolicyUncheckedUpdateWithoutMedicalCentersInputObjectSchema),
            ])
            .optional(),
    })
    .strict() as SchemaType;
