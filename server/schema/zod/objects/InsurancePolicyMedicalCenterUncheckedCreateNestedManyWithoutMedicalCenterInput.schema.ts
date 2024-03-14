/* eslint-disable */
import { z } from 'zod';
import { InsurancePolicyMedicalCenterCreateWithoutMedicalCenterInputObjectSchema } from './InsurancePolicyMedicalCenterCreateWithoutMedicalCenterInput.schema';
import { InsurancePolicyMedicalCenterUncheckedCreateWithoutMedicalCenterInputObjectSchema } from './InsurancePolicyMedicalCenterUncheckedCreateWithoutMedicalCenterInput.schema';
import { InsurancePolicyMedicalCenterCreateOrConnectWithoutMedicalCenterInputObjectSchema } from './InsurancePolicyMedicalCenterCreateOrConnectWithoutMedicalCenterInput.schema';
import { InsurancePolicyMedicalCenterCreateManyMedicalCenterInputEnvelopeObjectSchema } from './InsurancePolicyMedicalCenterCreateManyMedicalCenterInputEnvelope.schema';
import { InsurancePolicyMedicalCenterWhereUniqueInputObjectSchema } from './InsurancePolicyMedicalCenterWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.InsurancePolicyMedicalCenterUncheckedCreateNestedManyWithoutMedicalCenterInput>;
export const InsurancePolicyMedicalCenterUncheckedCreateNestedManyWithoutMedicalCenterInputObjectSchema: SchemaType = z
    .object({
        create: z
            .union([
                z.lazy(() => InsurancePolicyMedicalCenterCreateWithoutMedicalCenterInputObjectSchema),
                z.lazy(() => InsurancePolicyMedicalCenterCreateWithoutMedicalCenterInputObjectSchema).array(),
                z.lazy(() => InsurancePolicyMedicalCenterUncheckedCreateWithoutMedicalCenterInputObjectSchema),
                z.lazy(() => InsurancePolicyMedicalCenterUncheckedCreateWithoutMedicalCenterInputObjectSchema).array(),
            ])
            .optional(),
        connectOrCreate: z
            .union([
                z.lazy(() => InsurancePolicyMedicalCenterCreateOrConnectWithoutMedicalCenterInputObjectSchema),
                z.lazy(() => InsurancePolicyMedicalCenterCreateOrConnectWithoutMedicalCenterInputObjectSchema).array(),
            ])
            .optional(),
        createMany: z
            .lazy(() => InsurancePolicyMedicalCenterCreateManyMedicalCenterInputEnvelopeObjectSchema)
            .optional(),
        connect: z
            .union([
                z.lazy(() => InsurancePolicyMedicalCenterWhereUniqueInputObjectSchema),
                z.lazy(() => InsurancePolicyMedicalCenterWhereUniqueInputObjectSchema).array(),
            ])
            .optional(),
    })
    .strict() as SchemaType;
