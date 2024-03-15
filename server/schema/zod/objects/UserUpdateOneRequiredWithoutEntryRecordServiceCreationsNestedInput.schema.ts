/* eslint-disable */
import { z } from 'zod';
import { UserCreateWithoutEntryRecordServiceCreationsInputObjectSchema } from './UserCreateWithoutEntryRecordServiceCreationsInput.schema';
import { UserUncheckedCreateWithoutEntryRecordServiceCreationsInputObjectSchema } from './UserUncheckedCreateWithoutEntryRecordServiceCreationsInput.schema';
import { UserCreateOrConnectWithoutEntryRecordServiceCreationsInputObjectSchema } from './UserCreateOrConnectWithoutEntryRecordServiceCreationsInput.schema';
import { UserUpsertWithoutEntryRecordServiceCreationsInputObjectSchema } from './UserUpsertWithoutEntryRecordServiceCreationsInput.schema';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserUpdateToOneWithWhereWithoutEntryRecordServiceCreationsInputObjectSchema } from './UserUpdateToOneWithWhereWithoutEntryRecordServiceCreationsInput.schema';
import { UserUpdateWithoutEntryRecordServiceCreationsInputObjectSchema } from './UserUpdateWithoutEntryRecordServiceCreationsInput.schema';
import { UserUncheckedUpdateWithoutEntryRecordServiceCreationsInputObjectSchema } from './UserUncheckedUpdateWithoutEntryRecordServiceCreationsInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.UserUpdateOneRequiredWithoutEntryRecordServiceCreationsNestedInput>;
export const UserUpdateOneRequiredWithoutEntryRecordServiceCreationsNestedInputObjectSchema: SchemaType = z
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
        upsert: z.lazy(() => UserUpsertWithoutEntryRecordServiceCreationsInputObjectSchema).optional(),
        connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
        update: z
            .union([
                z.lazy(() => UserUpdateToOneWithWhereWithoutEntryRecordServiceCreationsInputObjectSchema),
                z.lazy(() => UserUpdateWithoutEntryRecordServiceCreationsInputObjectSchema),
                z.lazy(() => UserUncheckedUpdateWithoutEntryRecordServiceCreationsInputObjectSchema),
            ])
            .optional(),
    })
    .strict() as SchemaType;
