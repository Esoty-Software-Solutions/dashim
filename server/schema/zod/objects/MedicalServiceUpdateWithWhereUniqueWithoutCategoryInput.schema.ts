/* eslint-disable */
import { z } from 'zod';
import { MedicalServiceWhereUniqueInputObjectSchema } from './MedicalServiceWhereUniqueInput.schema';
import { MedicalServiceUpdateWithoutCategoryInputObjectSchema } from './MedicalServiceUpdateWithoutCategoryInput.schema';
import { MedicalServiceUncheckedUpdateWithoutCategoryInputObjectSchema } from './MedicalServiceUncheckedUpdateWithoutCategoryInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.MedicalServiceUpdateWithWhereUniqueWithoutCategoryInput>;
export const MedicalServiceUpdateWithWhereUniqueWithoutCategoryInputObjectSchema: SchemaType = z
    .object({
        where: z.lazy(() => MedicalServiceWhereUniqueInputObjectSchema),
        data: z.union([
            z.lazy(() => MedicalServiceUpdateWithoutCategoryInputObjectSchema),
            z.lazy(() => MedicalServiceUncheckedUpdateWithoutCategoryInputObjectSchema),
        ]),
    })
    .strict() as SchemaType;
