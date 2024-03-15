/* eslint-disable */
import { z } from 'zod';
import { InstitutionMedicalServiceWhereUniqueInputObjectSchema } from './InstitutionMedicalServiceWhereUniqueInput.schema';
import { InstitutionMedicalServiceUpdateWithoutInstitutionInputObjectSchema } from './InstitutionMedicalServiceUpdateWithoutInstitutionInput.schema';
import { InstitutionMedicalServiceUncheckedUpdateWithoutInstitutionInputObjectSchema } from './InstitutionMedicalServiceUncheckedUpdateWithoutInstitutionInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.InstitutionMedicalServiceUpdateWithWhereUniqueWithoutInstitutionInput>;
export const InstitutionMedicalServiceUpdateWithWhereUniqueWithoutInstitutionInputObjectSchema: SchemaType = z
    .object({
        where: z.lazy(() => InstitutionMedicalServiceWhereUniqueInputObjectSchema),
        data: z.union([
            z.lazy(() => InstitutionMedicalServiceUpdateWithoutInstitutionInputObjectSchema),
            z.lazy(() => InstitutionMedicalServiceUncheckedUpdateWithoutInstitutionInputObjectSchema),
        ]),
    })
    .strict() as SchemaType;
