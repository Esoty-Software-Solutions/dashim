/* eslint-disable */
import { z } from 'zod';
import { InstitutionUpdateWithoutPoliciesInputObjectSchema } from './InstitutionUpdateWithoutPoliciesInput.schema';
import { InstitutionUncheckedUpdateWithoutPoliciesInputObjectSchema } from './InstitutionUncheckedUpdateWithoutPoliciesInput.schema';
import { InstitutionCreateWithoutPoliciesInputObjectSchema } from './InstitutionCreateWithoutPoliciesInput.schema';
import { InstitutionUncheckedCreateWithoutPoliciesInputObjectSchema } from './InstitutionUncheckedCreateWithoutPoliciesInput.schema';
import { InstitutionWhereInputObjectSchema } from './InstitutionWhereInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.InstitutionUpsertWithoutPoliciesInput>;
export const InstitutionUpsertWithoutPoliciesInputObjectSchema: SchemaType = z
    .object({
        update: z.union([
            z.lazy(() => InstitutionUpdateWithoutPoliciesInputObjectSchema),
            z.lazy(() => InstitutionUncheckedUpdateWithoutPoliciesInputObjectSchema),
        ]),
        create: z.union([
            z.lazy(() => InstitutionCreateWithoutPoliciesInputObjectSchema),
            z.lazy(() => InstitutionUncheckedCreateWithoutPoliciesInputObjectSchema),
        ]),
        where: z.lazy(() => InstitutionWhereInputObjectSchema).optional(),
    })
    .strict() as SchemaType;
