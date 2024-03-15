/* eslint-disable */
import { z } from 'zod';
import { InstitutionCreateWithoutPoliciesInputObjectSchema } from './InstitutionCreateWithoutPoliciesInput.schema';
import { InstitutionUncheckedCreateWithoutPoliciesInputObjectSchema } from './InstitutionUncheckedCreateWithoutPoliciesInput.schema';
import { InstitutionCreateOrConnectWithoutPoliciesInputObjectSchema } from './InstitutionCreateOrConnectWithoutPoliciesInput.schema';
import { InstitutionWhereUniqueInputObjectSchema } from './InstitutionWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.InstitutionCreateNestedOneWithoutPoliciesInput>;
export const InstitutionCreateNestedOneWithoutPoliciesInputObjectSchema: SchemaType = z
    .object({
        create: z
            .union([
                z.lazy(() => InstitutionCreateWithoutPoliciesInputObjectSchema),
                z.lazy(() => InstitutionUncheckedCreateWithoutPoliciesInputObjectSchema),
            ])
            .optional(),
        connectOrCreate: z.lazy(() => InstitutionCreateOrConnectWithoutPoliciesInputObjectSchema).optional(),
        connect: z.lazy(() => InstitutionWhereUniqueInputObjectSchema).optional(),
    })
    .strict() as SchemaType;
