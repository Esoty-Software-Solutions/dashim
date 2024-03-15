/* eslint-disable */
import { z } from 'zod';
import { UserCreateWithoutEntryRecordServiceCreationsInputObjectSchema } from './UserCreateWithoutEntryRecordServiceCreationsInput.schema';
import { UserUncheckedCreateWithoutEntryRecordServiceCreationsInputObjectSchema } from './UserUncheckedCreateWithoutEntryRecordServiceCreationsInput.schema';
import { UserCreateOrConnectWithoutEntryRecordServiceCreationsInputObjectSchema } from './UserCreateOrConnectWithoutEntryRecordServiceCreationsInput.schema';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.UserCreateNestedOneWithoutEntryRecordServiceCreationsInput>;
export const UserCreateNestedOneWithoutEntryRecordServiceCreationsInputObjectSchema: SchemaType = z
    .object({
        create: z
            .union([
                z.lazy(() => UserCreateWithoutEntryRecordServiceCreationsInputObjectSchema),
                z.lazy(() => UserUncheckedCreateWithoutEntryRecordServiceCreationsInputObjectSchema),
            ])
            .optional(),
        connectOrCreate: z
            .lazy(() => UserCreateOrConnectWithoutEntryRecordServiceCreationsInputObjectSchema)
            .optional(),
        connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
    })
    .strict() as SchemaType;
