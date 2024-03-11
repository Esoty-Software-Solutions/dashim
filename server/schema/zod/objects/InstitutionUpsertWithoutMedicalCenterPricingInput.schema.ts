/* eslint-disable */
import { z } from 'zod';
import { InstitutionUpdateWithoutMedicalCenterPricingInputObjectSchema } from './InstitutionUpdateWithoutMedicalCenterPricingInput.schema';
import { InstitutionUncheckedUpdateWithoutMedicalCenterPricingInputObjectSchema } from './InstitutionUncheckedUpdateWithoutMedicalCenterPricingInput.schema';
import { InstitutionCreateWithoutMedicalCenterPricingInputObjectSchema } from './InstitutionCreateWithoutMedicalCenterPricingInput.schema';
import { InstitutionUncheckedCreateWithoutMedicalCenterPricingInputObjectSchema } from './InstitutionUncheckedCreateWithoutMedicalCenterPricingInput.schema';
import { InstitutionWhereInputObjectSchema } from './InstitutionWhereInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.InstitutionUpsertWithoutMedicalCenterPricingInput>;
export const InstitutionUpsertWithoutMedicalCenterPricingInputObjectSchema: SchemaType = z
    .object({
        update: z.union([
            z.lazy(() => InstitutionUpdateWithoutMedicalCenterPricingInputObjectSchema),
            z.lazy(() => InstitutionUncheckedUpdateWithoutMedicalCenterPricingInputObjectSchema),
        ]),
        create: z.union([
            z.lazy(() => InstitutionCreateWithoutMedicalCenterPricingInputObjectSchema),
            z.lazy(() => InstitutionUncheckedCreateWithoutMedicalCenterPricingInputObjectSchema),
        ]),
        where: z.lazy(() => InstitutionWhereInputObjectSchema).optional(),
    })
    .strict() as SchemaType;
