/* eslint-disable */
import { z } from 'zod';
import { MedicalServiceWhereUniqueInputObjectSchema } from './MedicalServiceWhereUniqueInput.schema';
import { MedicalServiceCreateWithoutInstitutionPricingInputObjectSchema } from './MedicalServiceCreateWithoutInstitutionPricingInput.schema';
import { MedicalServiceUncheckedCreateWithoutInstitutionPricingInputObjectSchema } from './MedicalServiceUncheckedCreateWithoutInstitutionPricingInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.MedicalServiceCreateOrConnectWithoutInstitutionPricingInput>;
export const MedicalServiceCreateOrConnectWithoutInstitutionPricingInputObjectSchema: SchemaType = z
    .object({
        where: z.lazy(() => MedicalServiceWhereUniqueInputObjectSchema),
        create: z.union([
            z.lazy(() => MedicalServiceCreateWithoutInstitutionPricingInputObjectSchema),
            z.lazy(() => MedicalServiceUncheckedCreateWithoutInstitutionPricingInputObjectSchema),
        ]),
    })
    .strict() as SchemaType;
