/* eslint-disable */
import { z } from 'zod';
import { InstitutionMedicalServiceScalarWhereInputObjectSchema } from './InstitutionMedicalServiceScalarWhereInput.schema';
import { InstitutionMedicalServiceUpdateManyMutationInputObjectSchema } from './InstitutionMedicalServiceUpdateManyMutationInput.schema';
import { InstitutionMedicalServiceUncheckedUpdateManyWithoutMedicalServiceInputObjectSchema } from './InstitutionMedicalServiceUncheckedUpdateManyWithoutMedicalServiceInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.InstitutionMedicalServiceUpdateManyWithWhereWithoutMedicalServiceInput>;
export const InstitutionMedicalServiceUpdateManyWithWhereWithoutMedicalServiceInputObjectSchema: SchemaType = z
    .object({
        where: z.lazy(() => InstitutionMedicalServiceScalarWhereInputObjectSchema),
        data: z.union([
            z.lazy(() => InstitutionMedicalServiceUpdateManyMutationInputObjectSchema),
            z.lazy(() => InstitutionMedicalServiceUncheckedUpdateManyWithoutMedicalServiceInputObjectSchema),
        ]),
    })
    .strict() as SchemaType;
