/* eslint-disable */
import { z } from 'zod';
import { BenefitPackageWhereInputObjectSchema } from './BenefitPackageWhereInput.schema';
import { BenefitPackageUpdateWithoutMedicalServiceCategoriesInputObjectSchema } from './BenefitPackageUpdateWithoutMedicalServiceCategoriesInput.schema';
import { BenefitPackageUncheckedUpdateWithoutMedicalServiceCategoriesInputObjectSchema } from './BenefitPackageUncheckedUpdateWithoutMedicalServiceCategoriesInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.BenefitPackageUpdateToOneWithWhereWithoutMedicalServiceCategoriesInput>;
export const BenefitPackageUpdateToOneWithWhereWithoutMedicalServiceCategoriesInputObjectSchema: SchemaType = z
    .object({
        where: z.lazy(() => BenefitPackageWhereInputObjectSchema).optional(),
        data: z.union([
            z.lazy(() => BenefitPackageUpdateWithoutMedicalServiceCategoriesInputObjectSchema),
            z.lazy(() => BenefitPackageUncheckedUpdateWithoutMedicalServiceCategoriesInputObjectSchema),
        ]),
    })
    .strict() as SchemaType;
