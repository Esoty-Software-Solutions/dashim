/* eslint-disable */
import { z } from 'zod';
import { GenderEnumCreateWithoutUserInputObjectSchema } from './GenderEnumCreateWithoutUserInput.schema';
import { GenderEnumUncheckedCreateWithoutUserInputObjectSchema } from './GenderEnumUncheckedCreateWithoutUserInput.schema';
import { GenderEnumCreateOrConnectWithoutUserInputObjectSchema } from './GenderEnumCreateOrConnectWithoutUserInput.schema';
import { GenderEnumUpsertWithoutUserInputObjectSchema } from './GenderEnumUpsertWithoutUserInput.schema';
import { GenderEnumWhereUniqueInputObjectSchema } from './GenderEnumWhereUniqueInput.schema';
import { GenderEnumUpdateToOneWithWhereWithoutUserInputObjectSchema } from './GenderEnumUpdateToOneWithWhereWithoutUserInput.schema';
import { GenderEnumUpdateWithoutUserInputObjectSchema } from './GenderEnumUpdateWithoutUserInput.schema';
import { GenderEnumUncheckedUpdateWithoutUserInputObjectSchema } from './GenderEnumUncheckedUpdateWithoutUserInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.GenderEnumUpdateOneRequiredWithoutUserNestedInput>;
export const GenderEnumUpdateOneRequiredWithoutUserNestedInputObjectSchema: SchemaType = z
    .object({
        create: z
            .union([
                z.lazy(() => GenderEnumCreateWithoutUserInputObjectSchema),
                z.lazy(() => GenderEnumUncheckedCreateWithoutUserInputObjectSchema),
            ])
            .optional(),
        connectOrCreate: z.lazy(() => GenderEnumCreateOrConnectWithoutUserInputObjectSchema).optional(),
        upsert: z.lazy(() => GenderEnumUpsertWithoutUserInputObjectSchema).optional(),
        connect: z.lazy(() => GenderEnumWhereUniqueInputObjectSchema).optional(),
        update: z
            .union([
                z.lazy(() => GenderEnumUpdateToOneWithWhereWithoutUserInputObjectSchema),
                z.lazy(() => GenderEnumUpdateWithoutUserInputObjectSchema),
                z.lazy(() => GenderEnumUncheckedUpdateWithoutUserInputObjectSchema),
            ])
            .optional(),
    })
    .strict() as SchemaType;
