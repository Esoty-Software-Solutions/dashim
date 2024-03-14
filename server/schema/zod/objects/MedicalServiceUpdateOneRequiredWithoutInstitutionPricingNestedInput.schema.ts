/* eslint-disable */
import { z } from 'zod';
import { MedicalServiceCreateWithoutInstitutionPricingInputObjectSchema } from './MedicalServiceCreateWithoutInstitutionPricingInput.schema';
import { MedicalServiceUncheckedCreateWithoutInstitutionPricingInputObjectSchema } from './MedicalServiceUncheckedCreateWithoutInstitutionPricingInput.schema';
import { MedicalServiceCreateOrConnectWithoutInstitutionPricingInputObjectSchema } from './MedicalServiceCreateOrConnectWithoutInstitutionPricingInput.schema';
import { MedicalServiceUpsertWithoutInstitutionPricingInputObjectSchema } from './MedicalServiceUpsertWithoutInstitutionPricingInput.schema';
import { MedicalServiceWhereUniqueInputObjectSchema } from './MedicalServiceWhereUniqueInput.schema';
import { MedicalServiceUpdateToOneWithWhereWithoutInstitutionPricingInputObjectSchema } from './MedicalServiceUpdateToOneWithWhereWithoutInstitutionPricingInput.schema';
import { MedicalServiceUpdateWithoutInstitutionPricingInputObjectSchema } from './MedicalServiceUpdateWithoutInstitutionPricingInput.schema';
import { MedicalServiceUncheckedUpdateWithoutInstitutionPricingInputObjectSchema } from './MedicalServiceUncheckedUpdateWithoutInstitutionPricingInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.MedicalServiceUpdateOneRequiredWithoutInstitutionPricingNestedInput>;
export const MedicalServiceUpdateOneRequiredWithoutInstitutionPricingNestedInputObjectSchema: SchemaType = z
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
        upsert: z.lazy(() => MedicalServiceUpsertWithoutInstitutionPricingInputObjectSchema).optional(),
        connect: z.lazy(() => MedicalServiceWhereUniqueInputObjectSchema).optional(),
        update: z
            .union([
                z.lazy(() => MedicalServiceUpdateToOneWithWhereWithoutInstitutionPricingInputObjectSchema),
                z.lazy(() => MedicalServiceUpdateWithoutInstitutionPricingInputObjectSchema),
                z.lazy(() => MedicalServiceUncheckedUpdateWithoutInstitutionPricingInputObjectSchema),
            ])
            .optional(),
    })
    .strict() as SchemaType;
