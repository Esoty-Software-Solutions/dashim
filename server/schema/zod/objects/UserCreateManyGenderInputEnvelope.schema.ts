/* eslint-disable */
import { z } from 'zod';
import { UserCreateManyGenderInputObjectSchema } from './UserCreateManyGenderInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.UserCreateManyGenderInputEnvelope>;
export const UserCreateManyGenderInputEnvelopeObjectSchema: SchemaType = z
    .object({
        data: z.union([
            z.lazy(() => UserCreateManyGenderInputObjectSchema),
            z.lazy(() => UserCreateManyGenderInputObjectSchema).array(),
        ]),
        skipDuplicates: z.boolean().optional(),
    })
    .strict() as SchemaType;
