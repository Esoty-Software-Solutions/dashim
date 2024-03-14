/* eslint-disable */
import { z } from 'zod';
import { UserUpdateWithoutEntryRecordServiceCreationsInputObjectSchema } from './UserUpdateWithoutEntryRecordServiceCreationsInput.schema';
import { UserUncheckedUpdateWithoutEntryRecordServiceCreationsInputObjectSchema } from './UserUncheckedUpdateWithoutEntryRecordServiceCreationsInput.schema';
import { UserCreateWithoutEntryRecordServiceCreationsInputObjectSchema } from './UserCreateWithoutEntryRecordServiceCreationsInput.schema';
import { UserUncheckedCreateWithoutEntryRecordServiceCreationsInputObjectSchema } from './UserUncheckedCreateWithoutEntryRecordServiceCreationsInput.schema';
import { UserWhereInputObjectSchema } from './UserWhereInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.UserUpsertWithoutEntryRecordServiceCreationsInput>;
export const UserUpsertWithoutEntryRecordServiceCreationsInputObjectSchema: SchemaType = z
    .object({
        update: z.union([
            z.lazy(() => UserUpdateWithoutEntryRecordServiceCreationsInputObjectSchema),
            z.lazy(() => UserUncheckedUpdateWithoutEntryRecordServiceCreationsInputObjectSchema),
        ]),
        create: z.union([
            z.lazy(() => UserCreateWithoutEntryRecordServiceCreationsInputObjectSchema),
            z.lazy(() => UserUncheckedCreateWithoutEntryRecordServiceCreationsInputObjectSchema),
        ]),
        where: z.lazy(() => UserWhereInputObjectSchema).optional(),
    })
    .strict() as SchemaType;
