/* eslint-disable */
import { z } from 'zod';
import { MedicalServiceWhereUniqueInputObjectSchema } from './MedicalServiceWhereUniqueInput.schema';
import { MedicalServiceCreateWithoutBeneficiaryServicesInputObjectSchema } from './MedicalServiceCreateWithoutBeneficiaryServicesInput.schema';
import { MedicalServiceUncheckedCreateWithoutBeneficiaryServicesInputObjectSchema } from './MedicalServiceUncheckedCreateWithoutBeneficiaryServicesInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.MedicalServiceCreateOrConnectWithoutBeneficiaryServicesInput>;
export const MedicalServiceCreateOrConnectWithoutBeneficiaryServicesInputObjectSchema: SchemaType = z
    .object({
        where: z.lazy(() => MedicalServiceWhereUniqueInputObjectSchema),
        create: z.union([
            z.lazy(() => MedicalServiceCreateWithoutBeneficiaryServicesInputObjectSchema),
            z.lazy(() => MedicalServiceUncheckedCreateWithoutBeneficiaryServicesInputObjectSchema),
        ]),
    })
    .strict() as SchemaType;
