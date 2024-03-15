/* eslint-disable */
import { z } from 'zod';
import { MedicalServiceScalarWhereInputObjectSchema } from './MedicalServiceScalarWhereInput.schema';
import { MedicalServiceUpdateManyMutationInputObjectSchema } from './MedicalServiceUpdateManyMutationInput.schema';
import { MedicalServiceUncheckedUpdateManyWithoutCategoryInputObjectSchema } from './MedicalServiceUncheckedUpdateManyWithoutCategoryInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.MedicalServiceUpdateManyWithWhereWithoutCategoryInput>;
export const MedicalServiceUpdateManyWithWhereWithoutCategoryInputObjectSchema: SchemaType = z
    .object({
        where: z.lazy(() => MedicalServiceScalarWhereInputObjectSchema),
        data: z.union([
            z.lazy(() => MedicalServiceUpdateManyMutationInputObjectSchema),
            z.lazy(() => MedicalServiceUncheckedUpdateManyWithoutCategoryInputObjectSchema),
        ]),
    })
    .strict() as SchemaType;
