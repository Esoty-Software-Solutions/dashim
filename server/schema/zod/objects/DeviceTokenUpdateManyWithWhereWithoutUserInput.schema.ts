/* eslint-disable */
import { z } from 'zod';
import { DeviceTokenScalarWhereInputObjectSchema } from './DeviceTokenScalarWhereInput.schema';
import { DeviceTokenUpdateManyMutationInputObjectSchema } from './DeviceTokenUpdateManyMutationInput.schema';
import { DeviceTokenUncheckedUpdateManyWithoutUserInputObjectSchema } from './DeviceTokenUncheckedUpdateManyWithoutUserInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.DeviceTokenUpdateManyWithWhereWithoutUserInput>;
export const DeviceTokenUpdateManyWithWhereWithoutUserInputObjectSchema: SchemaType = z
    .object({
        where: z.lazy(() => DeviceTokenScalarWhereInputObjectSchema),
        data: z.union([
            z.lazy(() => DeviceTokenUpdateManyMutationInputObjectSchema),
            z.lazy(() => DeviceTokenUncheckedUpdateManyWithoutUserInputObjectSchema),
        ]),
    })
    .strict() as SchemaType;
