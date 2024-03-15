/* eslint-disable */
import { z } from 'zod';
import { MedicalServiceWhereInputObjectSchema } from './MedicalServiceWhereInput.schema';
import { MedicalServiceUpdateWithoutInstitutionPricingInputObjectSchema } from './MedicalServiceUpdateWithoutInstitutionPricingInput.schema';
import { MedicalServiceUncheckedUpdateWithoutInstitutionPricingInputObjectSchema } from './MedicalServiceUncheckedUpdateWithoutInstitutionPricingInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.MedicalServiceUpdateToOneWithWhereWithoutInstitutionPricingInput>;
export const MedicalServiceUpdateToOneWithWhereWithoutInstitutionPricingInputObjectSchema: SchemaType = z
    .object({
        where: z.lazy(() => MedicalServiceWhereInputObjectSchema).optional(),
        data: z.union([
            z.lazy(() => MedicalServiceUpdateWithoutInstitutionPricingInputObjectSchema),
            z.lazy(() => MedicalServiceUncheckedUpdateWithoutInstitutionPricingInputObjectSchema),
        ]),
    })
    .strict() as SchemaType;
