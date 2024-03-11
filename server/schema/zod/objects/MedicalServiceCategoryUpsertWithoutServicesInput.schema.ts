/* eslint-disable */
import { z } from 'zod';
import { MedicalServiceCategoryUpdateWithoutServicesInputObjectSchema } from './MedicalServiceCategoryUpdateWithoutServicesInput.schema';
import { MedicalServiceCategoryUncheckedUpdateWithoutServicesInputObjectSchema } from './MedicalServiceCategoryUncheckedUpdateWithoutServicesInput.schema';
import { MedicalServiceCategoryCreateWithoutServicesInputObjectSchema } from './MedicalServiceCategoryCreateWithoutServicesInput.schema';
import { MedicalServiceCategoryUncheckedCreateWithoutServicesInputObjectSchema } from './MedicalServiceCategoryUncheckedCreateWithoutServicesInput.schema';
import { MedicalServiceCategoryWhereInputObjectSchema } from './MedicalServiceCategoryWhereInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.MedicalServiceCategoryUpsertWithoutServicesInput>;
export const MedicalServiceCategoryUpsertWithoutServicesInputObjectSchema: SchemaType = z
    .object({
        update: z.union([
            z.lazy(() => MedicalServiceCategoryUpdateWithoutServicesInputObjectSchema),
            z.lazy(() => MedicalServiceCategoryUncheckedUpdateWithoutServicesInputObjectSchema),
        ]),
        create: z.union([
            z.lazy(() => MedicalServiceCategoryCreateWithoutServicesInputObjectSchema),
            z.lazy(() => MedicalServiceCategoryUncheckedCreateWithoutServicesInputObjectSchema),
        ]),
        where: z.lazy(() => MedicalServiceCategoryWhereInputObjectSchema).optional(),
    })
    .strict() as SchemaType;
