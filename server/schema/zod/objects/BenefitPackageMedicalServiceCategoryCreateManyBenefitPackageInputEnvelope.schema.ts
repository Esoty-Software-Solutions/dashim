/* eslint-disable */
import { z } from 'zod';
import { BenefitPackageMedicalServiceCategoryCreateManyBenefitPackageInputObjectSchema } from './BenefitPackageMedicalServiceCategoryCreateManyBenefitPackageInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.BenefitPackageMedicalServiceCategoryCreateManyBenefitPackageInputEnvelope>;
export const BenefitPackageMedicalServiceCategoryCreateManyBenefitPackageInputEnvelopeObjectSchema: SchemaType = z
    .object({
        data: z.union([
            z.lazy(() => BenefitPackageMedicalServiceCategoryCreateManyBenefitPackageInputObjectSchema),
            z.lazy(() => BenefitPackageMedicalServiceCategoryCreateManyBenefitPackageInputObjectSchema).array(),
        ]),
        skipDuplicates: z.boolean().optional(),
    })
    .strict() as SchemaType;
