/* eslint-disable */
import { z } from 'zod';
import { InstitutionMedicalServiceScalarWhereInputObjectSchema } from './InstitutionMedicalServiceScalarWhereInput.schema';
import { InstitutionMedicalServiceUpdateManyMutationInputObjectSchema } from './InstitutionMedicalServiceUpdateManyMutationInput.schema';
import { InstitutionMedicalServiceUncheckedUpdateManyWithoutInstitutionInputObjectSchema } from './InstitutionMedicalServiceUncheckedUpdateManyWithoutInstitutionInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.InstitutionMedicalServiceUpdateManyWithWhereWithoutInstitutionInput>;
export const InstitutionMedicalServiceUpdateManyWithWhereWithoutInstitutionInputObjectSchema: SchemaType = z
    .object({
        where: z.lazy(() => InstitutionMedicalServiceScalarWhereInputObjectSchema),
        data: z.union([
            z.lazy(() => InstitutionMedicalServiceUpdateManyMutationInputObjectSchema),
            z.lazy(() => InstitutionMedicalServiceUncheckedUpdateManyWithoutInstitutionInputObjectSchema),
        ]),
    })
    .strict() as SchemaType;
