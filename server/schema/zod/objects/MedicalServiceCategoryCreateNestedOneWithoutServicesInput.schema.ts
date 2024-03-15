/* eslint-disable */
import { z } from 'zod';
import { MedicalServiceCategoryCreateWithoutServicesInputObjectSchema } from './MedicalServiceCategoryCreateWithoutServicesInput.schema';
import { MedicalServiceCategoryUncheckedCreateWithoutServicesInputObjectSchema } from './MedicalServiceCategoryUncheckedCreateWithoutServicesInput.schema';
import { MedicalServiceCategoryCreateOrConnectWithoutServicesInputObjectSchema } from './MedicalServiceCategoryCreateOrConnectWithoutServicesInput.schema';
import { MedicalServiceCategoryWhereUniqueInputObjectSchema } from './MedicalServiceCategoryWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.MedicalServiceCategoryCreateNestedOneWithoutServicesInput>;
export const MedicalServiceCategoryCreateNestedOneWithoutServicesInputObjectSchema: SchemaType = z
    .object({
        create: z
            .union([
                z.lazy(() => MedicalServiceCategoryCreateWithoutServicesInputObjectSchema),
                z.lazy(() => MedicalServiceCategoryUncheckedCreateWithoutServicesInputObjectSchema),
            ])
            .optional(),
        connectOrCreate: z.lazy(() => MedicalServiceCategoryCreateOrConnectWithoutServicesInputObjectSchema).optional(),
        connect: z.lazy(() => MedicalServiceCategoryWhereUniqueInputObjectSchema).optional(),
    })
    .strict() as SchemaType;
