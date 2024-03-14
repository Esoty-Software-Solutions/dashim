/* eslint-disable */
import { z } from 'zod';
import { MedicalServiceUpdateWithoutInstitutionPricingInputObjectSchema } from './MedicalServiceUpdateWithoutInstitutionPricingInput.schema';
import { MedicalServiceUncheckedUpdateWithoutInstitutionPricingInputObjectSchema } from './MedicalServiceUncheckedUpdateWithoutInstitutionPricingInput.schema';
import { MedicalServiceCreateWithoutInstitutionPricingInputObjectSchema } from './MedicalServiceCreateWithoutInstitutionPricingInput.schema';
import { MedicalServiceUncheckedCreateWithoutInstitutionPricingInputObjectSchema } from './MedicalServiceUncheckedCreateWithoutInstitutionPricingInput.schema';
import { MedicalServiceWhereInputObjectSchema } from './MedicalServiceWhereInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.MedicalServiceUpsertWithoutInstitutionPricingInput>;
export const MedicalServiceUpsertWithoutInstitutionPricingInputObjectSchema: SchemaType = z
    .object({
        update: z.union([
            z.lazy(() => MedicalServiceUpdateWithoutInstitutionPricingInputObjectSchema),
            z.lazy(() => MedicalServiceUncheckedUpdateWithoutInstitutionPricingInputObjectSchema),
        ]),
        create: z.union([
            z.lazy(() => MedicalServiceCreateWithoutInstitutionPricingInputObjectSchema),
            z.lazy(() => MedicalServiceUncheckedCreateWithoutInstitutionPricingInputObjectSchema),
        ]),
        where: z.lazy(() => MedicalServiceWhereInputObjectSchema).optional(),
    })
    .strict() as SchemaType;
