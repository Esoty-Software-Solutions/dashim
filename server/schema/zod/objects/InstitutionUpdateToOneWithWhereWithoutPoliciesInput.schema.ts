/* eslint-disable */
import { z } from 'zod';
import { InstitutionWhereInputObjectSchema } from './InstitutionWhereInput.schema';
import { InstitutionUpdateWithoutPoliciesInputObjectSchema } from './InstitutionUpdateWithoutPoliciesInput.schema';
import { InstitutionUncheckedUpdateWithoutPoliciesInputObjectSchema } from './InstitutionUncheckedUpdateWithoutPoliciesInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.InstitutionUpdateToOneWithWhereWithoutPoliciesInput>;
export const InstitutionUpdateToOneWithWhereWithoutPoliciesInputObjectSchema: SchemaType = z
    .object({
        where: z.lazy(() => InstitutionWhereInputObjectSchema).optional(),
        data: z.union([
            z.lazy(() => InstitutionUpdateWithoutPoliciesInputObjectSchema),
            z.lazy(() => InstitutionUncheckedUpdateWithoutPoliciesInputObjectSchema),
        ]),
    })
    .strict() as SchemaType;
