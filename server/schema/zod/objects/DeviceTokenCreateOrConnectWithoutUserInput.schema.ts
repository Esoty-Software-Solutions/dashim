/* eslint-disable */
import { z } from 'zod';
import { DeviceTokenWhereUniqueInputObjectSchema } from './DeviceTokenWhereUniqueInput.schema';
import { DeviceTokenCreateWithoutUserInputObjectSchema } from './DeviceTokenCreateWithoutUserInput.schema';
import { DeviceTokenUncheckedCreateWithoutUserInputObjectSchema } from './DeviceTokenUncheckedCreateWithoutUserInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.DeviceTokenCreateOrConnectWithoutUserInput>;
export const DeviceTokenCreateOrConnectWithoutUserInputObjectSchema: SchemaType = z
    .object({
        where: z.lazy(() => DeviceTokenWhereUniqueInputObjectSchema),
        create: z.union([
            z.lazy(() => DeviceTokenCreateWithoutUserInputObjectSchema),
            z.lazy(() => DeviceTokenUncheckedCreateWithoutUserInputObjectSchema),
        ]),
    })
    .strict() as SchemaType;
