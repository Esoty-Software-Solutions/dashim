/* eslint-disable */
import { z } from 'zod';
import { InstitutionWhereInputObjectSchema } from './InstitutionWhereInput.schema';
import { InstitutionUpdateWithoutMedicalCenterPricingInputObjectSchema } from './InstitutionUpdateWithoutMedicalCenterPricingInput.schema';
import { InstitutionUncheckedUpdateWithoutMedicalCenterPricingInputObjectSchema } from './InstitutionUncheckedUpdateWithoutMedicalCenterPricingInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.InstitutionUpdateToOneWithWhereWithoutMedicalCenterPricingInput>;
export const InstitutionUpdateToOneWithWhereWithoutMedicalCenterPricingInputObjectSchema: SchemaType = z
    .object({
        where: z.lazy(() => InstitutionWhereInputObjectSchema).optional(),
        data: z.union([
            z.lazy(() => InstitutionUpdateWithoutMedicalCenterPricingInputObjectSchema),
            z.lazy(() => InstitutionUncheckedUpdateWithoutMedicalCenterPricingInputObjectSchema),
        ]),
    })
    .strict() as SchemaType;
