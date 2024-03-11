/* eslint-disable */
import { z } from 'zod';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserCreateWithoutEntryRecordServiceUpdatesInputObjectSchema } from './UserCreateWithoutEntryRecordServiceUpdatesInput.schema';
import { UserUncheckedCreateWithoutEntryRecordServiceUpdatesInputObjectSchema } from './UserUncheckedCreateWithoutEntryRecordServiceUpdatesInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.UserCreateOrConnectWithoutEntryRecordServiceUpdatesInput>;
export const UserCreateOrConnectWithoutEntryRecordServiceUpdatesInputObjectSchema: SchemaType = z
    .object({
        where: z.lazy(() => UserWhereUniqueInputObjectSchema),
        create: z.union([
            z.lazy(() => UserCreateWithoutEntryRecordServiceUpdatesInputObjectSchema),
            z.lazy(() => UserUncheckedCreateWithoutEntryRecordServiceUpdatesInputObjectSchema),
        ]),
    })
    .strict() as SchemaType;
