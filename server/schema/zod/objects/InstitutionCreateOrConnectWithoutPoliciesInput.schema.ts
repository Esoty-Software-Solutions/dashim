/* eslint-disable */
import { z } from 'zod';
import { InstitutionWhereUniqueInputObjectSchema } from './InstitutionWhereUniqueInput.schema';
import { InstitutionCreateWithoutPoliciesInputObjectSchema } from './InstitutionCreateWithoutPoliciesInput.schema';
import { InstitutionUncheckedCreateWithoutPoliciesInputObjectSchema } from './InstitutionUncheckedCreateWithoutPoliciesInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.InstitutionCreateOrConnectWithoutPoliciesInput>;
export const InstitutionCreateOrConnectWithoutPoliciesInputObjectSchema: SchemaType = z
    .object({
        where: z.lazy(() => InstitutionWhereUniqueInputObjectSchema),
        create: z.union([
            z.lazy(() => InstitutionCreateWithoutPoliciesInputObjectSchema),
            z.lazy(() => InstitutionUncheckedCreateWithoutPoliciesInputObjectSchema),
        ]),
    })
    .strict() as SchemaType;
