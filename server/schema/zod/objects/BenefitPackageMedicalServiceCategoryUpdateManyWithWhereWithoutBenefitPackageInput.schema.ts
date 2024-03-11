/* eslint-disable */
import { z } from 'zod';
import { BenefitPackageMedicalServiceCategoryScalarWhereInputObjectSchema } from './BenefitPackageMedicalServiceCategoryScalarWhereInput.schema';
import { BenefitPackageMedicalServiceCategoryUpdateManyMutationInputObjectSchema } from './BenefitPackageMedicalServiceCategoryUpdateManyMutationInput.schema';
import { BenefitPackageMedicalServiceCategoryUncheckedUpdateManyWithoutBenefitPackageInputObjectSchema } from './BenefitPackageMedicalServiceCategoryUncheckedUpdateManyWithoutBenefitPackageInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.BenefitPackageMedicalServiceCategoryUpdateManyWithWhereWithoutBenefitPackageInput>;
export const BenefitPackageMedicalServiceCategoryUpdateManyWithWhereWithoutBenefitPackageInputObjectSchema: SchemaType =
    z
        .object({
            where: z.lazy(() => BenefitPackageMedicalServiceCategoryScalarWhereInputObjectSchema),
            data: z.union([
                z.lazy(() => BenefitPackageMedicalServiceCategoryUpdateManyMutationInputObjectSchema),
                z.lazy(
                    () => BenefitPackageMedicalServiceCategoryUncheckedUpdateManyWithoutBenefitPackageInputObjectSchema,
                ),
            ]),
        })
        .strict() as SchemaType;
