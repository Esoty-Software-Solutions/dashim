/* eslint-disable */
import { z } from 'zod';
import { MedicalServiceWhereInputObjectSchema } from './MedicalServiceWhereInput.schema';
import { MedicalServiceUpdateWithoutBeneficiaryServicesInputObjectSchema } from './MedicalServiceUpdateWithoutBeneficiaryServicesInput.schema';
import { MedicalServiceUncheckedUpdateWithoutBeneficiaryServicesInputObjectSchema } from './MedicalServiceUncheckedUpdateWithoutBeneficiaryServicesInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.MedicalServiceUpdateToOneWithWhereWithoutBeneficiaryServicesInput>;
export const MedicalServiceUpdateToOneWithWhereWithoutBeneficiaryServicesInputObjectSchema: SchemaType = z
    .object({
        where: z.lazy(() => MedicalServiceWhereInputObjectSchema).optional(),
        data: z.union([
            z.lazy(() => MedicalServiceUpdateWithoutBeneficiaryServicesInputObjectSchema),
            z.lazy(() => MedicalServiceUncheckedUpdateWithoutBeneficiaryServicesInputObjectSchema),
        ]),
    })
    .strict() as SchemaType;
