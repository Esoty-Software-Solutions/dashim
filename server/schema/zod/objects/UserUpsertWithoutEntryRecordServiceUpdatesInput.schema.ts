/* eslint-disable */
import { z } from 'zod';
import { UserUpdateWithoutEntryRecordServiceUpdatesInputObjectSchema } from './UserUpdateWithoutEntryRecordServiceUpdatesInput.schema';
import { UserUncheckedUpdateWithoutEntryRecordServiceUpdatesInputObjectSchema } from './UserUncheckedUpdateWithoutEntryRecordServiceUpdatesInput.schema';
import { UserCreateWithoutEntryRecordServiceUpdatesInputObjectSchema } from './UserCreateWithoutEntryRecordServiceUpdatesInput.schema';
import { UserUncheckedCreateWithoutEntryRecordServiceUpdatesInputObjectSchema } from './UserUncheckedCreateWithoutEntryRecordServiceUpdatesInput.schema';
import { UserWhereInputObjectSchema } from './UserWhereInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.UserUpsertWithoutEntryRecordServiceUpdatesInput>;
export const UserUpsertWithoutEntryRecordServiceUpdatesInputObjectSchema: SchemaType = z
    .object({
        update: z.union([
            z.lazy(() => UserUpdateWithoutEntryRecordServiceUpdatesInputObjectSchema),
            z.lazy(() => UserUncheckedUpdateWithoutEntryRecordServiceUpdatesInputObjectSchema),
        ]),
        create: z.union([
            z.lazy(() => UserCreateWithoutEntryRecordServiceUpdatesInputObjectSchema),
            z.lazy(() => UserUncheckedCreateWithoutEntryRecordServiceUpdatesInputObjectSchema),
        ]),
        where: z.lazy(() => UserWhereInputObjectSchema).optional(),
    })
    .strict() as SchemaType;
