/* eslint-disable */
import { z } from 'zod';
import { BenefitPackageCreateWithoutMedicalServiceCategoriesInputObjectSchema } from './BenefitPackageCreateWithoutMedicalServiceCategoriesInput.schema';
import { BenefitPackageUncheckedCreateWithoutMedicalServiceCategoriesInputObjectSchema } from './BenefitPackageUncheckedCreateWithoutMedicalServiceCategoriesInput.schema';
import { BenefitPackageCreateOrConnectWithoutMedicalServiceCategoriesInputObjectSchema } from './BenefitPackageCreateOrConnectWithoutMedicalServiceCategoriesInput.schema';
import { BenefitPackageWhereUniqueInputObjectSchema } from './BenefitPackageWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.BenefitPackageCreateNestedOneWithoutMedicalServiceCategoriesInput>;
export const BenefitPackageCreateNestedOneWithoutMedicalServiceCategoriesInputObjectSchema: SchemaType = z
    .object({
        create: z
            .union([
                z.lazy(() => BenefitPackageCreateWithoutMedicalServiceCategoriesInputObjectSchema),
                z.lazy(() => BenefitPackageUncheckedCreateWithoutMedicalServiceCategoriesInputObjectSchema),
            ])
            .optional(),
        connectOrCreate: z
            .lazy(() => BenefitPackageCreateOrConnectWithoutMedicalServiceCategoriesInputObjectSchema)
            .optional(),
        connect: z.lazy(() => BenefitPackageWhereUniqueInputObjectSchema).optional(),
    })
    .strict() as SchemaType;
