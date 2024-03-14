/* eslint-disable */
import { z } from 'zod';
import { InstitutionCreateWithoutMedicalCenterPricingInputObjectSchema } from './InstitutionCreateWithoutMedicalCenterPricingInput.schema';
import { InstitutionUncheckedCreateWithoutMedicalCenterPricingInputObjectSchema } from './InstitutionUncheckedCreateWithoutMedicalCenterPricingInput.schema';
import { InstitutionCreateOrConnectWithoutMedicalCenterPricingInputObjectSchema } from './InstitutionCreateOrConnectWithoutMedicalCenterPricingInput.schema';
import { InstitutionWhereUniqueInputObjectSchema } from './InstitutionWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.InstitutionCreateNestedOneWithoutMedicalCenterPricingInput>;
export const InstitutionCreateNestedOneWithoutMedicalCenterPricingInputObjectSchema: SchemaType = z
    .object({
        create: z
            .union([
                z.lazy(() => InstitutionCreateWithoutMedicalCenterPricingInputObjectSchema),
                z.lazy(() => InstitutionUncheckedCreateWithoutMedicalCenterPricingInputObjectSchema),
            ])
            .optional(),
        connectOrCreate: z
            .lazy(() => InstitutionCreateOrConnectWithoutMedicalCenterPricingInputObjectSchema)
            .optional(),
        connect: z.lazy(() => InstitutionWhereUniqueInputObjectSchema).optional(),
    })
    .strict() as SchemaType;
