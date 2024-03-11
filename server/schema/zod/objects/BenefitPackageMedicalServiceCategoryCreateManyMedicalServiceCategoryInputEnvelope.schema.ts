/* eslint-disable */
import { z } from 'zod';
import { BenefitPackageMedicalServiceCategoryCreateManyMedicalServiceCategoryInputObjectSchema } from './BenefitPackageMedicalServiceCategoryCreateManyMedicalServiceCategoryInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.BenefitPackageMedicalServiceCategoryCreateManyMedicalServiceCategoryInputEnvelope>;
export const BenefitPackageMedicalServiceCategoryCreateManyMedicalServiceCategoryInputEnvelopeObjectSchema: SchemaType =
    z
        .object({
            data: z.union([
                z.lazy(() => BenefitPackageMedicalServiceCategoryCreateManyMedicalServiceCategoryInputObjectSchema),
                z
                    .lazy(() => BenefitPackageMedicalServiceCategoryCreateManyMedicalServiceCategoryInputObjectSchema)
                    .array(),
            ]),
            skipDuplicates: z.boolean().optional(),
        })
        .strict() as SchemaType;
