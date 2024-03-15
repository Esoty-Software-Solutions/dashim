/* eslint-disable */
import { z } from 'zod';
import { BenefitPackageCreateWithoutMedicalServiceCategoriesInputObjectSchema } from './BenefitPackageCreateWithoutMedicalServiceCategoriesInput.schema';
import { BenefitPackageUncheckedCreateWithoutMedicalServiceCategoriesInputObjectSchema } from './BenefitPackageUncheckedCreateWithoutMedicalServiceCategoriesInput.schema';
import { BenefitPackageCreateOrConnectWithoutMedicalServiceCategoriesInputObjectSchema } from './BenefitPackageCreateOrConnectWithoutMedicalServiceCategoriesInput.schema';
import { BenefitPackageUpsertWithoutMedicalServiceCategoriesInputObjectSchema } from './BenefitPackageUpsertWithoutMedicalServiceCategoriesInput.schema';
import { BenefitPackageWhereUniqueInputObjectSchema } from './BenefitPackageWhereUniqueInput.schema';
import { BenefitPackageUpdateToOneWithWhereWithoutMedicalServiceCategoriesInputObjectSchema } from './BenefitPackageUpdateToOneWithWhereWithoutMedicalServiceCategoriesInput.schema';
import { BenefitPackageUpdateWithoutMedicalServiceCategoriesInputObjectSchema } from './BenefitPackageUpdateWithoutMedicalServiceCategoriesInput.schema';
import { BenefitPackageUncheckedUpdateWithoutMedicalServiceCategoriesInputObjectSchema } from './BenefitPackageUncheckedUpdateWithoutMedicalServiceCategoriesInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.BenefitPackageUpdateOneRequiredWithoutMedicalServiceCategoriesNestedInput>;
export const BenefitPackageUpdateOneRequiredWithoutMedicalServiceCategoriesNestedInputObjectSchema: SchemaType = z
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
        upsert: z.lazy(() => BenefitPackageUpsertWithoutMedicalServiceCategoriesInputObjectSchema).optional(),
        connect: z.lazy(() => BenefitPackageWhereUniqueInputObjectSchema).optional(),
        update: z
            .union([
                z.lazy(() => BenefitPackageUpdateToOneWithWhereWithoutMedicalServiceCategoriesInputObjectSchema),
                z.lazy(() => BenefitPackageUpdateWithoutMedicalServiceCategoriesInputObjectSchema),
                z.lazy(() => BenefitPackageUncheckedUpdateWithoutMedicalServiceCategoriesInputObjectSchema),
            ])
            .optional(),
    })
    .strict() as SchemaType;
