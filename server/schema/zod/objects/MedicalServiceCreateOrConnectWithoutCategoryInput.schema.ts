/* eslint-disable */
import { z } from 'zod';
import { MedicalServiceWhereUniqueInputObjectSchema } from './MedicalServiceWhereUniqueInput.schema';
import { MedicalServiceCreateWithoutCategoryInputObjectSchema } from './MedicalServiceCreateWithoutCategoryInput.schema';
import { MedicalServiceUncheckedCreateWithoutCategoryInputObjectSchema } from './MedicalServiceUncheckedCreateWithoutCategoryInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.MedicalServiceCreateOrConnectWithoutCategoryInput>;
export const MedicalServiceCreateOrConnectWithoutCategoryInputObjectSchema: SchemaType = z
    .object({
        where: z.lazy(() => MedicalServiceWhereUniqueInputObjectSchema),
        create: z.union([
            z.lazy(() => MedicalServiceCreateWithoutCategoryInputObjectSchema),
            z.lazy(() => MedicalServiceUncheckedCreateWithoutCategoryInputObjectSchema),
        ]),
    })
    .strict() as SchemaType;
