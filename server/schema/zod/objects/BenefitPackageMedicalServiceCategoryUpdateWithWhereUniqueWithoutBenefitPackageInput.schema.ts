/* eslint-disable */
import { z } from 'zod';
import { BenefitPackageMedicalServiceCategoryWhereUniqueInputObjectSchema } from './BenefitPackageMedicalServiceCategoryWhereUniqueInput.schema';
import { BenefitPackageMedicalServiceCategoryUpdateWithoutBenefitPackageInputObjectSchema } from './BenefitPackageMedicalServiceCategoryUpdateWithoutBenefitPackageInput.schema';
import { BenefitPackageMedicalServiceCategoryUncheckedUpdateWithoutBenefitPackageInputObjectSchema } from './BenefitPackageMedicalServiceCategoryUncheckedUpdateWithoutBenefitPackageInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.BenefitPackageMedicalServiceCategoryUpdateWithWhereUniqueWithoutBenefitPackageInput>;
export const BenefitPackageMedicalServiceCategoryUpdateWithWhereUniqueWithoutBenefitPackageInputObjectSchema: SchemaType =
    z
        .object({
            where: z.lazy(() => BenefitPackageMedicalServiceCategoryWhereUniqueInputObjectSchema),
            data: z.union([
                z.lazy(() => BenefitPackageMedicalServiceCategoryUpdateWithoutBenefitPackageInputObjectSchema),
                z.lazy(() => BenefitPackageMedicalServiceCategoryUncheckedUpdateWithoutBenefitPackageInputObjectSchema),
            ]),
        })
        .strict() as SchemaType;
