/* eslint-disable */
import { z } from 'zod';
import { BenefitPackageUpdateWithoutMedicalServiceCategoriesInputObjectSchema } from './BenefitPackageUpdateWithoutMedicalServiceCategoriesInput.schema';
import { BenefitPackageUncheckedUpdateWithoutMedicalServiceCategoriesInputObjectSchema } from './BenefitPackageUncheckedUpdateWithoutMedicalServiceCategoriesInput.schema';
import { BenefitPackageCreateWithoutMedicalServiceCategoriesInputObjectSchema } from './BenefitPackageCreateWithoutMedicalServiceCategoriesInput.schema';
import { BenefitPackageUncheckedCreateWithoutMedicalServiceCategoriesInputObjectSchema } from './BenefitPackageUncheckedCreateWithoutMedicalServiceCategoriesInput.schema';
import { BenefitPackageWhereInputObjectSchema } from './BenefitPackageWhereInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.BenefitPackageUpsertWithoutMedicalServiceCategoriesInput>;
export const BenefitPackageUpsertWithoutMedicalServiceCategoriesInputObjectSchema: SchemaType = z
    .object({
        update: z.union([
            z.lazy(() => BenefitPackageUpdateWithoutMedicalServiceCategoriesInputObjectSchema),
            z.lazy(() => BenefitPackageUncheckedUpdateWithoutMedicalServiceCategoriesInputObjectSchema),
        ]),
        create: z.union([
            z.lazy(() => BenefitPackageCreateWithoutMedicalServiceCategoriesInputObjectSchema),
            z.lazy(() => BenefitPackageUncheckedCreateWithoutMedicalServiceCategoriesInputObjectSchema),
        ]),
        where: z.lazy(() => BenefitPackageWhereInputObjectSchema).optional(),
    })
    .strict() as SchemaType;
