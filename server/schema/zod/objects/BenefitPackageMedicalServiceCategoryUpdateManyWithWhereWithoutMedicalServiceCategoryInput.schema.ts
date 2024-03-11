/* eslint-disable */
import { z } from 'zod';
import { BenefitPackageMedicalServiceCategoryScalarWhereInputObjectSchema } from './BenefitPackageMedicalServiceCategoryScalarWhereInput.schema';
import { BenefitPackageMedicalServiceCategoryUpdateManyMutationInputObjectSchema } from './BenefitPackageMedicalServiceCategoryUpdateManyMutationInput.schema';
import { BenefitPackageMedicalServiceCategoryUncheckedUpdateManyWithoutMedicalServiceCategoryInputObjectSchema } from './BenefitPackageMedicalServiceCategoryUncheckedUpdateManyWithoutMedicalServiceCategoryInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType =
    z.ZodType<Prisma.BenefitPackageMedicalServiceCategoryUpdateManyWithWhereWithoutMedicalServiceCategoryInput>;
export const BenefitPackageMedicalServiceCategoryUpdateManyWithWhereWithoutMedicalServiceCategoryInputObjectSchema: SchemaType =
    z
        .object({
            where: z.lazy(() => BenefitPackageMedicalServiceCategoryScalarWhereInputObjectSchema),
            data: z.union([
                z.lazy(() => BenefitPackageMedicalServiceCategoryUpdateManyMutationInputObjectSchema),
                z.lazy(
                    () =>
                        BenefitPackageMedicalServiceCategoryUncheckedUpdateManyWithoutMedicalServiceCategoryInputObjectSchema,
                ),
            ]),
        })
        .strict() as SchemaType;
