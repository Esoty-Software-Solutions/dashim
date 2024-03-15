/* eslint-disable */
import { z } from 'zod';
import { BenefitPackageMedicalServiceCategoryWhereUniqueInputObjectSchema } from './BenefitPackageMedicalServiceCategoryWhereUniqueInput.schema';
import { BenefitPackageMedicalServiceCategoryUpdateWithoutBenefitPackageInputObjectSchema } from './BenefitPackageMedicalServiceCategoryUpdateWithoutBenefitPackageInput.schema';
import { BenefitPackageMedicalServiceCategoryUncheckedUpdateWithoutBenefitPackageInputObjectSchema } from './BenefitPackageMedicalServiceCategoryUncheckedUpdateWithoutBenefitPackageInput.schema';
import { BenefitPackageMedicalServiceCategoryCreateWithoutBenefitPackageInputObjectSchema } from './BenefitPackageMedicalServiceCategoryCreateWithoutBenefitPackageInput.schema';
import { BenefitPackageMedicalServiceCategoryUncheckedCreateWithoutBenefitPackageInputObjectSchema } from './BenefitPackageMedicalServiceCategoryUncheckedCreateWithoutBenefitPackageInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.BenefitPackageMedicalServiceCategoryUpsertWithWhereUniqueWithoutBenefitPackageInput>;
export const BenefitPackageMedicalServiceCategoryUpsertWithWhereUniqueWithoutBenefitPackageInputObjectSchema: SchemaType =
    z
        .object({
            where: z.lazy(() => BenefitPackageMedicalServiceCategoryWhereUniqueInputObjectSchema),
            update: z.union([
                z.lazy(() => BenefitPackageMedicalServiceCategoryUpdateWithoutBenefitPackageInputObjectSchema),
                z.lazy(() => BenefitPackageMedicalServiceCategoryUncheckedUpdateWithoutBenefitPackageInputObjectSchema),
            ]),
            create: z.union([
                z.lazy(() => BenefitPackageMedicalServiceCategoryCreateWithoutBenefitPackageInputObjectSchema),
                z.lazy(() => BenefitPackageMedicalServiceCategoryUncheckedCreateWithoutBenefitPackageInputObjectSchema),
            ]),
        })
        .strict() as SchemaType;
