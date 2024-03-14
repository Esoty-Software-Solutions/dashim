/* eslint-disable */
import { z } from 'zod';
import { GenderEnumWhereInputObjectSchema } from './GenderEnumWhereInput.schema';
import { GenderEnumUpdateWithoutUserInputObjectSchema } from './GenderEnumUpdateWithoutUserInput.schema';
import { GenderEnumUncheckedUpdateWithoutUserInputObjectSchema } from './GenderEnumUncheckedUpdateWithoutUserInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.GenderEnumUpdateToOneWithWhereWithoutUserInput>;
export const GenderEnumUpdateToOneWithWhereWithoutUserInputObjectSchema: SchemaType = z
    .object({
        where: z.lazy(() => GenderEnumWhereInputObjectSchema).optional(),
        data: z.union([
            z.lazy(() => GenderEnumUpdateWithoutUserInputObjectSchema),
            z.lazy(() => GenderEnumUncheckedUpdateWithoutUserInputObjectSchema),
        ]),
    })
    .strict() as SchemaType;
