/* eslint-disable */
import { z } from 'zod';
import { MedicalServiceCategoryCreateWithoutServicesInputObjectSchema } from './MedicalServiceCategoryCreateWithoutServicesInput.schema';
import { MedicalServiceCategoryUncheckedCreateWithoutServicesInputObjectSchema } from './MedicalServiceCategoryUncheckedCreateWithoutServicesInput.schema';
import { MedicalServiceCategoryCreateOrConnectWithoutServicesInputObjectSchema } from './MedicalServiceCategoryCreateOrConnectWithoutServicesInput.schema';
import { MedicalServiceCategoryUpsertWithoutServicesInputObjectSchema } from './MedicalServiceCategoryUpsertWithoutServicesInput.schema';
import { MedicalServiceCategoryWhereUniqueInputObjectSchema } from './MedicalServiceCategoryWhereUniqueInput.schema';
import { MedicalServiceCategoryUpdateToOneWithWhereWithoutServicesInputObjectSchema } from './MedicalServiceCategoryUpdateToOneWithWhereWithoutServicesInput.schema';
import { MedicalServiceCategoryUpdateWithoutServicesInputObjectSchema } from './MedicalServiceCategoryUpdateWithoutServicesInput.schema';
import { MedicalServiceCategoryUncheckedUpdateWithoutServicesInputObjectSchema } from './MedicalServiceCategoryUncheckedUpdateWithoutServicesInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.MedicalServiceCategoryUpdateOneRequiredWithoutServicesNestedInput>;
export const MedicalServiceCategoryUpdateOneRequiredWithoutServicesNestedInputObjectSchema: SchemaType = z
    .object({
        create: z
            .union([
                z.lazy(() => MedicalServiceCategoryCreateWithoutServicesInputObjectSchema),
                z.lazy(() => MedicalServiceCategoryUncheckedCreateWithoutServicesInputObjectSchema),
            ])
            .optional(),
        connectOrCreate: z.lazy(() => MedicalServiceCategoryCreateOrConnectWithoutServicesInputObjectSchema).optional(),
        upsert: z.lazy(() => MedicalServiceCategoryUpsertWithoutServicesInputObjectSchema).optional(),
        connect: z.lazy(() => MedicalServiceCategoryWhereUniqueInputObjectSchema).optional(),
        update: z
            .union([
                z.lazy(() => MedicalServiceCategoryUpdateToOneWithWhereWithoutServicesInputObjectSchema),
                z.lazy(() => MedicalServiceCategoryUpdateWithoutServicesInputObjectSchema),
                z.lazy(() => MedicalServiceCategoryUncheckedUpdateWithoutServicesInputObjectSchema),
            ])
            .optional(),
    })
    .strict() as SchemaType;
