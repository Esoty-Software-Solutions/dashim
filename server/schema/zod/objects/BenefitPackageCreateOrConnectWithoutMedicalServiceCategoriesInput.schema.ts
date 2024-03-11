/* eslint-disable */
import { z } from 'zod';
import { BenefitPackageWhereUniqueInputObjectSchema } from './BenefitPackageWhereUniqueInput.schema';
import { BenefitPackageCreateWithoutMedicalServiceCategoriesInputObjectSchema } from './BenefitPackageCreateWithoutMedicalServiceCategoriesInput.schema';
import { BenefitPackageUncheckedCreateWithoutMedicalServiceCategoriesInputObjectSchema } from './BenefitPackageUncheckedCreateWithoutMedicalServiceCategoriesInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.BenefitPackageCreateOrConnectWithoutMedicalServiceCategoriesInput>;
export const BenefitPackageCreateOrConnectWithoutMedicalServiceCategoriesInputObjectSchema: SchemaType = z
    .object({
        where: z.lazy(() => BenefitPackageWhereUniqueInputObjectSchema),
        create: z.union([
            z.lazy(() => BenefitPackageCreateWithoutMedicalServiceCategoriesInputObjectSchema),
            z.lazy(() => BenefitPackageUncheckedCreateWithoutMedicalServiceCategoriesInputObjectSchema),
        ]),
    })
    .strict() as SchemaType;
