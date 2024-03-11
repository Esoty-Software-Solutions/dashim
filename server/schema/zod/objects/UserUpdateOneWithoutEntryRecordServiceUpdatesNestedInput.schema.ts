/* eslint-disable */
import { z } from 'zod';
import { UserCreateWithoutEntryRecordServiceUpdatesInputObjectSchema } from './UserCreateWithoutEntryRecordServiceUpdatesInput.schema';
import { UserUncheckedCreateWithoutEntryRecordServiceUpdatesInputObjectSchema } from './UserUncheckedCreateWithoutEntryRecordServiceUpdatesInput.schema';
import { UserCreateOrConnectWithoutEntryRecordServiceUpdatesInputObjectSchema } from './UserCreateOrConnectWithoutEntryRecordServiceUpdatesInput.schema';
import { UserUpsertWithoutEntryRecordServiceUpdatesInputObjectSchema } from './UserUpsertWithoutEntryRecordServiceUpdatesInput.schema';
import { UserWhereInputObjectSchema } from './UserWhereInput.schema';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserUpdateToOneWithWhereWithoutEntryRecordServiceUpdatesInputObjectSchema } from './UserUpdateToOneWithWhereWithoutEntryRecordServiceUpdatesInput.schema';
import { UserUpdateWithoutEntryRecordServiceUpdatesInputObjectSchema } from './UserUpdateWithoutEntryRecordServiceUpdatesInput.schema';
import { UserUncheckedUpdateWithoutEntryRecordServiceUpdatesInputObjectSchema } from './UserUncheckedUpdateWithoutEntryRecordServiceUpdatesInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.UserUpdateOneWithoutEntryRecordServiceUpdatesNestedInput>;
export const UserUpdateOneWithoutEntryRecordServiceUpdatesNestedInputObjectSchema: SchemaType = z
    .object({
        create: z
            .union([
                z.lazy(() => UserCreateWithoutEntryRecordServiceUpdatesInputObjectSchema),
                z.lazy(() => UserUncheckedCreateWithoutEntryRecordServiceUpdatesInputObjectSchema),
            ])
            .optional(),
        connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutEntryRecordServiceUpdatesInputObjectSchema).optional(),
        upsert: z.lazy(() => UserUpsertWithoutEntryRecordServiceUpdatesInputObjectSchema).optional(),
        disconnect: z.union([z.boolean(), z.lazy(() => UserWhereInputObjectSchema)]).optional(),
        delete: z.union([z.boolean(), z.lazy(() => UserWhereInputObjectSchema)]).optional(),
        connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
        update: z
            .union([
                z.lazy(() => UserUpdateToOneWithWhereWithoutEntryRecordServiceUpdatesInputObjectSchema),
                z.lazy(() => UserUpdateWithoutEntryRecordServiceUpdatesInputObjectSchema),
                z.lazy(() => UserUncheckedUpdateWithoutEntryRecordServiceUpdatesInputObjectSchema),
            ])
            .optional(),
    })
    .strict() as SchemaType;
