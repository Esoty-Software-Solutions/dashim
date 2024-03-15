/* eslint-disable */
import { z } from 'zod';
import { DeviceTokenWhereUniqueInputObjectSchema } from './DeviceTokenWhereUniqueInput.schema';
import { DeviceTokenUpdateWithoutUserInputObjectSchema } from './DeviceTokenUpdateWithoutUserInput.schema';
import { DeviceTokenUncheckedUpdateWithoutUserInputObjectSchema } from './DeviceTokenUncheckedUpdateWithoutUserInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.DeviceTokenUpdateWithWhereUniqueWithoutUserInput>;
export const DeviceTokenUpdateWithWhereUniqueWithoutUserInputObjectSchema: SchemaType = z
    .object({
        where: z.lazy(() => DeviceTokenWhereUniqueInputObjectSchema),
        data: z.union([
            z.lazy(() => DeviceTokenUpdateWithoutUserInputObjectSchema),
            z.lazy(() => DeviceTokenUncheckedUpdateWithoutUserInputObjectSchema),
        ]),
    })
    .strict() as SchemaType;
