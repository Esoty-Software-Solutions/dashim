/* eslint-disable */
import { z } from 'zod';
import { BenefitPackageMedicalServiceCategoryWhereUniqueInputObjectSchema } from './BenefitPackageMedicalServiceCategoryWhereUniqueInput.schema';
import { BenefitPackageMedicalServiceCategoryCreateWithoutBenefitPackageInputObjectSchema } from './BenefitPackageMedicalServiceCategoryCreateWithoutBenefitPackageInput.schema';
import { BenefitPackageMedicalServiceCategoryUncheckedCreateWithoutBenefitPackageInputObjectSchema } from './BenefitPackageMedicalServiceCategoryUncheckedCreateWithoutBenefitPackageInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.BenefitPackageMedicalServiceCategoryCreateOrConnectWithoutBenefitPackageInput>;
export const BenefitPackageMedicalServiceCategoryCreateOrConnectWithoutBenefitPackageInputObjectSchema: SchemaType = z
    .object({
        where: z.lazy(() => BenefitPackageMedicalServiceCategoryWhereUniqueInputObjectSchema),
        create: z.union([
            z.lazy(() => BenefitPackageMedicalServiceCategoryCreateWithoutBenefitPackageInputObjectSchema),
            z.lazy(() => BenefitPackageMedicalServiceCategoryUncheckedCreateWithoutBenefitPackageInputObjectSchema),
        ]),
    })
    .strict() as SchemaType;
