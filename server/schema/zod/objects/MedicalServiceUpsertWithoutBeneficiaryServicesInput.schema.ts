/* eslint-disable */
import { z } from 'zod';
import { MedicalServiceUpdateWithoutBeneficiaryServicesInputObjectSchema } from './MedicalServiceUpdateWithoutBeneficiaryServicesInput.schema';
import { MedicalServiceUncheckedUpdateWithoutBeneficiaryServicesInputObjectSchema } from './MedicalServiceUncheckedUpdateWithoutBeneficiaryServicesInput.schema';
import { MedicalServiceCreateWithoutBeneficiaryServicesInputObjectSchema } from './MedicalServiceCreateWithoutBeneficiaryServicesInput.schema';
import { MedicalServiceUncheckedCreateWithoutBeneficiaryServicesInputObjectSchema } from './MedicalServiceUncheckedCreateWithoutBeneficiaryServicesInput.schema';
import { MedicalServiceWhereInputObjectSchema } from './MedicalServiceWhereInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.MedicalServiceUpsertWithoutBeneficiaryServicesInput>;
export const MedicalServiceUpsertWithoutBeneficiaryServicesInputObjectSchema: SchemaType = z
    .object({
        update: z.union([
            z.lazy(() => MedicalServiceUpdateWithoutBeneficiaryServicesInputObjectSchema),
            z.lazy(() => MedicalServiceUncheckedUpdateWithoutBeneficiaryServicesInputObjectSchema),
        ]),
        create: z.union([
            z.lazy(() => MedicalServiceCreateWithoutBeneficiaryServicesInputObjectSchema),
            z.lazy(() => MedicalServiceUncheckedCreateWithoutBeneficiaryServicesInputObjectSchema),
        ]),
        where: z.lazy(() => MedicalServiceWhereInputObjectSchema).optional(),
    })
    .strict() as SchemaType;
