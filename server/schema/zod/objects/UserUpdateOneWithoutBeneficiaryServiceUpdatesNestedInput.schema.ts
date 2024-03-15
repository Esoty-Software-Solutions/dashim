/* eslint-disable */
import { z } from 'zod';
import { UserCreateWithoutBeneficiaryServiceUpdatesInputObjectSchema } from './UserCreateWithoutBeneficiaryServiceUpdatesInput.schema';
import { UserUncheckedCreateWithoutBeneficiaryServiceUpdatesInputObjectSchema } from './UserUncheckedCreateWithoutBeneficiaryServiceUpdatesInput.schema';
import { UserCreateOrConnectWithoutBeneficiaryServiceUpdatesInputObjectSchema } from './UserCreateOrConnectWithoutBeneficiaryServiceUpdatesInput.schema';
import { UserUpsertWithoutBeneficiaryServiceUpdatesInputObjectSchema } from './UserUpsertWithoutBeneficiaryServiceUpdatesInput.schema';
import { UserWhereInputObjectSchema } from './UserWhereInput.schema';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserUpdateToOneWithWhereWithoutBeneficiaryServiceUpdatesInputObjectSchema } from './UserUpdateToOneWithWhereWithoutBeneficiaryServiceUpdatesInput.schema';
import { UserUpdateWithoutBeneficiaryServiceUpdatesInputObjectSchema } from './UserUpdateWithoutBeneficiaryServiceUpdatesInput.schema';
import { UserUncheckedUpdateWithoutBeneficiaryServiceUpdatesInputObjectSchema } from './UserUncheckedUpdateWithoutBeneficiaryServiceUpdatesInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.UserUpdateOneWithoutBeneficiaryServiceUpdatesNestedInput>;
export const UserUpdateOneWithoutBeneficiaryServiceUpdatesNestedInputObjectSchema: SchemaType = z
    .object({
        create: z
            .union([
                z.lazy(() => UserCreateWithoutBeneficiaryServiceUpdatesInputObjectSchema),
                z.lazy(() => UserUncheckedCreateWithoutBeneficiaryServiceUpdatesInputObjectSchema),
            ])
            .optional(),
        connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutBeneficiaryServiceUpdatesInputObjectSchema).optional(),
        upsert: z.lazy(() => UserUpsertWithoutBeneficiaryServiceUpdatesInputObjectSchema).optional(),
        disconnect: z.union([z.boolean(), z.lazy(() => UserWhereInputObjectSchema)]).optional(),
        delete: z.union([z.boolean(), z.lazy(() => UserWhereInputObjectSchema)]).optional(),
        connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
        update: z
            .union([
                z.lazy(() => UserUpdateToOneWithWhereWithoutBeneficiaryServiceUpdatesInputObjectSchema),
                z.lazy(() => UserUpdateWithoutBeneficiaryServiceUpdatesInputObjectSchema),
                z.lazy(() => UserUncheckedUpdateWithoutBeneficiaryServiceUpdatesInputObjectSchema),
            ])
            .optional(),
    })
    .strict() as SchemaType;
