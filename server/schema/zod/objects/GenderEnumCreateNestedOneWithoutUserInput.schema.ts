/* eslint-disable */
import { z } from 'zod';
import { GenderEnumCreateWithoutUserInputObjectSchema } from './GenderEnumCreateWithoutUserInput.schema';
import { GenderEnumUncheckedCreateWithoutUserInputObjectSchema } from './GenderEnumUncheckedCreateWithoutUserInput.schema';
import { GenderEnumCreateOrConnectWithoutUserInputObjectSchema } from './GenderEnumCreateOrConnectWithoutUserInput.schema';
import { GenderEnumWhereUniqueInputObjectSchema } from './GenderEnumWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.GenderEnumCreateNestedOneWithoutUserInput>;
export const GenderEnumCreateNestedOneWithoutUserInputObjectSchema: SchemaType = z
    .object({
        create: z
            .union([
                z.lazy(() => GenderEnumCreateWithoutUserInputObjectSchema),
                z.lazy(() => GenderEnumUncheckedCreateWithoutUserInputObjectSchema),
            ])
            .optional(),
        connectOrCreate: z.lazy(() => GenderEnumCreateOrConnectWithoutUserInputObjectSchema).optional(),
        connect: z.lazy(() => GenderEnumWhereUniqueInputObjectSchema).optional(),
    })
    .strict() as SchemaType;
