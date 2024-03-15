/* eslint-disable */
import { z } from 'zod';
import { GenderEnumUpdateWithoutUserInputObjectSchema } from './GenderEnumUpdateWithoutUserInput.schema';
import { GenderEnumUncheckedUpdateWithoutUserInputObjectSchema } from './GenderEnumUncheckedUpdateWithoutUserInput.schema';
import { GenderEnumCreateWithoutUserInputObjectSchema } from './GenderEnumCreateWithoutUserInput.schema';
import { GenderEnumUncheckedCreateWithoutUserInputObjectSchema } from './GenderEnumUncheckedCreateWithoutUserInput.schema';
import { GenderEnumWhereInputObjectSchema } from './GenderEnumWhereInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.GenderEnumUpsertWithoutUserInput>;
export const GenderEnumUpsertWithoutUserInputObjectSchema: SchemaType = z
    .object({
        update: z.union([
            z.lazy(() => GenderEnumUpdateWithoutUserInputObjectSchema),
            z.lazy(() => GenderEnumUncheckedUpdateWithoutUserInputObjectSchema),
        ]),
        create: z.union([
            z.lazy(() => GenderEnumCreateWithoutUserInputObjectSchema),
            z.lazy(() => GenderEnumUncheckedCreateWithoutUserInputObjectSchema),
        ]),
        where: z.lazy(() => GenderEnumWhereInputObjectSchema).optional(),
    })
    .strict() as SchemaType;
