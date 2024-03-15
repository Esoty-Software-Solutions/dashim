/* eslint-disable */
import { z } from 'zod';
import { UserCreateWithoutBeneficiaryEntityFutureStatusUpdatesInputObjectSchema } from './UserCreateWithoutBeneficiaryEntityFutureStatusUpdatesInput.schema';
import { UserUncheckedCreateWithoutBeneficiaryEntityFutureStatusUpdatesInputObjectSchema } from './UserUncheckedCreateWithoutBeneficiaryEntityFutureStatusUpdatesInput.schema';
import { UserCreateOrConnectWithoutBeneficiaryEntityFutureStatusUpdatesInputObjectSchema } from './UserCreateOrConnectWithoutBeneficiaryEntityFutureStatusUpdatesInput.schema';
import { UserUpsertWithoutBeneficiaryEntityFutureStatusUpdatesInputObjectSchema } from './UserUpsertWithoutBeneficiaryEntityFutureStatusUpdatesInput.schema';
import { UserWhereInputObjectSchema } from './UserWhereInput.schema';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserUpdateToOneWithWhereWithoutBeneficiaryEntityFutureStatusUpdatesInputObjectSchema } from './UserUpdateToOneWithWhereWithoutBeneficiaryEntityFutureStatusUpdatesInput.schema';
import { UserUpdateWithoutBeneficiaryEntityFutureStatusUpdatesInputObjectSchema } from './UserUpdateWithoutBeneficiaryEntityFutureStatusUpdatesInput.schema';
import { UserUncheckedUpdateWithoutBeneficiaryEntityFutureStatusUpdatesInputObjectSchema } from './UserUncheckedUpdateWithoutBeneficiaryEntityFutureStatusUpdatesInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.UserUpdateOneWithoutBeneficiaryEntityFutureStatusUpdatesNestedInput>;
export const UserUpdateOneWithoutBeneficiaryEntityFutureStatusUpdatesNestedInputObjectSchema: SchemaType = z
    .object({
        create: z
            .union([
                z.lazy(() => UserCreateWithoutBeneficiaryEntityFutureStatusUpdatesInputObjectSchema),
                z.lazy(() => UserUncheckedCreateWithoutBeneficiaryEntityFutureStatusUpdatesInputObjectSchema),
            ])
            .optional(),
        connectOrCreate: z
            .lazy(() => UserCreateOrConnectWithoutBeneficiaryEntityFutureStatusUpdatesInputObjectSchema)
            .optional(),
        upsert: z.lazy(() => UserUpsertWithoutBeneficiaryEntityFutureStatusUpdatesInputObjectSchema).optional(),
        disconnect: z.union([z.boolean(), z.lazy(() => UserWhereInputObjectSchema)]).optional(),
        delete: z.union([z.boolean(), z.lazy(() => UserWhereInputObjectSchema)]).optional(),
        connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
        update: z
            .union([
                z.lazy(() => UserUpdateToOneWithWhereWithoutBeneficiaryEntityFutureStatusUpdatesInputObjectSchema),
                z.lazy(() => UserUpdateWithoutBeneficiaryEntityFutureStatusUpdatesInputObjectSchema),
                z.lazy(() => UserUncheckedUpdateWithoutBeneficiaryEntityFutureStatusUpdatesInputObjectSchema),
            ])
            .optional(),
    })
    .strict() as SchemaType;
