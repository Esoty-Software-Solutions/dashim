/* eslint-disable */
import { z } from 'zod';
import { InsurancePolicyMedicalCenterCreateWithoutInsurancePolicyInputObjectSchema } from './InsurancePolicyMedicalCenterCreateWithoutInsurancePolicyInput.schema';
import { InsurancePolicyMedicalCenterUncheckedCreateWithoutInsurancePolicyInputObjectSchema } from './InsurancePolicyMedicalCenterUncheckedCreateWithoutInsurancePolicyInput.schema';
import { InsurancePolicyMedicalCenterCreateOrConnectWithoutInsurancePolicyInputObjectSchema } from './InsurancePolicyMedicalCenterCreateOrConnectWithoutInsurancePolicyInput.schema';
import { InsurancePolicyMedicalCenterCreateManyInsurancePolicyInputEnvelopeObjectSchema } from './InsurancePolicyMedicalCenterCreateManyInsurancePolicyInputEnvelope.schema';
import { InsurancePolicyMedicalCenterWhereUniqueInputObjectSchema } from './InsurancePolicyMedicalCenterWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.InsurancePolicyMedicalCenterCreateNestedManyWithoutInsurancePolicyInput>;
export const InsurancePolicyMedicalCenterCreateNestedManyWithoutInsurancePolicyInputObjectSchema: SchemaType = z
    .object({
        create: z
            .union([
                z.lazy(() => InsurancePolicyMedicalCenterCreateWithoutInsurancePolicyInputObjectSchema),
                z.lazy(() => InsurancePolicyMedicalCenterCreateWithoutInsurancePolicyInputObjectSchema).array(),
                z.lazy(() => InsurancePolicyMedicalCenterUncheckedCreateWithoutInsurancePolicyInputObjectSchema),
                z
                    .lazy(() => InsurancePolicyMedicalCenterUncheckedCreateWithoutInsurancePolicyInputObjectSchema)
                    .array(),
            ])
            .optional(),
        connectOrCreate: z
            .union([
                z.lazy(() => InsurancePolicyMedicalCenterCreateOrConnectWithoutInsurancePolicyInputObjectSchema),
                z
                    .lazy(() => InsurancePolicyMedicalCenterCreateOrConnectWithoutInsurancePolicyInputObjectSchema)
                    .array(),
            ])
            .optional(),
        createMany: z
            .lazy(() => InsurancePolicyMedicalCenterCreateManyInsurancePolicyInputEnvelopeObjectSchema)
            .optional(),
        connect: z
            .union([
                z.lazy(() => InsurancePolicyMedicalCenterWhereUniqueInputObjectSchema),
                z.lazy(() => InsurancePolicyMedicalCenterWhereUniqueInputObjectSchema).array(),
            ])
            .optional(),
    })
    .strict() as SchemaType;
