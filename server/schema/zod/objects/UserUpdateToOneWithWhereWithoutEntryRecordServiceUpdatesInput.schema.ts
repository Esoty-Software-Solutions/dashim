/* eslint-disable */
import { z } from 'zod';
import { UserWhereInputObjectSchema } from './UserWhereInput.schema';
import { UserUpdateWithoutEntryRecordServiceUpdatesInputObjectSchema } from './UserUpdateWithoutEntryRecordServiceUpdatesInput.schema';
import { UserUncheckedUpdateWithoutEntryRecordServiceUpdatesInputObjectSchema } from './UserUncheckedUpdateWithoutEntryRecordServiceUpdatesInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutEntryRecordServiceUpdatesInput>;
export const UserUpdateToOneWithWhereWithoutEntryRecordServiceUpdatesInputObjectSchema: SchemaType = z
    .object({
        where: z.lazy(() => UserWhereInputObjectSchema).optional(),
        data: z.union([
            z.lazy(() => UserUpdateWithoutEntryRecordServiceUpdatesInputObjectSchema),
            z.lazy(() => UserUncheckedUpdateWithoutEntryRecordServiceUpdatesInputObjectSchema),
        ]),
    })
    .strict() as SchemaType;
