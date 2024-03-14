/* eslint-disable */
import { z } from 'zod';
import { MedicalServiceScalarWhereInputObjectSchema } from './MedicalServiceScalarWhereInput.schema';
import { MedicalServiceUpdateManyMutationInputObjectSchema } from './MedicalServiceUpdateManyMutationInput.schema';
import { MedicalServiceUncheckedUpdateManyWithoutMedicalCenterInputObjectSchema } from './MedicalServiceUncheckedUpdateManyWithoutMedicalCenterInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.MedicalServiceUpdateManyWithWhereWithoutMedicalCenterInput>;
export const MedicalServiceUpdateManyWithWhereWithoutMedicalCenterInputObjectSchema: SchemaType = z
    .object({
        where: z.lazy(() => MedicalServiceScalarWhereInputObjectSchema),
        data: z.union([
            z.lazy(() => MedicalServiceUpdateManyMutationInputObjectSchema),
            z.lazy(() => MedicalServiceUncheckedUpdateManyWithoutMedicalCenterInputObjectSchema),
        ]),
    })
    .strict() as SchemaType;
