/* eslint-disable */
import { z } from 'zod';
import { InstitutionScalarWhereInputObjectSchema } from './InstitutionScalarWhereInput.schema';
import { InstitutionUpdateManyMutationInputObjectSchema } from './InstitutionUpdateManyMutationInput.schema';
import { InstitutionUncheckedUpdateManyWithoutCityInputObjectSchema } from './InstitutionUncheckedUpdateManyWithoutCityInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.InstitutionUpdateManyWithWhereWithoutCityInput>;
export const InstitutionUpdateManyWithWhereWithoutCityInputObjectSchema: SchemaType = z
    .object({
        where: z.lazy(() => InstitutionScalarWhereInputObjectSchema),
        data: z.union([
            z.lazy(() => InstitutionUpdateManyMutationInputObjectSchema),
            z.lazy(() => InstitutionUncheckedUpdateManyWithoutCityInputObjectSchema),
        ]),
    })
    .strict() as SchemaType;
