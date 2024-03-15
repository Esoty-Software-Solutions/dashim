/* eslint-disable */
import { z } from 'zod';
import { MedicalServiceCategoryUpdateWithoutBeneftiPackagesInputObjectSchema } from './MedicalServiceCategoryUpdateWithoutBeneftiPackagesInput.schema';
import { MedicalServiceCategoryUncheckedUpdateWithoutBeneftiPackagesInputObjectSchema } from './MedicalServiceCategoryUncheckedUpdateWithoutBeneftiPackagesInput.schema';
import { MedicalServiceCategoryCreateWithoutBeneftiPackagesInputObjectSchema } from './MedicalServiceCategoryCreateWithoutBeneftiPackagesInput.schema';
import { MedicalServiceCategoryUncheckedCreateWithoutBeneftiPackagesInputObjectSchema } from './MedicalServiceCategoryUncheckedCreateWithoutBeneftiPackagesInput.schema';
import { MedicalServiceCategoryWhereInputObjectSchema } from './MedicalServiceCategoryWhereInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.MedicalServiceCategoryUpsertWithoutBeneftiPackagesInput>;
export const MedicalServiceCategoryUpsertWithoutBeneftiPackagesInputObjectSchema: SchemaType = z
    .object({
        update: z.union([
            z.lazy(() => MedicalServiceCategoryUpdateWithoutBeneftiPackagesInputObjectSchema),
            z.lazy(() => MedicalServiceCategoryUncheckedUpdateWithoutBeneftiPackagesInputObjectSchema),
        ]),
        create: z.union([
            z.lazy(() => MedicalServiceCategoryCreateWithoutBeneftiPackagesInputObjectSchema),
            z.lazy(() => MedicalServiceCategoryUncheckedCreateWithoutBeneftiPackagesInputObjectSchema),
        ]),
        where: z.lazy(() => MedicalServiceCategoryWhereInputObjectSchema).optional(),
    })
    .strict() as SchemaType;
