/* eslint-disable */
import { z } from 'zod';
import { MedicalServiceCategoryWhereInputObjectSchema } from './MedicalServiceCategoryWhereInput.schema';
import { MedicalServiceCategoryUpdateWithoutServicesInputObjectSchema } from './MedicalServiceCategoryUpdateWithoutServicesInput.schema';
import { MedicalServiceCategoryUncheckedUpdateWithoutServicesInputObjectSchema } from './MedicalServiceCategoryUncheckedUpdateWithoutServicesInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.MedicalServiceCategoryUpdateToOneWithWhereWithoutServicesInput>;
export const MedicalServiceCategoryUpdateToOneWithWhereWithoutServicesInputObjectSchema: SchemaType = z
    .object({
        where: z.lazy(() => MedicalServiceCategoryWhereInputObjectSchema).optional(),
        data: z.union([
            z.lazy(() => MedicalServiceCategoryUpdateWithoutServicesInputObjectSchema),
            z.lazy(() => MedicalServiceCategoryUncheckedUpdateWithoutServicesInputObjectSchema),
        ]),
    })
    .strict() as SchemaType;
