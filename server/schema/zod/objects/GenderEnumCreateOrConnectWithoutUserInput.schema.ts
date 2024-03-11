/* eslint-disable */
import { z } from 'zod';
import { GenderEnumWhereUniqueInputObjectSchema } from './GenderEnumWhereUniqueInput.schema';
import { GenderEnumCreateWithoutUserInputObjectSchema } from './GenderEnumCreateWithoutUserInput.schema';
import { GenderEnumUncheckedCreateWithoutUserInputObjectSchema } from './GenderEnumUncheckedCreateWithoutUserInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.GenderEnumCreateOrConnectWithoutUserInput>;
export const GenderEnumCreateOrConnectWithoutUserInputObjectSchema: SchemaType = z
    .object({
        where: z.lazy(() => GenderEnumWhereUniqueInputObjectSchema),
        create: z.union([
            z.lazy(() => GenderEnumCreateWithoutUserInputObjectSchema),
            z.lazy(() => GenderEnumUncheckedCreateWithoutUserInputObjectSchema),
        ]),
    })
    .strict() as SchemaType;
