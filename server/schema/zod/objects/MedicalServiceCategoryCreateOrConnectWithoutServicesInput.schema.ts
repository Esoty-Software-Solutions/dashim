/* eslint-disable */
import { z } from 'zod';
import { MedicalServiceCategoryWhereUniqueInputObjectSchema } from './MedicalServiceCategoryWhereUniqueInput.schema';
import { MedicalServiceCategoryCreateWithoutServicesInputObjectSchema } from './MedicalServiceCategoryCreateWithoutServicesInput.schema';
import { MedicalServiceCategoryUncheckedCreateWithoutServicesInputObjectSchema } from './MedicalServiceCategoryUncheckedCreateWithoutServicesInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.MedicalServiceCategoryCreateOrConnectWithoutServicesInput>;
export const MedicalServiceCategoryCreateOrConnectWithoutServicesInputObjectSchema: SchemaType = z
    .object({
        where: z.lazy(() => MedicalServiceCategoryWhereUniqueInputObjectSchema),
        create: z.union([
            z.lazy(() => MedicalServiceCategoryCreateWithoutServicesInputObjectSchema),
            z.lazy(() => MedicalServiceCategoryUncheckedCreateWithoutServicesInputObjectSchema),
        ]),
    })
    .strict() as SchemaType;
