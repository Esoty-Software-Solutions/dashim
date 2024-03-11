/* eslint-disable */
import { z } from 'zod';
import { UserWhereInputObjectSchema } from './UserWhereInput.schema';
import { UserUpdateWithoutEntryRecordServiceCreationsInputObjectSchema } from './UserUpdateWithoutEntryRecordServiceCreationsInput.schema';
import { UserUncheckedUpdateWithoutEntryRecordServiceCreationsInputObjectSchema } from './UserUncheckedUpdateWithoutEntryRecordServiceCreationsInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutEntryRecordServiceCreationsInput>;
export const UserUpdateToOneWithWhereWithoutEntryRecordServiceCreationsInputObjectSchema: SchemaType = z
    .object({
        where: z.lazy(() => UserWhereInputObjectSchema).optional(),
        data: z.union([
            z.lazy(() => UserUpdateWithoutEntryRecordServiceCreationsInputObjectSchema),
            z.lazy(() => UserUncheckedUpdateWithoutEntryRecordServiceCreationsInputObjectSchema),
        ]),
    })
    .strict() as SchemaType;
