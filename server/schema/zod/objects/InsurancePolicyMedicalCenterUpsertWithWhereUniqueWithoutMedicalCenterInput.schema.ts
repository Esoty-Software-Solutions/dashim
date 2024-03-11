/* eslint-disable */
import { z } from 'zod';
import { InsurancePolicyMedicalCenterWhereUniqueInputObjectSchema } from './InsurancePolicyMedicalCenterWhereUniqueInput.schema';
import { InsurancePolicyMedicalCenterUpdateWithoutMedicalCenterInputObjectSchema } from './InsurancePolicyMedicalCenterUpdateWithoutMedicalCenterInput.schema';
import { InsurancePolicyMedicalCenterUncheckedUpdateWithoutMedicalCenterInputObjectSchema } from './InsurancePolicyMedicalCenterUncheckedUpdateWithoutMedicalCenterInput.schema';
import { InsurancePolicyMedicalCenterCreateWithoutMedicalCenterInputObjectSchema } from './InsurancePolicyMedicalCenterCreateWithoutMedicalCenterInput.schema';
import { InsurancePolicyMedicalCenterUncheckedCreateWithoutMedicalCenterInputObjectSchema } from './InsurancePolicyMedicalCenterUncheckedCreateWithoutMedicalCenterInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.InsurancePolicyMedicalCenterUpsertWithWhereUniqueWithoutMedicalCenterInput>;
export const InsurancePolicyMedicalCenterUpsertWithWhereUniqueWithoutMedicalCenterInputObjectSchema: SchemaType = z
    .object({
        where: z.lazy(() => InsurancePolicyMedicalCenterWhereUniqueInputObjectSchema),
        update: z.union([
            z.lazy(() => InsurancePolicyMedicalCenterUpdateWithoutMedicalCenterInputObjectSchema),
            z.lazy(() => InsurancePolicyMedicalCenterUncheckedUpdateWithoutMedicalCenterInputObjectSchema),
        ]),
        create: z.union([
            z.lazy(() => InsurancePolicyMedicalCenterCreateWithoutMedicalCenterInputObjectSchema),
            z.lazy(() => InsurancePolicyMedicalCenterUncheckedCreateWithoutMedicalCenterInputObjectSchema),
        ]),
    })
    .strict() as SchemaType;
