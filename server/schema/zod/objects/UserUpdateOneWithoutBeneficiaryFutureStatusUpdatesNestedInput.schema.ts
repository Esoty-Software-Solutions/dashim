/* eslint-disable */
import { z } from 'zod';
import { UserCreateWithoutBeneficiaryFutureStatusUpdatesInputObjectSchema } from './UserCreateWithoutBeneficiaryFutureStatusUpdatesInput.schema';
import { UserUncheckedCreateWithoutBeneficiaryFutureStatusUpdatesInputObjectSchema } from './UserUncheckedCreateWithoutBeneficiaryFutureStatusUpdatesInput.schema';
import { UserCreateOrConnectWithoutBeneficiaryFutureStatusUpdatesInputObjectSchema } from './UserCreateOrConnectWithoutBeneficiaryFutureStatusUpdatesInput.schema';
import { UserUpsertWithoutBeneficiaryFutureStatusUpdatesInputObjectSchema } from './UserUpsertWithoutBeneficiaryFutureStatusUpdatesInput.schema';
import { UserWhereInputObjectSchema } from './UserWhereInput.schema';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserUpdateToOneWithWhereWithoutBeneficiaryFutureStatusUpdatesInputObjectSchema } from './UserUpdateToOneWithWhereWithoutBeneficiaryFutureStatusUpdatesInput.schema';
import { UserUpdateWithoutBeneficiaryFutureStatusUpdatesInputObjectSchema } from './UserUpdateWithoutBeneficiaryFutureStatusUpdatesInput.schema';
import { UserUncheckedUpdateWithoutBeneficiaryFutureStatusUpdatesInputObjectSchema } from './UserUncheckedUpdateWithoutBeneficiaryFutureStatusUpdatesInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.UserUpdateOneWithoutBeneficiaryFutureStatusUpdatesNestedInput>;
export const UserUpdateOneWithoutBeneficiaryFutureStatusUpdatesNestedInputObjectSchema: SchemaType = z
    .object({
        create: z
            .union([
                z.lazy(() => UserCreateWithoutBeneficiaryFutureStatusUpdatesInputObjectSchema),
                z.lazy(() => UserUncheckedCreateWithoutBeneficiaryFutureStatusUpdatesInputObjectSchema),
            ])
            .optional(),
        connectOrCreate: z
            .lazy(() => UserCreateOrConnectWithoutBeneficiaryFutureStatusUpdatesInputObjectSchema)
            .optional(),
        upsert: z.lazy(() => UserUpsertWithoutBeneficiaryFutureStatusUpdatesInputObjectSchema).optional(),
        disconnect: z.union([z.boolean(), z.lazy(() => UserWhereInputObjectSchema)]).optional(),
        delete: z.union([z.boolean(), z.lazy(() => UserWhereInputObjectSchema)]).optional(),
        connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
        update: z
            .union([
                z.lazy(() => UserUpdateToOneWithWhereWithoutBeneficiaryFutureStatusUpdatesInputObjectSchema),
                z.lazy(() => UserUpdateWithoutBeneficiaryFutureStatusUpdatesInputObjectSchema),
                z.lazy(() => UserUncheckedUpdateWithoutBeneficiaryFutureStatusUpdatesInputObjectSchema),
            ])
            .optional(),
    })
    .strict() as SchemaType;
