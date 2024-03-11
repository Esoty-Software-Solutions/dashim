/* eslint-disable */
import { z } from 'zod';
import { UserCreateWithoutEntryRecordServiceUpdatesInputObjectSchema } from './UserCreateWithoutEntryRecordServiceUpdatesInput.schema';
import { UserUncheckedCreateWithoutEntryRecordServiceUpdatesInputObjectSchema } from './UserUncheckedCreateWithoutEntryRecordServiceUpdatesInput.schema';
import { UserCreateOrConnectWithoutEntryRecordServiceUpdatesInputObjectSchema } from './UserCreateOrConnectWithoutEntryRecordServiceUpdatesInput.schema';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.UserCreateNestedOneWithoutEntryRecordServiceUpdatesInput>;
export const UserCreateNestedOneWithoutEntryRecordServiceUpdatesInputObjectSchema: SchemaType = z
    .object({
        create: z
            .union([
                z.lazy(() => UserCreateWithoutEntryRecordServiceUpdatesInputObjectSchema),
                z.lazy(() => UserUncheckedCreateWithoutEntryRecordServiceUpdatesInputObjectSchema),
            ])
            .optional(),
        connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutEntryRecordServiceUpdatesInputObjectSchema).optional(),
        connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
    })
    .strict() as SchemaType;
