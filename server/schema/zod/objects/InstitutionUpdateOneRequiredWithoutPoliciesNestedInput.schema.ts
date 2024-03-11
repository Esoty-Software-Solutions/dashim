/* eslint-disable */
import { z } from 'zod';
import { InstitutionCreateWithoutPoliciesInputObjectSchema } from './InstitutionCreateWithoutPoliciesInput.schema';
import { InstitutionUncheckedCreateWithoutPoliciesInputObjectSchema } from './InstitutionUncheckedCreateWithoutPoliciesInput.schema';
import { InstitutionCreateOrConnectWithoutPoliciesInputObjectSchema } from './InstitutionCreateOrConnectWithoutPoliciesInput.schema';
import { InstitutionUpsertWithoutPoliciesInputObjectSchema } from './InstitutionUpsertWithoutPoliciesInput.schema';
import { InstitutionWhereUniqueInputObjectSchema } from './InstitutionWhereUniqueInput.schema';
import { InstitutionUpdateToOneWithWhereWithoutPoliciesInputObjectSchema } from './InstitutionUpdateToOneWithWhereWithoutPoliciesInput.schema';
import { InstitutionUpdateWithoutPoliciesInputObjectSchema } from './InstitutionUpdateWithoutPoliciesInput.schema';
import { InstitutionUncheckedUpdateWithoutPoliciesInputObjectSchema } from './InstitutionUncheckedUpdateWithoutPoliciesInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.InstitutionUpdateOneRequiredWithoutPoliciesNestedInput>;
export const InstitutionUpdateOneRequiredWithoutPoliciesNestedInputObjectSchema: SchemaType = z
    .object({
        create: z
            .union([
                z.lazy(() => InstitutionCreateWithoutPoliciesInputObjectSchema),
                z.lazy(() => InstitutionUncheckedCreateWithoutPoliciesInputObjectSchema),
            ])
            .optional(),
        connectOrCreate: z.lazy(() => InstitutionCreateOrConnectWithoutPoliciesInputObjectSchema).optional(),
        upsert: z.lazy(() => InstitutionUpsertWithoutPoliciesInputObjectSchema).optional(),
        connect: z.lazy(() => InstitutionWhereUniqueInputObjectSchema).optional(),
        update: z
            .union([
                z.lazy(() => InstitutionUpdateToOneWithWhereWithoutPoliciesInputObjectSchema),
                z.lazy(() => InstitutionUpdateWithoutPoliciesInputObjectSchema),
                z.lazy(() => InstitutionUncheckedUpdateWithoutPoliciesInputObjectSchema),
            ])
            .optional(),
    })
    .strict() as SchemaType;
