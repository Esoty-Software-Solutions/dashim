/* eslint-disable */
import { z } from 'zod';
import { MedicalServiceCategoryWhereInputObjectSchema } from './MedicalServiceCategoryWhereInput.schema';
import { MedicalServiceCategoryUpdateWithoutBeneftiPackagesInputObjectSchema } from './MedicalServiceCategoryUpdateWithoutBeneftiPackagesInput.schema';
import { MedicalServiceCategoryUncheckedUpdateWithoutBeneftiPackagesInputObjectSchema } from './MedicalServiceCategoryUncheckedUpdateWithoutBeneftiPackagesInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.MedicalServiceCategoryUpdateToOneWithWhereWithoutBeneftiPackagesInput>;
export const MedicalServiceCategoryUpdateToOneWithWhereWithoutBeneftiPackagesInputObjectSchema: SchemaType = z
    .object({
        where: z.lazy(() => MedicalServiceCategoryWhereInputObjectSchema).optional(),
        data: z.union([
            z.lazy(() => MedicalServiceCategoryUpdateWithoutBeneftiPackagesInputObjectSchema),
            z.lazy(() => MedicalServiceCategoryUncheckedUpdateWithoutBeneftiPackagesInputObjectSchema),
        ]),
    })
    .strict() as SchemaType;
