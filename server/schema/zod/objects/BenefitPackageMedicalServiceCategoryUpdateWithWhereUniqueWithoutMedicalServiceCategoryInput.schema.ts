/* eslint-disable */
import { z } from 'zod';
import { BenefitPackageMedicalServiceCategoryWhereUniqueInputObjectSchema } from './BenefitPackageMedicalServiceCategoryWhereUniqueInput.schema';
import { BenefitPackageMedicalServiceCategoryUpdateWithoutMedicalServiceCategoryInputObjectSchema } from './BenefitPackageMedicalServiceCategoryUpdateWithoutMedicalServiceCategoryInput.schema';
import { BenefitPackageMedicalServiceCategoryUncheckedUpdateWithoutMedicalServiceCategoryInputObjectSchema } from './BenefitPackageMedicalServiceCategoryUncheckedUpdateWithoutMedicalServiceCategoryInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType =
    z.ZodType<Prisma.BenefitPackageMedicalServiceCategoryUpdateWithWhereUniqueWithoutMedicalServiceCategoryInput>;
export const BenefitPackageMedicalServiceCategoryUpdateWithWhereUniqueWithoutMedicalServiceCategoryInputObjectSchema: SchemaType =
    z
        .object({
            where: z.lazy(() => BenefitPackageMedicalServiceCategoryWhereUniqueInputObjectSchema),
            data: z.union([
                z.lazy(() => BenefitPackageMedicalServiceCategoryUpdateWithoutMedicalServiceCategoryInputObjectSchema),
                z.lazy(
                    () =>
                        BenefitPackageMedicalServiceCategoryUncheckedUpdateWithoutMedicalServiceCategoryInputObjectSchema,
                ),
            ]),
        })
        .strict() as SchemaType;
