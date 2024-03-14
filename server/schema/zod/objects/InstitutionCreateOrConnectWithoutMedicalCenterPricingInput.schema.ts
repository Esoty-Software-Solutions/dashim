/* eslint-disable */
import { z } from 'zod';
import { InstitutionWhereUniqueInputObjectSchema } from './InstitutionWhereUniqueInput.schema';
import { InstitutionCreateWithoutMedicalCenterPricingInputObjectSchema } from './InstitutionCreateWithoutMedicalCenterPricingInput.schema';
import { InstitutionUncheckedCreateWithoutMedicalCenterPricingInputObjectSchema } from './InstitutionUncheckedCreateWithoutMedicalCenterPricingInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.InstitutionCreateOrConnectWithoutMedicalCenterPricingInput>;
export const InstitutionCreateOrConnectWithoutMedicalCenterPricingInputObjectSchema: SchemaType = z
    .object({
        where: z.lazy(() => InstitutionWhereUniqueInputObjectSchema),
        create: z.union([
            z.lazy(() => InstitutionCreateWithoutMedicalCenterPricingInputObjectSchema),
            z.lazy(() => InstitutionUncheckedCreateWithoutMedicalCenterPricingInputObjectSchema),
        ]),
    })
    .strict() as SchemaType;
