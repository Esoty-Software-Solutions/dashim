/* eslint-disable */
import { z } from 'zod';
import { BenefitPackageMedicalServiceCategoryWhereUniqueInputObjectSchema } from './BenefitPackageMedicalServiceCategoryWhereUniqueInput.schema';
import { BenefitPackageMedicalServiceCategoryUpdateWithoutMedicalServiceCategoryInputObjectSchema } from './BenefitPackageMedicalServiceCategoryUpdateWithoutMedicalServiceCategoryInput.schema';
import { BenefitPackageMedicalServiceCategoryUncheckedUpdateWithoutMedicalServiceCategoryInputObjectSchema } from './BenefitPackageMedicalServiceCategoryUncheckedUpdateWithoutMedicalServiceCategoryInput.schema';
import { BenefitPackageMedicalServiceCategoryCreateWithoutMedicalServiceCategoryInputObjectSchema } from './BenefitPackageMedicalServiceCategoryCreateWithoutMedicalServiceCategoryInput.schema';
import { BenefitPackageMedicalServiceCategoryUncheckedCreateWithoutMedicalServiceCategoryInputObjectSchema } from './BenefitPackageMedicalServiceCategoryUncheckedCreateWithoutMedicalServiceCategoryInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType =
    z.ZodType<Prisma.BenefitPackageMedicalServiceCategoryUpsertWithWhereUniqueWithoutMedicalServiceCategoryInput>;
export const BenefitPackageMedicalServiceCategoryUpsertWithWhereUniqueWithoutMedicalServiceCategoryInputObjectSchema: SchemaType =
    z
        .object({
            where: z.lazy(() => BenefitPackageMedicalServiceCategoryWhereUniqueInputObjectSchema),
            update: z.union([
                z.lazy(() => BenefitPackageMedicalServiceCategoryUpdateWithoutMedicalServiceCategoryInputObjectSchema),
                z.lazy(
                    () =>
                        BenefitPackageMedicalServiceCategoryUncheckedUpdateWithoutMedicalServiceCategoryInputObjectSchema,
                ),
            ]),
            create: z.union([
                z.lazy(() => BenefitPackageMedicalServiceCategoryCreateWithoutMedicalServiceCategoryInputObjectSchema),
                z.lazy(
                    () =>
                        BenefitPackageMedicalServiceCategoryUncheckedCreateWithoutMedicalServiceCategoryInputObjectSchema,
                ),
            ]),
        })
        .strict() as SchemaType;
