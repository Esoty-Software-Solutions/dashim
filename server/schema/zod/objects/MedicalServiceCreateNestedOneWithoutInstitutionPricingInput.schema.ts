/* eslint-disable */
import { z } from 'zod';
import { MedicalServiceCreateWithoutInstitutionPricingInputObjectSchema } from './MedicalServiceCreateWithoutInstitutionPricingInput.schema';
import { MedicalServiceUncheckedCreateWithoutInstitutionPricingInputObjectSchema } from './MedicalServiceUncheckedCreateWithoutInstitutionPricingInput.schema';
import { MedicalServiceCreateOrConnectWithoutInstitutionPricingInputObjectSchema } from './MedicalServiceCreateOrConnectWithoutInstitutionPricingInput.schema';
import { MedicalServiceWhereUniqueInputObjectSchema } from './MedicalServiceWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.MedicalServiceCreateNestedOneWithoutInstitutionPricingInput>;
export const MedicalServiceCreateNestedOneWithoutInstitutionPricingInputObjectSchema: SchemaType = z
    .object({
        create: z
            .union([
                z.lazy(() => MedicalServiceCreateWithoutInstitutionPricingInputObjectSchema),
                z.lazy(() => MedicalServiceUncheckedCreateWithoutInstitutionPricingInputObjectSchema),
            ])
            .optional(),
        connectOrCreate: z
            .lazy(() => MedicalServiceCreateOrConnectWithoutInstitutionPricingInputObjectSchema)
            .optional(),
        connect: z.lazy(() => MedicalServiceWhereUniqueInputObjectSchema).optional(),
    })
    .strict() as SchemaType;
