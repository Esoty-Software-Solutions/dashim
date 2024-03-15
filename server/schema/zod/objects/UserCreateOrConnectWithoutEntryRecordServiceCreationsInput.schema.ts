/* eslint-disable */
import { z } from 'zod';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserCreateWithoutEntryRecordServiceCreationsInputObjectSchema } from './UserCreateWithoutEntryRecordServiceCreationsInput.schema';
import { UserUncheckedCreateWithoutEntryRecordServiceCreationsInputObjectSchema } from './UserUncheckedCreateWithoutEntryRecordServiceCreationsInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.UserCreateOrConnectWithoutEntryRecordServiceCreationsInput>;
export const UserCreateOrConnectWithoutEntryRecordServiceCreationsInputObjectSchema: SchemaType = z
    .object({
        where: z.lazy(() => UserWhereUniqueInputObjectSchema),
        create: z.union([
            z.lazy(() => UserCreateWithoutEntryRecordServiceCreationsInputObjectSchema),
            z.lazy(() => UserUncheckedCreateWithoutEntryRecordServiceCreationsInputObjectSchema),
        ]),
    })
    .strict() as SchemaType;
